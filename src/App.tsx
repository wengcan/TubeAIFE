import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import Chat  from './components/Chat'
import  { AIMessage, HumanMessage, MessageType} from './components/Chat';
import List from './components/List'
import {COMMAND_TYPE} from './constants/command'
import useSocketIO from './components/SocketIO/useSocketIO';
type INCOMMING_MESSAGE = {
  id: string;
  content: string;
}

function App() {
  const sendHumanMessage = useSocketIO()
  const [humanInputMessage, setHumanInputMessage] = useState("");
  const handleUserSubmit = () => {
    sendHumanMessage(humanInputMessage)
    setHumanInputMessage("")
  }

  

  return (
    <>

      {/* <div className='flex  flex-row w-full bg-blue-100'>
          <div className=' p-6'>
            <input className='w-4/5 border h-10 p-4 text-gray-900 border-gray-300  rounded-full bg-white' type='text' placeholder='YouTube URL' />
          </div>
        </div> */}

      <div className='w-screen h-screen flex flex-row m-auto bg-neutral-50'>
        {/* <div className='w-[300px] h-full overflow-y-auto'>
          <List />
        </div> */}
        <div className='w-full flex h-full flex-col'>
          <div className='flex-1 overflow-hidden'>
            <div className='h-full p-4 pb-0 '>
              <div className='w-full h-full bg-white p-4 flex flex-col gap-5 rounded-xl overflow-y-auto'>
                <Chat />
              </div>
            </div>
          </div>
          <div className='w-full'>
            <div className='p-4 flex flex-col gap-2'>
              <div className='w-full   rounded-lg'>
                <b>Top Story with Tom Llamas - Jan. 30 | NBC News NOW</b>
              </div>
              <div className='w-full h-[120px]'>
                <div className='w-full'>
                  <textarea 
                    value={humanInputMessage}
                    onChange={e=>{
                      setHumanInputMessage(e.target.value)
                    }}
                    placeholder='questions here' 
                    className='w-full h-full border p-4  rounded-xl' 
                  />
                </div>
                <div className='flex justify-end'>
                  <button 
                    onClick={handleUserSubmit}
                    className={clsx('px-5 py-1  text-white  rounded-lg', humanInputMessage==="" ? "bg-slate-200" : "bg-sky-500" )}
                    disabled={humanInputMessage===""}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
