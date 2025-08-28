import { createBrowserRouter } from "react-router-dom";
import { Introlayout, LandingPage, MissionDetail, MissionPage, Quiz } from "./routes";

export const router = createBrowserRouter([
  
    {
        path: "/",
        element: <Introlayout>
            <LandingPage/>
        </Introlayout>
    },
    {
        path: "/mission",
        element: 
            <MissionPage/>
       
    },
    {
        path: "/mission/:id",
        element: <MissionDetail />
    },
    {
        path: "/quiz",
        element: <Quiz />
    }


])