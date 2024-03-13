import { useState } from "react";

function useStreamingResponse() {
    const [streamData, setStreamData] = useState<string>('');
    const fetchData = async (url: string, requestData: any) => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
            });
            if (response.body) {
                const reader = response.body.getReader();
                let result = '';
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) {
                        break;
                    }
                    result += new TextDecoder().decode(value);
                    setStreamData(result);
                }
            }
        } catch (error) {
            console.error('Error fetching streaming data:', error);
        }
    };
    return [streamData, fetchData] as const;
}

export default useStreamingResponse