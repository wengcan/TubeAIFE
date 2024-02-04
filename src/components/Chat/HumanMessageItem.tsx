import React from "react";
import { HumanMessage } from ".";

export default function HumanMessageItem(props: HumanMessage){
    return (
        <div className="flex flex-row justify-end py-4">
            <div className="bg-white rounded-2xl">
                <p className="p-4 text-sm">
                    {props.content}
                </p>
            </div>
        </div>
    )
}