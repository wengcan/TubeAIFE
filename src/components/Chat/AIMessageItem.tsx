import React from "react";
import { AIMessage } from ".";
import Markdown from "react-markdown";

export default function AIMessageItem(props: AIMessage) {
    const contents = typeof(props.content) == "string" ? [props.content] : props.content
    return (
        <div className="flex flex-row py-4">
            <div className="p-2 ">
                <div className="w-[60px] rounded-full overflow-hidden">
                    <img src='https://yt3.googleusercontent.com/GjDLYFGF4IQaUobUK-6q3nOsU4o8fRMl4XgVipPWRqdRVt61s2LqgnbBXu3-qYL4Ab2xsfVo=s176-c-k-c0x00ffffff-no-rj' />
                </div>
            </div>
            <div>
                <h5 className="text-sm font-bold leading-5 py-2">Top Story with Tom Llamas - Jan. 30 | NBC News NOW</h5>
                <div className="border rounded-2xl">
                    <div className="p-4 text-sm">
                    {contents.map((item, index)=>{
                        return (
                            <Markdown key={index} >
                                {item}
                            </Markdown>
                        )
                    })}     
                    </div>


                </div>
            </div>

        </div>
    )
}