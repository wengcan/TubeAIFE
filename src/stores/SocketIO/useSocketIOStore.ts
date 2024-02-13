import { create } from 'zustand'
import { AIMessage, HumanMessage, MessageStatus } from '@/components/Chat';

type INCOMMING_MESSAGE = {
  id: string;
  content: string;
  status: string;
}

type INCOMMING_RESULT = {
  id: string;
  key: string;
  data: object;
}


interface ChatUsers {
  useId: string;
  userName: string;
  userAvatar?: string;
  active?: boolean;
}


interface SocketState {
  connected: boolean;
  messages: (AIMessage | HumanMessage)[];
  data: { [key: string]: object };
  users: { [key: string]: ChatUsers; }
  toggleStatus: () => void;
  appendAIMessage: (value: INCOMMING_MESSAGE) => void;
  appendHumanMessage: (message: HumanMessage) => void;
  handleResult: (value: INCOMMING_RESULT) => void;
  flushMessage: () => void;
  setData: (key: string, value: any) => void;
}

const useSocketIOStore = create<SocketState>((set) => ({
  connected: false,
  messages: [],
  data: {},
  users: {},
  toggleStatus: () => set((state) => ({ ...state, connected: !state.connected })),
  appendAIMessage: (value: INCOMMING_MESSAGE) => {
    const { id, content, status } = value
    if (id) {
      set((state) => {
        const updatedMessages = [...state.messages];
        const indexToUpdate = updatedMessages.findIndex((item) => item.id === id);
        if (indexToUpdate !== -1) {
          updatedMessages[indexToUpdate].status =  status as MessageStatus;
          let oldContents = updatedMessages[indexToUpdate].content as string[]
          content && oldContents.push(content)
        } else {
          updatedMessages.push({
            "type": "ai",
            id,
            content: content ? [content] : [],
            status: status as MessageStatus
          })
        }
        return { ...state, messages: updatedMessages }
      })
    }
  },
  appendHumanMessage: (message: HumanMessage) => {
    set((state) => {
      const updatedMessages = [...state.messages, message]
      return {
        ...state,
        messages: updatedMessages
      }
    })
  },
  handleResult: (value: INCOMMING_RESULT) => {
    const { key, data } = value;
    set(state => ({
      ...state,
      data: {
        ...state.data,
        [key]: data
      }
    }))
  },
  flushMessage: () => {
    set(state=>({
      ...state,
      messages: []
    }))
  },
  setData: (key: string, value: any) => {
    set(state => ({
      ...state,
      data: {
        ...state.data,
        [key]: value
      }
    }))
  }
}))

export default useSocketIOStore