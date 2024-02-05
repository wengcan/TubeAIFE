import React, { useCallback, useContext, useEffect } from "react";
import { io } from 'socket.io-client';
import useSocketIOStore from './useSocketIOStore'
import { COMMAND_TYPE } from "../../constants/command";
import { HumanMessage } from "../Chat";
export const socket = io('http://localhost:8080');


export default function useSocketIO(){
    const store = useSocketIOStore()
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
    const sendHumanMessage = (content: string) => {
        const message = {
            id: Date.now().toString(),
            type: "human",
            content
        }   as HumanMessage
        store.appendHumanMessage(message)     
        socket.timeout(5000).emit("message", JSON.stringify({
            type: COMMAND_TYPE.CHAT,
            content: content
        }) , () => {})
    }
    return sendHumanMessage
}