import { create } from 'zustand'

interface ChatStore{
    inputContents: string;
    setInputContents: (content?: string) => void;
}

const useChatStore = create<ChatStore>((set) => ({
    users: {},
    inputContents: "",
    setInputContents: (contents?: string) => {
        set(state=>({
            ...state,
            inputContents: contents
        }))
    }
}))

export {useChatStore}