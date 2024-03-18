import clsx from "clsx";
import { useCallback, useMemo, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

function Home() {
    const [link, setLink] = useState<string>()
    const location = useLocation()
    const navigate = useNavigate();

    const videoId = useMemo(()=>{
        if (!link){
            return null
        }
        var regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        var match = link.match(regExp);
        if (match) {
            return match[1];
        } else {
            return null;
        }
    },[link])
    const handleSubmit = () => {
        navigate(`/youtube/${videoId}`);
    }

    const handleInputChange = (e: any) => {
        setLink(e.target.value)
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


    return (
        <>
            <div className={
                clsx(
                    "max-w-[90%] justify-center  md:max-w-[1024px] flex flex-col flex-grow ",
                    location.pathname == "/" ? "w-[800px]" : "w-full"
                )
            }>

                <div className=" rounded-2xl   w-full bg-zinc-100 shadow-sm">
                    <div className={
                        clsx("relative border w-full bg-white p-1 rounded-2xl ")
                    }>
                        <textarea
                            value={link}
                            onChange={handleInputChange}
                            data-gramm="false"
                            className="w-full h-[60px] p-4 resize-none outline-none active:border-none focus:border-none"
                            placeholder="Enter A YouTube URL"
                        />
                        <div className="absolute right-2 bottom-2">
                            <button 
                                disabled={videoId == null}
                                onClick={handleSubmit} 
                                aria-label="language toggle" 
                                className="flex h-10 items-center justify-center hover:text-primary-500"
                            >
                                <svg 
                                    className={clsx(
                                        "w-[24px] h-[24px]" ,
                                        videoId == null ? " fill-slate-200" : ""
                                    )}
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 24 24" 
                                    fill="currentColor"
                                >
                                    <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
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
        </>
    )
}

export default Home