import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const AD_SCRIPT_ID = "native-banner-script";
export default function Tkp() {
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
    <div className="min-h-screen bg-gray-100 p-6">
      <div className=" mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center bg-yellow-200 py-3 rounded-lg shadow">
          Tes Karakteristik Pribadi
        </h1>

        {/* Home Button */}
        <div className="flex items-center mt-6">
          <Link
            to="/"
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition"
          >
            <img src="/images/home.png" alt="home" className="w-6" />
            <span className="text-lg font-medium">Home</span>
          </Link>
        </div>

        {/* List TKP */}
        <div className="pt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Link
              to="/tkp1"
              className="bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 p-4 text-center"
            >
              <img
                src="/images/12.jpg"
                alt="TKP 1"
                className="w-full h-40 object-cover rounded-md"
              />
              <h4 className="mt-3 text-lg font-semibold">TKP 1</h4>
            </Link>

            <Link
              to="/tkp2"
              className="bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 p-4 text-center"
            >
              <img
                src="/images/12.jpg"
                alt="TKP 2"
                className="w-full h-40 object-cover rounded-md"
              />
              <h4 className="mt-3 text-lg font-semibold">TKP 2</h4>
            </Link>

            <Link
              to="/tkp3"
              className="bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 p-4 text-center"
            >
              <img
                src="/images/12.jpg"
                alt="TKP 3"
                className="w-full h-40 object-cover rounded-md"
              />
              <h4 className="mt-3 text-lg font-semibold">TKP 3</h4>
            </Link>

            <Link
              to="/tkp4"
              className="bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 p-4 text-center"
            >
              <img
                src="/images/12.jpg"
                alt="TKP 5"
                className="w-full h-40 object-cover rounded-md"
              />
              <h4 className="mt-3 text-lg font-semibold">TKP 4</h4>
            </Link>

            <Link
              to="/tkp5"
              className="bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 p-4 text-center"
            >
              <img
                src="/images/12.jpg"
                alt="TKP 6"
                className="w-full h-40 object-cover rounded-md"
              />
              <h4 className="mt-3 text-lg font-semibold">TKP 5</h4>
            </Link>
            <Link
              to="/tkp1"
              className="bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 p-4 text-center"
            >
              <img
                src="/images/12.jpg"
                alt="TKP 4"
                className="w-full h-40 object-cover rounded-md"
              />
              <h4 className="mt-3 text-lg font-semibold">TKP 6</h4>
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
