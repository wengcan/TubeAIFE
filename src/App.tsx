import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <main className="w-full min-h-screen flex-grow flex flex-col items-center gap-4 dark:bg-[#171717]">
                <div className="w-full p-2 border-b dark:bg-[#303134] dark:border-b-gray-500">
                    <div className="max-w-[1024px] max-h-[100px] m-auto">
                        <Header/>
                    </div>
                </div>
                <Outlet />
        </main>
    )
}

export default App