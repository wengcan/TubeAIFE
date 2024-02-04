import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { socket } from './socket'
import Chat  from './components/Chat'
import  { AIMessage, HumanMessage, MessageType} from './components/Chat';
import List from './components/List'
import {COMMAND_TYPE} from './constants/command'
type INCOMMING_MESSAGE = {
  id: string;
  content: string;
}

function App() {
  const [messageHistory, setMessageHistory ] =  useState< (AIMessage | HumanMessage)[]>([]);
  const [inComingMessage, setInComingMessage] = useState<INCOMMING_MESSAGE[]>([])
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [messageEvents, setMessageEvents] = useState([]);
  const [humanInputMessage, setHumanInputMessage] = useState("");
  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onMessageEvent(value: INCOMMING_MESSAGE) {
      console.log(value)
      const {id, content} = value
      if(id && content){
        setInComingMessage(previous => [...previous, {
          id,
          content
        }])
      }
      // setMessageEvents(previous => [...previous, value]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('message', onMessageEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('message', onMessageEvent);
    };
  }, []);


  useEffect(()=>{
    if (inComingMessage.length > 0){
      const updatedInComingMessage= [...inComingMessage] 
      const item = updatedInComingMessage[0]
      console.log(item)
      addAiMessageToHistory(item.id, item.content )
      updatedInComingMessage.splice(0,1)
      setInComingMessage(updatedInComingMessage)
    }

  }, [inComingMessage])


  const addAiMessageToHistory = (id: string, content: string) => {
      const updatedMessageHistory = [...messageHistory];
      const indexToUpdate = updatedMessageHistory .findIndex((item) => item.id === id);
      if (indexToUpdate !== -1) {
        let oldContents = updatedMessageHistory[indexToUpdate].content as string[]
        oldContents.push(content)
      } else {
        updatedMessageHistory.push({
          "type" : "ai",
          id,
          content: [content]
        })
      }

      setMessageHistory(updatedMessageHistory)

  }

  const addUserMessageToHistory = ( content: string) => {
    setMessageHistory([
      ...messageHistory,
      {
        id: Date.now().toString(),
        type: "human" ,
        content
      }
    ])
  }

  const sendMessage = (type: COMMAND_TYPE, content: string ) => {
    const message = {
      "type": type,
      content
    }
    addUserMessageToHistory(content)
    socket.timeout(5000).emit("message", JSON.stringify(message) , () => {
      
    })
  }

  const handleUserSubmit = () => {
    sendMessage(COMMAND_TYPE.CHAT, humanInputMessage)
    setHumanInputMessage("")
  }
  const handleEnterKeyPress = (e)=>{
    if (e.key === 'Enter') {
      handleUserSubmit()
      e.preventDefault()
    }
  }

  

  return (
    <>

      {/* <div className='flex  flex-row w-full bg-blue-100'>
          <div className=' p-6'>
            <input className='w-4/5 border h-10 p-4 text-gray-900 border-gray-300  rounded-full bg-white' type='text' placeholder='YouTube URL' />
          </div>
        </div> */}

      <div className='w-screen h-screen flex flex-row m-auto'>
        <div className='w-[300px] h-full overflow-y-auto'>
          <List />
        </div>
        <div className='w-full flex h-full flex-col'>
          <div className='flex-1 overflow-hidden'>
            <div className='h-full p-4 pb-0 '>
              <div className='w-full h-full bg-gray-50 p-4 flex flex-col gap-5 overflow-y-auto'>
                <Chat id="123" history={messageHistory} />
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
                    onKeyDown={handleEnterKeyPress}
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
