import { useState } from "react";

function useResponse<T>() {
    const [ending, setEnding] = useState<boolean>(true)
    const [data, setData] = useState<T>();
    async function fetchStreamData(path: string, requestData: any, streaming : boolean = false ){
        try {
            setEnding(false)
            const response = await fetch(`${import.meta.env.VITE_API_HOST}${path}`, {
                method: 'POST',
                headers: {
                    'Content-Type': streaming? 'text/plain' : 'application/json'
                },
                body: JSON.stringify(requestData)
            });
            if (streaming){
                if (response.body) {
                    const reader = response.body.getReader();
                    let result = '';
                    while (true) {
                        const { done, value } = await reader.read();
                        if (done) {
                            break;
                        }
                        result += new TextDecoder().decode(value);
                        setData(result as T);
                    }
                }
            } else {
                const data = await response.json();
                setData(data as T)
            }

        } catch (error) {
            console.error('Error fetching streaming data:', error);
        } finally {
            setEnding(true);
        }
    };
    return [ending, data, fetchStreamData] as const;
}

export default useResponse