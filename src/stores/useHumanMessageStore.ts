import { create } from 'zustand'
import { COMMAND } from '@/constants/cmd';

interface BASE_OUTBOUND_MESSAGE{
    cmd: COMMAND;
    content?: string;
}


interface HUMAN_OUTBOUND_MESSAGE extends BASE_OUTBOUND_MESSAGE{
    video_id?: string;
    setCmd : (cmd: COMMAND) => void;
    setMessage: (video_id?: string,content?: string) => void;
}

const useHumanMessageStore = create<HUMAN_OUTBOUND_MESSAGE>((set) => ({
    cmd: COMMAND.PING,
    setCmd(cmd: COMMAND) {
        set((state) =>({
            ...state,
            cmd
        }))
    },
    setMessage(video_id, content) {
        set((state) =>{
            const new_state = {...state}
            if (video_id) {
                new_state.video_id = video_id
            }
            if (content || content == "") {
                new_state.content = content
            }
            return new_state
        })
    },
}))

export {useHumanMessageStore}