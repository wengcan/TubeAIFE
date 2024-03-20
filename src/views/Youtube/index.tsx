import Loading from "@/components/Loading"
import QuickBtn from "@/components/QuickBtn"
import useResponse from "@/hooks/useResponse"
import { useEffect, useState } from "react"
import Markdown from "react-markdown"
import { useParams } from "react-router-dom"
import remarkGfm from "remark-gfm"
import Lang, { LangType } from "./Lang"
import clsx from "clsx"


type VideoInfo = {
    title: string;
    thumbnail: string;
    description: string;
}

const shortcut_btns = [
    {
        "key": "summarize",
        "label": "Summarize"
    },
    {
        "key": "comments",
        "label": "Comments"
    },
    {
        "key": "keywords",
        "label": "Keywords"
    }
]

function Youtube() {
    const [lang, setLang] = useState<LangType>("en")
    const [loading, setLoading] = useState<boolean>(false)
    const [activeBtn, setActiveBtn] = useState<string>()
    const [metaData, fetchMetaData] = useResponse<VideoInfo>()
    const [streamData, fetchData] = useResponse<string>()
    const { videoId } = useParams()


    useEffect(() => {
        setLoading(true)
        fetchMetaData(`/load`, {
            "url": `https://www.youtube.com/watch?v=${videoId}`
        })
        .then(() => {
            setLoading(false)
        })
    }, [videoId])



    useEffect(()=>{
        const name = activeBtn
        if (!name) return
        setLoading(true)
        fetchData(`/shortcut/${name}`, {
            "url": `https://www.youtube.com/watch?v=${videoId}`,
            "lang": lang
        }, true)
        .then(() => {
            setLoading(false)
        })
    },[lang, activeBtn])


    return (
        <div className="flex-1 w-full max-w-[1024px] mb-2">


            <div className="flex h-full flex-col  flex-grow w-full rounded-2xl overflow-hidden p-4 bg-gray-50 border border-gray-100 mb-2">
                {
                    metaData && (
                        <div className="flex justify-start   border bg-white border-gray-200 p-4 rounded-lg ">
                            <div className="w-[100px] h-[50px] rounded-lg overflow-hidden">
                                <img src={metaData?.thumbnail} />
                            </div>
                            <div className="px-2 w-full">
                                <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" className=" text-slate-900  font-bold font-mono">{metaData?.title}</a>

                                <div className="flex gap-2 justify-between">
                                    <span className="flex gap-2">
                                        {
                                            shortcut_btns.map(item => {
                                                return (
                                                    <QuickBtn
                                                        disabled={loading}
                                                        active={item.key === activeBtn}
                                                        key={item.key}
                                                        text={item.label}
                                                        onClick={() => {
                                                            setActiveBtn(item.key)
                                                        }}
                                                    />
                                                )
                                            })
                                        }

                                    </span>
                                    <span>
                                        <span>ouput language:&nbsp;</span>
                                        <Lang
                                            lang={lang as LangType}
                                            disabled={loading}
                                            onChangeLang={(lang) => setLang(lang)}
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                }

                {
                    loading ? (
                        <div className="p-4">
                            <Loading />
                        </div>
                    ) : (
                        <div className={
                            clsx(
                                "flex-1 flex flex-col py-4 max-w-[1024px] font-serif text-sm",
                                lang == "ar" ? "rtl text-right " : ""
                            )
                        }>
                            <Markdown
                                remarkPlugins={[remarkGfm]}
                                children={streamData}
                            // components={{
                            //     code
                            // }}
                            />
                        </div>
                    )

                }

            </div>
        </div>
    )
}
export default Youtube