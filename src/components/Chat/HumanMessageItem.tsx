import { HumanMessage } from ".";
import UserLine from '@/assets/user-line.svg?react'

export default function HumanMessageItem(props: HumanMessage) {
    return (
        <div className="flex flex-row justify-start pt-4">
            <div className="p-2">
                <div className="w-[36px] h-[36px] flex justify-center items-center rounded-full overflow-hidden bg-orange-50">
                    <UserLine className="w-[22px] h-[22px] fill-orange-400" />
                </div>
            </div>
            <div className="flex flex-col w-full">
                <h5 className="text-sm font-bold leading-5 py-2">You</h5>
                <div className="">
                    <p className="text-sm">
                        {props.content}
                    </p>
                </div>
            </div>
        </div>
    )
}