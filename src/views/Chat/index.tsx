import useStreamingResponse from "@/hooks/useStreamingResponse"
import { useEffect } from "react"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"

function Chat() {
    const [streamData, fetchData] = useStreamingResponse()
    // useEffect(() => {
    //     fetchData('http://127.0.0.1:8080/chat', {
    //         "content": "生命的意义是什么？"
    //     })
    // }, [])
    return (
        <div className="w-full h-full ">
            <div className="overflow-y-auto">
                <div className=" flex flex-col max-w-[1024px]">
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
export default Chat