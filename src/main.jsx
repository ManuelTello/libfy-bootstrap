import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import Root from "./root.jsx";
import NotFound from "./Routes/not-found.jsx";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        errorElement:<NotFound />
    }
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
)
