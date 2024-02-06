
import React from "react";
import clsx from "clsx";
import Item from "./Item";



export default function Picker() {
    return (
        <>
            <div className='w-full h-0 bg-slate-400 relative'>
                <div className='absolute w-full h-[40px] bg-red-50 bottom-0'>
                    {/* <div className="flex flex-row">
                        <input
                            placeholder="Youtube URL or video Id Here"
                            className="w-full rounded-l-lg border border-stroke border-slate-600  bg-transparent px-4 py-2 font-normal text-black outline-none transition focus:border-blue-800" 
                        /> 
                        <button className="w-[100px] rounded-r-lg bg-slate-600 text-white">go</button>
                    </div> */}
                    {/* <div>TODO add subtitle player</div>
                    <div className='relative w-full h-full flex flex-row gap-2 p-2'>
                        <div className="w-2/3">
                            subtitle here
                        </div>
                        <div className="h-full flex flex-col w-1/3">
                            <div className="flex flex-row">
                                <input className=" border-none p-2 w-[200px]" type="text" placeholder="Youtube URL / Video Id" />
                                <button>go</button>
                            </div>
                            <div className="flex-1 h-full overflow-y-auto">
                                <ul>
                                    <li><Item /></li>
                                    <li><Item /></li>
                                    <li><Item /></li>
                                    <li><Item /></li>
                                </ul>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className='w-full   rounded-lg'>

                <b>Top Story with Tom Llamas - Jan. 30 | NBC News NOW</b>
                <div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="">
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}