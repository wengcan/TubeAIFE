interface LoadingProps{
    label?: string
}
export default function Loading({label}:LoadingProps) {
    return (
        <div className="flex space-x-2 justify-center items-center ">
            {label && <span>{label}</span>}
            <div className="h-2 w-2 bg-black dark:bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-2 w-2 bg-black dark:bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-2 w-2 bg-black dark:bg-white rounded-full animate-bounce"></div>
        </div>
    )
}