import React, { MouseEventHandler, useCallback, useContext, useEffect } from "react";
import { io } from 'socket.io-client';
import useSocketIOStore from './useSocketIOStore'
import { HumanMessage } from "@/components/Chat";
import { useHumanMessageStore } from "../useHumanMessageStore";
import { COMMAND } from "@/constants/cmd";

export const socket = io('http://localhost:8080');

const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/gi;

export default function useSocketIO(){
    const store = useSocketIOStore()
    const humanMessageStore = useHumanMessageStore()
    useEffect(() => {
        if (!socket.connected ){
            socket.on('connect',  store.toggleStatus);
            socket.on('disconnect', store.toggleStatus);
            socket.on('message', store.appendAIMessage);
        }
        return () => {
            socket.off('connect', store.toggleStatus);
            socket.off('disconnect', store.toggleStatus);
            socket.off('message', store.appendAIMessage);
        };
    },[])
    const getMessage = useCallback(()=> {
        const current_cmd = humanMessageStore.cmd
        switch (current_cmd ){
            case COMMAND.QA:
            case COMMAND.SUMMARY:
            case COMMAND.QA:
                return JSON.stringify({
                    cmd: current_cmd,
                    video_id: humanMessageStore.video_id,
                    content: humanMessageStore.content
                })
            case COMMAND.LOAD:
            case COMMAND.CHAT:
                return JSON.stringify({
                    cmd: current_cmd ,
                    content: humanMessageStore.content
                })
        }
    }, [
        humanMessageStore.cmd, 
        humanMessageStore.video_id, 
        humanMessageStore.content
    ])
    const setHumanInput = (content: string) => {
        const matches = content.match(youtubeRegex); 
        if (matches){
            console.log(matches[0])
            loadYoutube(matches[0])
            setTimeout(()=>{
                humanMessageStore.setMessage(undefined, "")
            },1000)

        } else {
            humanMessageStore.setMessage(undefined, content)
        }

    }

    const loadYoutube = (url: string) => {
        socket.timeout(5000).emit("message", JSON.stringify({cmd: COMMAND.LOAD, content: url})) , () => {}      
    }
 
    const sendHumanMessage = (_: any) => {
        const message = {
            id: Date.now().toString(),
            type: "human",
            content: humanMessageStore.content
        }   as HumanMessage    
        store.appendHumanMessage(message)   
        socket.timeout(5000).emit("message", getMessage()) , () => {}        
    }

    return [
        humanMessageStore.content, 
        setHumanInput, 
        sendHumanMessage
    ] as const;
}