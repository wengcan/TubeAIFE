function Home() {
    return (
        <main className="w-screen h-screen flex">
            <div className="flex-grow flex flex-col items-center gap-4 justify-center">
                <div className="relative border w-full max-w-[800px] p-1 rounded-2xl">
                    <textarea  data-gramm="false" className="w-full h-full p-4 resize-none outline-none active:border-none focus:border-none" />
                </div>
            </div>
        </main>
    )
}

export default Home