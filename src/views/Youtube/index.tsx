import Loading from "@/components/Loading"
import QuickBtn from "@/components/QuickBtn"
import useResponse from "@/hooks/useResponse"
import { useEffect } from "react"
import Markdown from "react-markdown"
import { useParams } from "react-router-dom"
import remarkGfm from "remark-gfm"


type VideoInfo = {
    title: string;
    thumbnail: string;
    description: string;
}

function Youtube() {
    const [metaEnding, metaData, fetchMetaData] = useResponse<VideoInfo>()
    const [streamEnding, streamData, fetchData] = useResponse<string>()
    const { videoId } = useParams()
    console.log(videoId)

    useEffect(() => {
        fetchMetaData(`/load`, {
            "url": `https://www.youtube.com/watch?v=${videoId}`
        })
    }, [videoId])

    // useEffect(() => {
    //     fetchData('/shortcut/summarize', {
    //         "url": "https://www.youtube.com/watch?v=H2qLoaetLJM",
    //         "lang": "en"
    //     })
    // }, [])

    const handleShortcutBtnClick = (name: string) => {
        fetchData(`/shortcut/${name}`, {
            "url": `https://www.youtube.com/watch?v=${videoId}`,
            "lang": "en"
        })
    }


    return (
        <div className="flex-1 w-full max-w-[1024px] mb-2">


            <div className="flex h-full flex-col  flex-grow w-full rounded-2xl overflow-hidden p-4 bg-gray-50 border border-gray-100 mb-2">
                {
                    metaEnding ? (
                        <div className="flex justify-start   border bg-white border-gray-200 p-4 rounded-lg ">
                            <div className="w-[100px] h-[50px] rounded-lg overflow-hidden">
                                <img src={metaData?.thumbnail} />
                            </div>
                            <div className="px-2 w-full">
                                <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" className=" text-slate-900  font-bold font-mono">{metaData?.title}</a>
                                <div>
                                    <QuickBtn
                                        text="Summarize this video"
                                        onClick={() => handleShortcutBtnClick("summarize")}
                                    />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="p-4">
                            <Loading />
                        </div>
                    )
                }
                <div className="flex-1 flex flex-col py-4 max-w-[1024px] font-serif text-sm">
                    <Markdown
                        remarkPlugins={[remarkGfm]}
                        children={streamData}
                    // components={{
                    //     code
                    // }}
                    />
                </div>
            </div>
        </div>
    )
}
export default Youtube