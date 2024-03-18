import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <main className="w-screen h-screen flex">
            <div className="w-full h-full flex-grow flex flex-col items-center gap-4">
                <div className="w-full p-2 border-b">
                    <div className="max-w-[1024px] max-h-[100px] m-auto">
                        <Header size={"sm"} />
                    </div>
                </div>
                <div className="flex-1 w-full max-w-[1024px] mb-2">
                  <Outlet />
                </div>
                
            </div>
        </main>
    )
}

export default App