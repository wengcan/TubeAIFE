import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "@/views/Home/Home";
import Youtube from "@/views/Youtube";




import './index.css'



const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },      
      {
        path: "/youtube/:videoId",
        element: <Youtube />,
      }
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}  />
  </React.StrictMode>,
)
