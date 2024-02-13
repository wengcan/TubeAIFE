import React from "react";
import clsx from "clsx";

interface MenuItemProps {
  children: React.ReactNode;
  label: string;
  active: boolean;
}


export default function MenuItem({ children, active, label }: MenuItemProps) {

  return (
    <div className={clsx('w-full  flex flex-col items-center py-2', active ? "bg-white dark:bg-zinc-900" : "")}>
      {children}
      <span className={clsx(' text-xs font-mono text-center', active ? "text-black dark:text-white" : "text-white dark:text-zinc-200")}>{label}</span>
    </div>

  )
}