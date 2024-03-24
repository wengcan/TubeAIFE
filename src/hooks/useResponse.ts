import { useState } from "react";

function useResponse<T>() {
    const [data, setData] = useState<T>();
    async function fetchStreamData(path: string, requestData: object, streaming : boolean = false ){
        try {
            setData(undefined);
            const response = await fetch(`${import.meta.env.VITE_API_HOST}${path}`, {
                method: 'POST',
                headers: {
                    'Content-Type':  'application/json'
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
            return Promise.resolve()
        } catch (error) {
            console.error('Error fetching streaming data:', error);
            return Promise.reject()
        } 
    };
    return [data, fetchStreamData] as const;
}

export default useResponse