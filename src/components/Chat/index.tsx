import useSocketIOStore from "@/stores/SocketIO/useSocketIOStore";
import AIMessageItem from "./AIMessageItem";
import HumanMessageItem from "./HumanMessageItem"
import { useEffect, useRef } from "react";
import { animated, useSpring } from "react-spring";
import "./style.css"


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

interface BaseMessage {
    id: string;
    content: string | string[];
    status?: MessageStatus;
}

export interface AIMessage extends BaseMessage {
    type: "ai"
}

export interface HumanMessage extends BaseMessage {
    type: "human"
}


export default function Chat() {
    const containerRef = useRef<HTMLDivElement>(null);
    const store = useSocketIOStore()
    const [scrollY, setScrollY] = useSpring(() => ({ scrollTop: 0 }));
    useEffect(() => {
        if (containerRef.current) {
            const { scrollHeight, clientHeight } = containerRef.current;
            setScrollY({ scrollTop: scrollHeight - clientHeight, from: { scrollTop: scrollY.scrollTop } });
        }        
    }, [store.messages]);

    return (
        <animated.div 
            className="w-full h-full overflow-y-auto" 
            ref={containerRef}
            scrollTop={scrollY.scrollTop}
        >
            {store.messages.map(item => {
                return (
                    <div key={item.id} className="chat-history">
                        
                        {item.type == "human" && <HumanMessageItem {...item} />}
                        {item.type == "ai" && <AIMessageItem {...item} />}
                    </div>
                )
            })}
        </animated.div>

    )
}