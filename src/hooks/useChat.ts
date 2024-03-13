import { create } from 'zustand'

interface ChatStore{
    inputContents: string;
    setInputContents: (content?: string) => void;
}

const useChat = create<ChatStore>((set) => ({
    inputContents: "",
    setInputContents: (contents?: string) => {
        set(state=>({
            ...state,
            inputContents: contents
        }))
    }
}))

export default useChat