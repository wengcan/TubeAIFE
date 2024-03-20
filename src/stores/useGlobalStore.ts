import { create } from 'zustand'


type Theme = "dark" | "light"

interface GlobalStore{
    theme: Theme
}

const useGlobalStore = create<GlobalStore>((set) => ({
    theme: "dark"
}))

export {useGlobalStore}