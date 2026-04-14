import React from "react";
import { Link } from "react-router-dom";

export default function Twk() {
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
          <h2 className="text-2xl font-semibold mb-4">Materi TWK</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-5">
            <Link
              to="/twk0"
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 text-center"
            >
              <img
                src="/images/11.jpg"
                alt="TWK 1"
                className="w-full h-40 object-cover rounded-md"
              />
              <h4 className="mt-3 font-semibold text-lg">Pancasila</h4>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-5">
            <Link
              to="/twk0"
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 text-center"
            >
              <img
                src="/images/11.jpg"
                alt="TWK 1"
                className="w-full h-40 object-cover rounded-md"
              />
              <h4 className="mt-3 font-semibold text-lg">UUD 1945</h4>
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
    </div>
  );
}
