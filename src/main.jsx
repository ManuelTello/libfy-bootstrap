import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import Root from "./root.jsx";
import NotFound from "./Routes/not-found.jsx";
import Home from "./Routes/Home.jsx";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        errorElement:<NotFound />,
        children:[
            {
                path:"",
                element:<Home/>,
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
)
