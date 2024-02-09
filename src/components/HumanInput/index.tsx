import { useState } from 'react'
import clsx from 'clsx'
import get from 'lodash/get'
import ArrowUpCircle from '@/assets/arrow-up-circle-line.svg?react'
import { useGlobalStore } from '@/stores/useGlobalStore'
import useSocketIO from '@/stores/SocketIO/useSocketIO'
import Loading from '@/components/Loading'
import QuickBtn from './QuickBtn'

export default function HumanInput() {
    const [focused, setFocused] = useState<boolean>(false)
    const globalStore = useGlobalStore()
    const [
        input_contents, 
        data, 
        setHumanInput, 
        sendHumanMessage, 
        handleShortcut
    ] = useSocketIO()

    const getPlaceholderContents = (): string => {
        if (globalStore.activeApp == "chat-with-ai") {
            return 'Send message to AI'
        } else {
            if (!get(data, ['info', 'video_id'])){
                return 'Enter the YouTube URL to start a new conversation'
            } else {
                return 'Ask Question about this video'
            }
        }
    }
    return (
        <div className="w-full">
            {
                get(data, ['info', 'video_id']) && (
                    <div className='flex flex-row'>
                        <div className='flex flex-row  rounded-full justify-center items-center ' >
                            {/* <div className="w-[36px] h-[36px] rounded-full overflow-hidden">
                            <img className='h-[36px]' src='https://i.ytimg.com/vi/iHrH450y02c/maxresdefault.jpg' />
                        </div> */}
                            <div className='pl-2 pr-4'>
                                <h5 className='text-sm font-bold'>{get(data, ['info', 'title'])}</h5>
                                <div className='flex flex-row gap-1 pb-2'>
                                    <QuickBtn text="Summarize" onClick={()=>{
                                        handleShortcut(get(data, ['info', 'video_id']), "summarize")
                                    }} />
                            
                                    <button className='px-2 border text-sm rounded-lg border-blue-400 text-blue-400  hover:bg-blue-600 hover:text-white'>Generate a comment</button>
                                    <button className='px-2 border text-sm rounded-lg border-blue-400 text-blue-400  hover:bg-blue-600 hover:text-white'>Top 10 keywords</button>
                                </div>
                            </div>
                        </div>
                        <div className='flex-1'></div>
                    </div>
                )


            }
            {
                get(data, 'info') && !get(data, ['info', 'video_id']) && (
                    <div className='flex items-end  h-[22px] p-2'>
                        <Loading />
                    </div>
                )
            }



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