/// <reference types="vite-plugin-svgr/client" />
import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import { useGlobalStore } from "@/stores/useGlobalStore";
import { APP } from "@/constants/app";
import YoutubeLogo from "@/assets/youtube-line.svg?react"
import RebotLogo from '@/assets/robot-2-line.svg?react'
import useSocketIOStore from "@/stores/SocketIO/useSocketIOStore";

export default function Menu() {
  const globalStore = useGlobalStore()
  const socketIOStore = useSocketIOStore()


  const switchApp = (hash: string) => {
    if (hash.indexOf(APP.YT) >= 0) {
      globalStore.switchApp(APP.YT)
    }
    if (hash.indexOf(APP.CHAT) >= 0) {
      globalStore.switchApp(APP.CHAT)
    }
  }


  const handleHashChagne = () => {
    const hash = window.location.hash;
    console.log(hash)
    switchApp(hash)
    socketIOStore.flushMessage()
  }

  useEffect(()=>{
    const hash = window.location.hash;
    switchApp(hash)
    if (hash == "#/"){
      window.location.hash = `#/${APP.YT}`
    }
    window.addEventListener("hashchange", handleHashChagne, false);
    return ()=>{
      window.removeEventListener("hashchange", handleHashChagne, false);
    }
  },[])



  return (
    <div className='w-[80px] flex flex-col items-center h-full overflow-y-auto bg-gray-800 pt-10 gap-4'>
      <a href={`/#/${APP.YT}`}>
        <MenuItem label="YouTube Insight" active={globalStore.activeApp == APP.YT}>
          <YoutubeLogo className='w-[30px] fill-[#F40003]' />
        </MenuItem>
      </a>
      <a href={`/#/${APP.CHAT}`}>
        <MenuItem label="Chat with AI" active={globalStore.activeApp == APP.CHAT}>
          <RebotLogo className='w-[30px] fill-orange-600' />
        </MenuItem>
      </a>
    </div>
  )
}