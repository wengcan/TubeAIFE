import { useEffect } from "react";
import { io } from 'socket.io-client';
import useSocketIOStore from './useSocketIOStore'
import { HumanMessage } from "@/components/Chat";
import { useChatStore } from "@/stores/useChatStore";
import { COMMAND } from "@/constants/cmd";

export const socket = io('http://localhost:8080');
const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/gi;
export default function useSocketIO(){
    const store = useSocketIOStore()
    const chatStore = useChatStore()

    useEffect(() => {
        if (!socket.connected ){
            socket.on('connect',  store.toggleStatus);
            socket.on('disconnect', store.toggleStatus);
            socket.on('message', store.appendAIMessage);
            socket.on('result', store.handleResult);
        }
        return () => {
            socket.off('connect', store.toggleStatus);
            socket.off('disconnect', store.toggleStatus);
            socket.off('message', store.appendAIMessage);
            socket.off('result', store.handleResult);
        };
    },[])

    const setHumanInput = (contents: string) => {
        const matches = contents.match(youtubeRegex); 
        if (matches){
            loadYoutube(matches[0])
            setTimeout(()=>{
                chatStore.setInputContents("")
            },1000)
        } else {
            chatStore.setInputContents(contents)
        }

    }

    const loadYoutube = (url: string) => {
        store.setData('info', {})
        socket.timeout(5000).emit("message", JSON.stringify({cmd: COMMAND.LOAD, content: url})) , () => {}      
    }

    const handleShortcut = (id: any, name: string) => {
        socket.timeout(5000).emit("message", JSON.stringify({cmd: COMMAND.SHORTCUT, id, name})) , () => {}   
    }
 
    const sendHumanMessage = (_: any) => {
        const message = {
            id: Date.now().toString(),
            type: "human",
            content: chatStore.inputContents
        }   as HumanMessage    
        store.appendHumanMessage(message)   
        socket.timeout(5000).emit("message", JSON.stringify({cmd: COMMAND.CHAT, content: chatStore.inputContents})) , () => {}    
        chatStore.setInputContents("")    
    }

    return [
        chatStore.inputContents, 
        store.data,
        setHumanInput, 
        sendHumanMessage,
        handleShortcut
    ] as const;
}