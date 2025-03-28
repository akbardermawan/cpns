import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Twk from "../pages/twk/Twk";
import Tiu from "../pages/tiu/Tiu";
import Tiu1 from "../components/tiu1/Tiu1";
import Tiu2 from "../components/tiu2/Tiu2";
import Tpa from "../pages/tpa/Tpa";
import Tpa1 from "../components/tpa1/Tpa1";
import Que from "../components/ques/Que";
import Twk2 from "../components/twk2/Twk2";
import Twk3 from "../components/twk3/Twk3";
import Twk4 from "../components/twk4/Twk4";
import Pp from "../pages/pp/Pp";
import Pp1 from "../components/pp1/Pp1";



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
        path:"/twk3",
        element: <Twk3/>
    },
    {
        path:"/twk4",
        element: <Twk4/>
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
        path:"/tiu2",
        element: <Tiu2/>
    },
    {
        path:"/tpa",       // Rute untuk halaman TPA
        element: <Tpa/>
    },
    {
        path:"/tpa1",       // Rute untuk halaman TPA
        element: <Tpa1/>
    },
    {
        path:"/pp",   //Rute Penyuluh Pertanian
        element: <Pp/>
    },
    {
        path:"/pp1",   //Rute Penyuluh Pertanian
        element: <Pp1/>
    }
]);

export default router;