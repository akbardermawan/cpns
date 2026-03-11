import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Twk from "../pages/twk/Twk";
import Tiu from "../pages/tiu/Tiu";
import Tiu1 from "../components/tiu1/Tiu1";
import Tiu2 from "../components/tiu2/Tiu2";
import Tiu3 from "../components/tiu3/Tiu3";
import Tkp from "../pages/tkp/Tkp";
import Tpa1 from "../components/tpa1/Tpa1";
import Que from "../components/ques/Que";
import Twk0 from "../components/twk0/Twk0";
import Twk2 from "../components/twk2/Twk2";
import Twk3 from "../components/twk3/Twk3";
import Twk4 from "../components/twk4/Twk4";
import Pp from "../pages/pp/Pp";
import Pp1 from "../components/pp1/Pp1";
import Cpns from "../pages/cpns/Cpns";

import LoginCpns1 from "../components/cpns1/LoginCpns1";
import RoomCpns1 from "../components/cpns1/RoomCpns1";
import ResultCpns1 from "../components/cpns1/ResultCpns1";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/twk" element={<Twk />} />
      <Route path="/twk0" element={<Twk0 />} />
      <Route path="/twk1" element={<Que />} />
      <Route path="/twk2" element={<Twk2 />} />
      <Route path="/twk3" element={<Twk3 />} />
      <Route path="/twk4" element={<Twk4 />} />

      <Route path="/tiu" element={<Tiu />} />
      <Route path="/tiu1" element={<Tiu1 />} />
      <Route path="/tiu2" element={<Tiu2 />} />
      <Route path="/tiu3" element={<Tiu3 />} />
      <Route path="/tpa1" element={<Tpa1 />} />

      <Route path="/tkp" element={<Tkp />} />

      <Route path="/pp" element={<Pp />} />
      <Route path="/pp1" element={<Pp1 />} />

      <Route path="/cpns" element={<Cpns />} />

      <Route path="/cpns1" element={<LoginCpns1 />} />
      <Route path="/roomcpns1" element={<RoomCpns1 />} />
      <Route path="/resultcpns1" element={<ResultCpns1 />} />
    </Route>,
  ),
);

export default router;
