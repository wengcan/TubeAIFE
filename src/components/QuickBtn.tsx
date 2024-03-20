import clsx from "clsx";

interface QuickBtnProps{
    text: string;
    active?: boolean;
    disabled?: boolean;
    onClick: ()=>void;
}
export default function QuickBtn({text, active, disabled, onClick}: QuickBtnProps){
    return (
        <button 
            disabled={disabled} 
            onClick={onClick} 
            className={
                clsx(
                    'px-2 border text-sm rounded-lg border-blue-400 text-blue-400  ',
                    active && 'bg-blue-600 text-white',
                    disabled && ' opacity-30'
                )
            }
        >
            {text}
        </button>
    )
}