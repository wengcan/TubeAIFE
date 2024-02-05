import React from "react";
import { HumanMessage } from ".";

export default function HumanMessageItem(props: HumanMessage) {
    return (
        <div className="flex flex-row justify-end py-4">

            <div className="flex flex-col ">
                <h5 className="text-sm font-bold leading-5 text-right py-2">You</h5>
                <div className="border rounded-2xl">
                    <p className="p-4 text-sm">
                        {props.content}
                    </p>
                </div>
            </div>
        </div>
    )
}