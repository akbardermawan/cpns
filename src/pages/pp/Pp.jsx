import React from "react";
import { Link } from "react-router-dom";

export default function Tiu() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Topbar */}
        <div className="bg-green-400 text-white text-center text-2xl font-bold py-3 rounded-lg shadow">
          Penyuluh Pertanian
        </div>

        {/* Home Button */}
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition"
          >
            <img src="/images/home.png" alt="home" className="w-6 h-6" />
            <span className="font-medium">Home</span>
          </Link>
        </div>
        {/* Materi TWK */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Materi PP</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Link
              to="/twk0"
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 text-center"
            >
              <img
                src="/images/11.jpg"
                alt="TWK 1"
                className="w-full h-40 object-cover rounded-md"
              />
              <h4 className="mt-3 font-semibold text-lg">
                Materi CPNS Penyuluh Pertanian
              </h4>
            </Link>
          </div>
        </div>

        {/* List PP */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Soal PP</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Link
              to="/pp1"
              className="inline-block mt-3 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              <div className="bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 p-4 text-center">
                <img
                  src="/images/8.JPG"
                  alt="PP 1"
                  className="w-full h-40 object-cover rounded-md"
                />

                <h4 className="mt-3 text-lg font-semibold text-black">PP 1</h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
