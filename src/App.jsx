import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      {/* 🔥 SEO LANDING (VISIBLE UNTUK GOOGLE, HIDDEN UNTUK USER) */}
      <section className="sr-only">
        <h1>soal cpns</h1>
        <p>Soal Tes Calon Pegawai Negeri Sipil</p>
        <p>soal tes calon pegawai negeri sipil</p>
        <p>soal-soal tes pegawai negeri sipil</p>
        <p>lolos tes calon pegawai negeri sipil</p>
        <p>Soal tes pegawai negeri sipil</p>
        <p>Tes Seleksi Kompetensi Dasar (SKD) CPNS</p>
        <p>Tes Wawasan Kebangsaan (TWK)</p>
        <p>Tes Karakteristik Pribadi (TKP)</p>
      </section>
      <ToastContainer />
      <main className="">
        <Outlet />
      </main>
    </>
  );
}

export default App;
