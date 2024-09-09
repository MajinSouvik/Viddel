import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from "./App"
import UploadVideo from "./Components/UploadVideo"
import SearchVideos from "./Components/SearchVideos"
import MyVideos from "./Components/MyVideos"
import Dashboard from "./Components/Dashboard"

function Routes(){
    const routes=createBrowserRouter([
        {
            path:"/",
            element:<Dashboard />,
            children:[
                {
                    path:"/upload",
                    element: <UploadVideo />
                },
                {
                    path:"/search",
                    element:<SearchVideos />
                },
                {
                    path:"/my-videos",
                    element:<MyVideos />
                }
            ]
        },
        
    ])

    return (
        <RouterProvider router={routes}/>
    )
}

export default Routes