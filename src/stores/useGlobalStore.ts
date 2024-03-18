import { create } from 'zustand'


type Theme = "dark" | "light"

interface GlobalStore{
    theme: Theme
    responding: boolean
    history: []
}

const useGlobalStore = create<GlobalStore>((set) => ({
    theme: "dark",
    responding: false,
    history: []
}))

export {useGlobalStore}