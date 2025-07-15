import { createBrowserRouter } from "react-router-dom";
import Login from "../page/Login";
import Register from "../page/Register";

const router=createBrowserRouter([
   {
     path:"/",
    errorElement:<h1>Error</h1>,
    children:[
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/register",
            element:<Register/>
        }
    ]
   }
])


export default router;