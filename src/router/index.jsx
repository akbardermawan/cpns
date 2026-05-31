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
import Tkp1 from "../components/tkp1/Tkp1";
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

import LoginCpns2 from "../components/cpns2/LoginCpns2";
import RoomCpns2 from "../components/cpns2/RoomCpns2";
import ResultCpns2 from "../components/cpns2/ResultCpns2";
import LoginCpns6 from "../components/cpns6/LoginCpns6";
import LoginCpns7 from "../components/cpns7/LoginCpns7";
import LoginCpns8 from "../components/cpns8/LoginCpns8";
import LoginCpns9 from "../components/cpns9/LoginCpns9";
import RoomCpns6 from "../components/cpns6/RoomCpns6";
import RoomCpns7 from "../components/cpns7/RoomCpns7";
import RoomCpns8 from "../components/cpns8/RoomCpns8";
import RoomCpns9 from "../components/cpns9/RoomCpns9";
import ResultCpns6 from "../components/cpns6/ResultCpns6";
import ResultCpns7 from "../components/cpns7/ResultCpns7";
import ResultCpns8 from "../components/cpns8/ResultCpns8";
import ResultCpns9 from "../components/cpns9/ResultCpns9";

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
      <Route path="/tkp1" element={<Tkp1 />} />

      <Route path="/pp" element={<Pp />} />
      <Route path="/pp1" element={<Pp1 />} />

      <Route path="/cpns" element={<Cpns />} />

      <Route path="/cpns1" element={<LoginCpns1 />} />
      <Route path="/roomcpns1" element={<RoomCpns1 />} />
      <Route path="/resultcpns1" element={<ResultCpns1 />} />

      <Route path="/cpns2" element={<LoginCpns2 />} />
      <Route path="/roomcpns2" element={<RoomCpns2 />} />
      <Route path="/resultcpns2" element={<ResultCpns2 />} />

      <Route path="/cpns6" element={<LoginCpns6 />} />
      <Route path="/roomcpns6" element={<RoomCpns6 />} />
      <Route path="/resultcpns6" element={<ResultCpns6 />} />

      <Route path="/cpns7" element={<LoginCpns7 />} />
      <Route path="/roomcpns7" element={<RoomCpns7 />} />
      <Route path="/resultcpns7" element={<ResultCpns7 />} />

      <Route path="/cpns8" element={<LoginCpns8 />} />
      <Route path="/roomcpns8" element={<RoomCpns8 />} />
      <Route path="/resultcpns8" element={<ResultCpns8 />} />

      <Route path="/cpns9" element={<LoginCpns9 />} />
      <Route path="/roomcpns9" element={<RoomCpns9 />} />
      <Route path="/resultcpns9" element={<ResultCpns9 />} />
    </Route>,
  ),
);

export default router;
