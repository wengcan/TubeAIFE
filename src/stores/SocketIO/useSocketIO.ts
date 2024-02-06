import React, { MouseEventHandler, useCallback, useContext, useEffect } from "react";
import { io } from 'socket.io-client';
import useSocketIOStore from './useSocketIOStore'
import { HumanMessage } from "@/components/Chat";
import { useHumanMessageStore } from "../useHumanMessageStore";
import { COMMAND } from "@/constants/cmd";
export const socket = io('http://localhost:8080');



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
    }, [humanMessageStore.cmd, humanMessageStore.video_id, humanMessageStore.content])
    const setHumanInput = (content: string) => {
        humanMessageStore.setMessage(undefined, content)
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