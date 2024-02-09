import useSocketIOStore from "@/stores/SocketIO/useSocketIOStore";
import AIMessageItem from "./AIMessageItem";
import HumanMessageItem from "./HumanMessageItem"



export type MessageType =
    | "human"
    | "ai"
    | "generic"
    | "system"
    | "function"
    | "tool";

export type MessageStatus = 
    | "a" // ACCEPTED
    | 'g' // GENERATING
    | 'f' // FINISHED
    | 'e' // ERROR

interface BaseMessage{
    id: string;
    content: string | string[];
    status?: MessageStatus;
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