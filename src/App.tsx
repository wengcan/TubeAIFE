import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "@/views/Home/Home";
import Chat from "./views/Chat";

const router = createHashRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/chat",
          element: <Chat />,
        }
      ],
    },

]);


export default ()=><RouterProvider router={router} />