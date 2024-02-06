import React from "react";
import clsx from "clsx";

interface MenuItemProps {
  children: React.ReactNode;
  label: string;
  active: boolean;
}


export default function MenuItem({ children, active, label }: MenuItemProps) {

  return (
    <div className={clsx('w-full  flex flex-col items-center py-1', active ? "bg-gray-100" : "")}>
      {children}
      <span className={clsx(' text-xs font-mono text-center', active ? "text-black" : "text-white")}>{label}</span>
    </div>

  )
}