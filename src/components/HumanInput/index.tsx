import { useCallback, useMemo, useState } from 'react'
import clsx from 'clsx'
import get from 'lodash/get'
import { useGlobalStore } from '@/stores/useGlobalStore'
import useSocketIO from '@/stores/SocketIO/useSocketIO'
import Loading from '@/components/Loading'
import QuickBtn from './QuickBtn'
import RestartIcon from '@/assets/restart-line.svg?react'
import AirPlaneIcon from '@/assets/air-plane.svg?react'
import InputBtn from './InputBtn'


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

    const placeholderText = useMemo<string>(() => {
        if (globalStore.activeApp == "chat-with-ai") {
            return 'Send message to AI'
        } else {
            if (!get(data, ['info', 'video_id'])) {
                return 'Enter the YouTube URL to start a new conversation'
            } else {
                return ' Questioning  for this video'
            }
        }
    }, [
        globalStore.activeApp,
        data
    ])


    const btnDisabled = useMemo<boolean>(() => {
        return input_contents == ""
    }, [input_contents])


    return (
        <div className="w-full">

            <div className={clsx("min-h-10 bg-white dark:bg-zinc-800 rounded-xl border-2 ", focused ? "border-slate-500 dark:border-white" : " dark:border-zinc-500")}>
                <div className='flex flex-col'>
                    <div className='flex-1 p-2'>
                        <textarea
                            value={input_contents}
                            onChange={e => {
                                setHumanInput(e.target.value)
                            }}
                            placeholder={placeholderText}
                            onFocus={() => { setFocused(true) }}
                            onBlur={() => setFocused(false)}
                            data-gramm="false"
                            className="w-full bg-white dark:bg-zinc-800 dark:text-white  p-2 resize-none outline-none active:border-none focus:border-none"
                        />
                    </div>
                    <div className='flex justify-between items-end p-2'>
                        <div>
                            {
                                get(data, ['info', 'video_id']) && (
                                    <div className='flex flex-row'>
                                        <div className='flex flex-row  rounded-full justify-center items-center ' >
                                            {/* <div className="w-[36px] h-[36px] rounded-full overflow-hidden">
                            <img className='h-[36px]' src='https://i.ytimg.com/vi/iHrH450y02c/maxresdefault.jpg' />
                        </div> */}
                                            <div className='pl-2 pr-4'>
                                                <h5 className='text-sm font-bold dark:text-white'>{get(data, ['info', 'title'])}</h5>
                                                <div className='flex flex-row gap-1 pb-2'>
                                                    <QuickBtn text="Summarize" onClick={() => {
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

                        </div>
                        <div className='flex flex-row gap-4'>
                            <InputBtn 
                                title='clear history'
                                onClick={sendHumanMessage} 
                                disabled={btnDisabled}
                                Icon={RestartIcon}
                                classNames={clsx('w-[22px] fill-slate-300', btnDisabled? '': 'fill-slate-500')}
                            />                            
                            <InputBtn 
                                title='send'
                                onClick={sendHumanMessage} 
                                disabled={btnDisabled}
                                Icon={AirPlaneIcon}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}