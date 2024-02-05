import { create } from 'zustand'
import { AIMessage, HumanMessage } from '../Chat';

type INCOMMING_MESSAGE = {
  id: string;
  content: string;
}

interface SocketState {
  connected: boolean;
  messages: (AIMessage | HumanMessage)[];
  toggleStatus: () => void;
  appendAIMessage: (value: INCOMMING_MESSAGE) => void;
  appendHumanMessage: (message: HumanMessage) => void;
}

const useSocketIOStore = create<SocketState>((set) => ({
  connected: false,
  messages: [],
  toggleStatus:() => set((state) => ({...state, connected: !state.connected})),
  appendAIMessage: (value: INCOMMING_MESSAGE) => {
    const {id, content} = value
    if (id) {
      set((state) =>{
        const updatedMessages = [...state.messages];
        const indexToUpdate = updatedMessages.findIndex((item) => item.id === id);
        if (indexToUpdate !== -1) {
          let oldContents = updatedMessages[indexToUpdate].content as string[]
          oldContents.push(content)
        }  else {
          updatedMessages.push({
            "type" : "ai",
            id,
            content: [content]
          })
        }  
        return {...state, messages: updatedMessages}   
      })
    }
  },
  appendHumanMessage: (message: HumanMessage) => {
    set((state) =>{
      const updatedMessages = [...state.messages, message]
      return {
        ...state,
        messages: updatedMessages
      }
    })
  },
}))

export default useSocketIOStore