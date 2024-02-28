function Home() {
    return (
        <main className="w-screen h-screen flex">
            <div className="flex-grow flex flex-col items-center gap-4 justify-center">
                <div className="p-6">
                    <div className="flex justify-center items-center gap-4">
                        <svg className="w-[44px] h-[44px] fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 5.25C16.7949 5.25 18.25 3.79493 18.25 2H19.75C19.75 3.79493 21.2051 5.25 23 5.25V6.75C21.2051 6.75 19.75 8.20507 19.75 10H18.25C18.25 8.20507 16.7949 6.75 15 6.75V5.25ZM4 7C4 5.89543 4.89543 5 6 5H13V3H6C3.79086 3 2 4.79086 2 7V17C2 19.2091 3.79086 21 6 21H18C20.2091 21 22 19.2091 22 17V12H20V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V7Z"></path></svg>
                        <h2 className=" text-3xl">SummarizeAI</h2>
                    </div>
                </div>
                <div className="relative border w-full max-w-[800px] p-1 rounded-2xl">
                    <textarea
                        data-gramm="false"
                        className="w-full  p-4 resize-none outline-none active:border-none focus:border-none"
                        placeholder="Enter A YouTube URL to start a new conversation"
                    />
                    <div className="flex justify-end px-2">
                        <button aria-label="language toggle" className="flex h-10 items-center justify-center hover:text-primary-500">
                            <svg className="w-[24px] h-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home