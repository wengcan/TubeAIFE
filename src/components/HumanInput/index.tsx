import { useState } from 'react'
import clsx from 'clsx'
import ArrowUpCircle from '@/assets/arrow-up-circle-line.svg?react'
import { useGlobalStore } from '@/stores/useGlobalStore'
import useSocketIO from '@/stores/SocketIO/useSocketIO'

export default function HumanInput() {
    const [focused, setFocused] = useState<boolean>(false)
    const globalStore = useGlobalStore()
    const [input_contents, setHumanInput, sendHumanMessage] = useSocketIO()

    const getPlaceholderContents = (): string => {
        if (globalStore.activeApp == "chat-with-ai") {
            return 'Send message to AI'
        }


        return 'Enter the YouTube URL and click send button to start a new conversation'
    }

    return (
        <div className="w-full">
            <div className='flex flex-row'>
                <div className='flex flex-row  rounded-full justify-center items-center ' >
                    <div className="w-[36px] h-[36px] rounded-full overflow-hidden">
                        <img src='https://yt3.googleusercontent.com/GjDLYFGF4IQaUobUK-6q3nOsU4o8fRMl4XgVipPWRqdRVt61s2LqgnbBXu3-qYL4Ab2xsfVo=s176-c-k-c0x00ffffff-no-rj' />
                    </div>
                    <div className='pl-2 pr-4'>
                        <h5 className='text-sm font-bold'>Top Story with Tom Llamas - Jan. 30 | NBC News NOW</h5>
                        <div className='flex flex-row gap-1 pb-2'>
                            <button className='px-2 border text-sm rounded-lg border-blue-400 text-blue-400  hover:bg-blue-600 hover:text-white'>Summarize</button>
                            <button className='px-2 border text-sm rounded-lg border-blue-400 text-blue-400  hover:bg-blue-600 hover:text-white'>Write a comment</button>
                        </div>
                    </div>
                </div>
                <div className='flex-1'></div>
            </div>
            <div className={clsx("min-h-10 bg-white rounded-xl border-2 ", focused ? "border-blue-600" : "")}>
                <div className='flex flex-row'>
                    <div className='flex-1 p-2'>
                        <textarea
                            value={input_contents}
                            onChange={e => {
                                setHumanInput(e.target.value)
                            }}
                            placeholder={getPlaceholderContents()}
                            onFocus={() => { setFocused(true) }}
                            onBlur={() => setFocused(false)}
                            data-gramm="false"
                            className="w-full p-2 resize-none outline-none active:border-none focus:border-none"
                        />
                    </div>
                    <div className='flex items-end p-4'>
                        <button onClick={sendHumanMessage}>
                            <ArrowUpCircle className='w-[44px] fill-blue-600' />

                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}