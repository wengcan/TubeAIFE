import { AIMessage } from ".";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import BardLine from '@/assets/bard-line.svg?react'
import Loading from "../Loading";

export default function AIMessageItem(props: AIMessage) {
    const contents = typeof(props.content) == "string" ? [props.content] : props.content
    return (
        <div className="flex flex-row pt-4">
            <div className="p-2">
                <div className="w-[36px] h-[36px] flex justify-center  items-center rounded-full overflow-hidden bg-blue-50 ">
                    <BardLine className="w-[22px] h-[22px] fill-blue-400" />
                </div>
            </div>
            <div className="w-full">
                <h5 className="text-sm font-bold leading-5 py-2">AI</h5>
                <div className="pr-[36px]">
                    <div className="text-sm">
                    {contents.map((item, index)=>{
                        return (
                            <Markdown remarkPlugins={[remarkGfm]} key={index} >
                                {item}
                            </Markdown>
                        )
                    })}   
                    </div>
                    <div className="flex">
                        {
                            (props.status == "a" || props.status == "g") && <Loading /> 
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}