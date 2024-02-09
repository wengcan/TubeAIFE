interface QuickBtnProps{
    text: string;
    onClick: ()=>void;
}
export default function QuickBtn({text, onClick}: QuickBtnProps){
    return (
        <button onClick={onClick} className='px-2 border text-sm rounded-lg border-blue-400 text-blue-400  hover:bg-blue-600 hover:text-white'>
            {text}
        </button>
    )
}