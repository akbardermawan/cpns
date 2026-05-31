import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <ToastContainer />
      <main className="">
        <Outlet />
      </main>
    </>
  );
}

export default App;
