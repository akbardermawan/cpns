import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const AD_SCRIPT_ID = "native-banner-script";
export default function Twk() {
  useEffect(() => {
    // Hindari memasang script yang sama berulang kali
    if (document.getElementById(AD_SCRIPT_ID)) return;

    const script = document.createElement("script");
    script.id = AD_SCRIPT_ID;
    script.async = true;
    script.dataset.cfasync = "false";
    script.src = "https://bauval.org/21/3e6a8b566d88898a7b592eb0a7c4242a";

    document.body.appendChild(script);
  }, []);
  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className=" mx-auto">
        <h1 className="text-3xl font-bold text-center bg-amber-300 py-3 rounded-lg shadow">
          Tes Wawasan Kewarganegaraan
        </h1>

        {/* Home Button */}
        <div className="flex items-center mt-6">
          <Link
            to="/"
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition"
          >
            <img src="/images/home.png" alt="home" className="w-6" />
            <span className="text-lg font-medium">Home</span>
          </Link>
        </div>

        {/* Materi TWK */}
        <div className="mt-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Materi TWK
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <Link
              to="/twk0"
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src="/images/11.jpg"
                  alt="Materi Pancasila"
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  Pancasila
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Pelajari nilai-nilai dasar Pancasila untuk persiapan TWK.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-600">
                    Pelajari materi
                  </span>
                  <span className="text-blue-600 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>

            <Link
              to="/twk1"
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src="/images/11.jpg"
                  alt="Materi UUD 1945"
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  UUD 1945
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Pelajari konstitusi dan dasar hukum negara Indonesia.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-600">
                    Pelajari materi
                  </span>
                  <span className="text-blue-600 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Soal TWK */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Soal-soal TWK</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Link
              to="/twk1"
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 text-center"
            >
              <img
                src="/images/1.JPG"
                alt="TWK 1"
                className="w-full h-40 object-cover rounded-md"
              />
              <h4 className="mt-3 font-semibold text-lg">TWK 1</h4>
            </Link>

            <Link
              to="/twk2"
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 text-center"
            >
              <img
                src="/images/9.JPG"
                alt="TWK 2"
                className="w-full h-40 object-cover rounded-md"
              />
              <h4 className="mt-3 font-semibold text-lg">TWK 2</h4>
            </Link>

            <Link
              to="/twk3"
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 text-center"
            >
              <img
                src="/images/10.JPG"
                alt="TWK 3"
                className="w-full h-40 object-cover rounded-md"
              />
              <h4 className="mt-3 font-semibold text-lg">TWK 3</h4>
            </Link>

            <Link
              to="/twk4"
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 text-center"
            >
              <img
                src="/images/2.JPG"
                alt="TWK 4"
                className="w-full h-40 object-cover rounded-md"
              />
              <h4 className="mt-3 font-semibold text-lg">TWK 4</h4>
            </Link>
          </div>
        </div>
      </div>
      {/* Tempat Native Banner */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[600px] overflow-hidden">
          <p className="text-gray-400 text-xs px-2 py-1">Iklan</p>

          <div
            id="container-3e6a8b566d88898a7b592eb0a7c4242a"
            style={{
              width: "100%",
              minHeight: "100px",
              overflow: "hidden",
            }}
          />
        </div>
      </div>
    </div>
  );
}
