import Header from "@/components/Header";
import QuickBtn from "@/components/QuickBtn";
import useChat from "@/hooks/useChat";

import clsx from "clsx";

import { Outlet, useLocation, useNavigate } from "react-router-dom";

function Home() {
    const location = useLocation()
    const chat = useChat()
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate("/chat");
    }

    const historyItems = [
        {
            id: 1,
            link: '#',
            title: 'Top Story with Tom Llamas - March 12 | NBC News NOW'
        },
        {
            id: 2,
            link: '#',
            title: 'Asian Americans in New York say they were targeted over race, study shows'
        },
        {
            id: 3,
            link: '#',
            title: 'Russia’s Presidential Election – Who dares challenge Vladimir Putin?'
        },
        {
            id: 4,
            link: '#',
            title: 'Russia’s Presidential Election – Who dares challenge Vladimir Putin?'
        },
        {
            id: 5,
            link: '#',
            title: 'How your Toyota Land Cruiser is made? Toyota factory tour in Japan'
        }
    ]

    // React.useEffect(() => {

    // }, [location])
    return (
        <main className="w-screen h-screen flex">
            <div className="w-full h-full flex-grow flex flex-col items-center gap-4">
                <div className="w-full p-4 border-b">
                    <div className="max-w-[1024px] max-h-[100px] m-auto">
                        <Header size={"sm"} />
                    </div>
                </div>
                <div className={
                    clsx(
                        "h-full max-w-[90%] justify-center  md:max-w-[1024px] flex flex-col flex-grow ",
                        location.pathname == "/" ? "w-[800px]" : "w-full"
                    )
                }>
                    {
                        location.pathname != "/" && (
                            <div className="w-full h-full rounded-2xl overflow-hidden p-4 bg-gray-50">
                                <div className="w-full h-full overflow-y-auto">
                                    <div className="flex justify-start     bg-zinc-300 p-4 rounded-lg ">
                                        <div className="w-[100px] h-[50px] rounded-lg overflow-hidden">
                                            <img src={"https://images.unsplash.com/photo-1682688759157-57988e10ffa8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                                        </div>
                                        <div className="px-2 w-full">
                                            <a href="#" target="_blank" className=" text-slate-900  font-bold font-mono">Top Story with Tom Llamas - March 12 | NBC News NOW</a>
                                            <div>
                                                <QuickBtn text="Summarize this video"
                                                    onClick={() => {

                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <Outlet />
                                </div>
                            </div>

                        )
                    }

                    <div className=" rounded-2xl  my-2 w-full bg-zinc-100 shadow-sm">
                        <div className={
                            clsx("relative border w-full bg-white p-1 rounded-2xl ")
                        }>
                            <textarea
                                value={chat.inputContents}
                                onChange={e => {
                                    chat.setInputContents(e.target.value)
                                }}
                                data-gramm="false"
                                className="w-full h-[60px] p-4 resize-none outline-none active:border-none focus:border-none"
                                placeholder="Enter A YouTube URL to start a new conversation"
                            />
                            <div className="absolute right-2 bottom-2">
                                <button onClick={handleSubmit} aria-label="language toggle" className="flex h-10 items-center justify-center hover:text-primary-500">
                                    <svg className="w-[24px] h-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                {
                    location.pathname == "/" && (
                        <div className="p-6 md:p-20 bg-slate-50 flex-1">
                            <h5 className=" font-bold">Rencent:</h5>
                            <p>
                                {
                                    historyItems.map(item => {
                                        return (
                                            <a href="" key={item.id} className="py-1 pr-4 underline text-sm font-sans text-gray-500 hover:text-gray-950">
                                                {item.title}
                                            </a>
                                        )
                                    })
                                }
                            </p>
                        </div>
                    )
                }



            </div>
        </main>
    )
}

export default Home