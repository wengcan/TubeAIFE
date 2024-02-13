export default function Fallback() {
    return (
        <div className="w-full h-[40px]">
            <div role="status" className="w-1/2 animate-pulse">
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-4/5 mb-2.5 mx-auto"></div>
                <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 w-3/4"></div>
                <span className="sr-only">Loading...</span>
            </div>

        </div>
    )
}