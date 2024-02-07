import React from "react";
import { HumanMessage } from ".";

export default function HumanMessageItem(props: HumanMessage) {
    return (
        <div className="flex flex-row justify-start py-4">
            <div className="p-2">
                <div className="w-[60px] rounded-full overflow-hidden">
                    <img src='https://yt3.googleusercontent.com/GjDLYFGF4IQaUobUK-6q3nOsU4o8fRMl4XgVipPWRqdRVt61s2LqgnbBXu3-qYL4Ab2xsfVo=s176-c-k-c0x00ffffff-no-rj' />
                </div>
            </div>
            <div className="flex flex-col ">
                <h5 className="text-sm font-bold leading-5 py-2">You</h5>
                <div className="">
                    <p className="text-sm">
                        {props.content}
                    </p>
                </div>
            </div>
        </div>
    )
}