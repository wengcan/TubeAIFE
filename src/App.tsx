import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "@/views/Home/Home";

const router = createHashRouter([
    {
      path: "/",
      element: <Home />,
    //   children: [
    //     // {
    //     //   path: "team",
    //     //   element: <Team />,
    //     //   loader: teamLoader,
    //     // },
    //   ],
    },
]);


export default ()=><RouterProvider router={router} />