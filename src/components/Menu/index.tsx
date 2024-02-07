/// <reference types="vite-plugin-svgr/client" />
import { useEffect } from "react";
import MenuItem from "./MenuItem";
import { useGlobalStore } from "@/stores/useGlobalStore";
import { useHumanMessageStore } from "@/stores/useHumanMessageStore";
import { APP } from "@/constants/app";
import { COMMAND } from "@/constants/cmd";
import YoutubeLogo from "@/assets/youtube-line.svg?react"
import RebotLogo from '@/assets/robot-2-line.svg?react'



export default function Menu() {
  const globalStore = useGlobalStore()
  const humanMessageStore = useHumanMessageStore()
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.indexOf(APP.YT) >= 0) {
      globalStore.switchApp(APP.YT)
      humanMessageStore.setCmd(COMMAND.LOAD)
    }
    if (hash.indexOf(APP.CHAT) >= 0) {
      globalStore.switchApp(APP.CHAT)
      humanMessageStore.setCmd(COMMAND.CHAT)
    }
  }, [])

  return (
    <div className='w-[80px] flex flex-col items-center h-full overflow-y-auto bg-gray-800 pt-10 gap-4'>
      <a href={`/#/${APP.YT}`} onClick={() => {
        globalStore.switchApp(APP.YT)
      }}>
        <MenuItem label="YouTube Insight" active={globalStore.activeApp == APP.YT}>
          <YoutubeLogo className='w-[30px] fill-[#F40003]' />
        </MenuItem>
      </a>
      <a href={`/#/${APP.CHAT}`} onClick={() => {
        globalStore.switchApp(APP.CHAT)
      }}>
        <MenuItem label="Chat with AI" active={globalStore.activeApp == APP.CHAT}>
          <RebotLogo className='w-[30px] fill-orange-600' />
        </MenuItem>
      </a>
    </div>
  )
}