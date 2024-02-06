import { APP } from '@/constants/app'
import { create } from 'zustand'



interface GlobalStore{
    activeApp: APP,
    switchApp: (name: APP) => void
}

const useGlobalStore = create<GlobalStore>((set) => ({
    activeApp: APP.EMPTY ,
    switchApp: (name: APP)  => {
        set(state=>({
            ...state,
            activeApp: name 
        }))
    }
}))

export {useGlobalStore}