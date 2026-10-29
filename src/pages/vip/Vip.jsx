import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const AD_SCRIPT_ID = "native-banner-script";
const AD_SCRIPT_ID2 = "banner-script";

const Vip = () => {
  useEffect(() => {
    const firstId = "native-banner-script";
    const secondId = "banner-script";

    if (!document.getElementById(firstId)) {
      const firstScript = document.createElement("script");
      firstScript.id = firstId;
      firstScript.async = true;
      firstScript.dataset.cfasync = "false";
      firstScript.src =
        "https://bauval.org/21/3e6a8b566d88898a7b592eb0a7c4242a";

      document.body.appendChild(firstScript);
    }

    if (!document.getElementById(secondId)) {
      // Konfigurasi iklan kedua sebelum script eksternal
      window.atOptions = {
        key: "bb09e520a6a01af54f3d191c766c0794",
        format: "iframe",
        height: 300,
        width: 400,
        params: {},
      };

      const secondScript = document.createElement("script");
      secondScript.id = secondId;
      secondScript.async = true;
      secondScript.dataset.cfasync = "false";
      secondScript.src =
        "https://bauval.org/22/bb09e520a6a01af54f3d191c766c0794";

      document.body.appendChild(secondScript);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Header */}
      <div className="w-full bg-white shadow-md flex items-center justify-center gap-3 py-4">
        <img
          src="/images/logo.png"
          alt="logo"
          className="w-12 h-12 object-contain"
        />
        <span className="text-xl font-bold text-gray-700">ADM</span>
      </div>

      {/* Home Button */}
      <div className="pt-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition"
        >
          <img src="/images/home.png" alt="home" className="w-6 h-6" />
          <span className="font-medium">Home</span>
        </Link>
      </div>

      {/* Iklan atas tengah */}
      <aside className="w-full flex flex-col items-center justify-center mx-auto py-4">
        <div className="w-full text-center mb-2">
          <p className="text-xs text-gray-400 py-1">Iklan</p>
          <p className="text-sm text-gray-400">
            maaf ngiklan admin pingen beli cilok
          </p>
        </div>

        {/* Iklan pertama native banner */}
        <div className="w-full flex justify-center items-center">
          <div
            id="container-3e6a8b566d88898a7b592eb0a7c4242a"
            className="w-full max-w-[728px] min-h-[100px] flex justify-center items-center"
          />
        </div>
      </aside>

      {/* Main Content */}
      <div className="mx-auto w-full max-w-7xl px-4 py-6">
        <div className="grid grid-cols-1">
          {/* Konten utama */}
          <main className="w-full min-w-0">
            <div className="flex flex-col gap-4 py-4">
              <Link
                to="/cpns+vip1"
                className="block rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-lg"
              >
                <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">
                  VIP SKD 1
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Akses materi dan latihan soal SKD.
                </p>
              </Link>

              <div
                className="rounded-xl border border-gray-100 bg-gray-100 p-6"
                aria-disabled="true"
              >
                <h2 className="text-xl font-bold text-gray-400 sm:text-2xl">
                  VIP SKD 2
                </h2>

                <p className="mt-2 text-sm text-gray-400">Segera hadir</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Vip;
