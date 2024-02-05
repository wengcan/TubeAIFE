import useSocketIOStore from "../SocketIO/useSocketIOStore";
import AIMessageItem from "./AIMessageItem";
import HumanMessageItem from "./HumanMessageItem"


import React from 'react'

export type MessageType =
  | "human"
  | "ai"
  | "generic"
  | "system"
  | "function"
  | "tool";

interface BaseMessage{
    id: string;
    content: string | string[];
    name?: string;
    avatar?: string;
}

export interface AIMessage  extends BaseMessage{
    type: "ai"
}

export interface HumanMessage  extends BaseMessage{
    type: "human"
}


export default function Chat(){
    const store = useSocketIOStore()
    return (
        <div>
           {store.messages.map(item=>{
                return (
                    <div key={item.id}>
                        {item.type == "human" && <HumanMessageItem {...item} />}
                        {item.type == "ai" && <AIMessageItem {...item} />}
                    </div>
                )
            })}
        </div>
    )
}