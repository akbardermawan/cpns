import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Twk from "../pages/twk/Twk";
import Tiu from "../pages/tiu/Tiu";
import Tiu1 from "../components/tiu1/Tiu1";
import Tpa from "../pages/tpa/Tpa";
import Tpa1 from "../components/tpa1/Tpa1";
import Que from "../components/ques/Que";
import Twk2 from "../components/twk2/Twk2";



const router = createBrowserRouter([
    {
        path:"/",
        element: <Home/>
    },
    {
        path:"/twk",
        element: <Twk/>
    },
    {
        path:"/twk1",
        element: <Que/>
    },
    {
        path:"/twk2",
        element: <Twk2/>
    },
    {
        path:"/tiu",
        element: <Tiu/>
    },
    {
        path:"/tiu1",
        element: <Tiu1/>
    },
    {
        path:"/tpa",       // Rute untuk halaman TPA
        element: <Tpa/>
    },
    {
        path:"/tpa1",       // Rute untuk halaman TPA
        element: <Tpa1/>
    }
]);

export default router;