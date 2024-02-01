
import React from "react";
import clsx from "clsx";

interface ListItemProps {
    active?: boolean;
}
  

export default function ListItem({active}: ListItemProps) {
    return (
        <span   className={clsx(" rounded-md flex flex-row justify-center items-center p-4", active? " bg-sky-300":"bg-white")}>
            <span className="w-[80px] rounded-full overflow-hidden">
                <img src='https://yt3.googleusercontent.com/GjDLYFGF4IQaUobUK-6q3nOsU4o8fRMl4XgVipPWRqdRVt61s2LqgnbBXu3-qYL4Ab2xsfVo=s176-c-k-c0x00ffffff-no-rj' />
            </span>
            <span className={clsx("text-sm text-center p-1", active && " text-white")}>
                Top Story with Tom Llamas - Jan. 30 | NBC News NOW
            </span>
        </span>
    )
}