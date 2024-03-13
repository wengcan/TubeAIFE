import { APP } from '@/constants/app'
import { create } from 'zustand'


type Theme = "dark" | "light"
interface GlobalStore{
    theme: Theme
    history: []
}

const useGlobalStore = create<GlobalStore>((set) => ({
    theme: "dark",
    history: []
}))

export {useGlobalStore}