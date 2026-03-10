import React from "react";
import { Link } from "react-router-dom";

export default function Tkp() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className=" mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center bg-blue-300 py-3 rounded-lg shadow">
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

        {/* List TIU */}
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Link
              to="/tiu1"
              className="bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 p-4 text-center"
            >
              <img
                src="/images/3.JPG"
                alt="TIU 1"
                className="w-full h-40 object-cover rounded-md"
              />
              <h4 className="mt-3 text-lg font-semibold">TIU 1</h4>
            </Link>

            <Link
              to="/tiu2"
              className="bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 p-4 text-center"
            >
              <img
                src="/images/3.JPG"
                alt="TIU 2"
                className="w-full h-40 object-cover rounded-md"
              />
              <h4 className="mt-3 text-lg font-semibold">TIU 2</h4>
            </Link>

            <Link
              to="/tiu3"
              className="bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 p-4 text-center"
            >
              <img
                src="/images/4.JPG"
                alt="TIU 3"
                className="w-full h-40 object-cover rounded-md"
              />
              <h4 className="mt-3 text-lg font-semibold">TIU 3</h4>
            </Link>

            <Link
              to="/tiu4"
              className="bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 p-4 text-center"
            >
              <img
                src="/images/4.JPG"
                alt="TIU 5"
                className="w-full h-40 object-cover rounded-md"
              />
              <h4 className="mt-3 text-lg font-semibold">TIU 4</h4>
            </Link>

            <Link
              to="/tiu5"
              className="bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 p-4 text-center"
            >
              <img
                src="/images/4.JPG"
                alt="TIU 6"
                className="w-full h-40 object-cover rounded-md"
              />
              <h4 className="mt-3 text-lg font-semibold">TIU 5</h4>
            </Link>
            <Link
              to="/tpa1"
              className="bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 p-4 text-center"
            >
              <img
                src="/images/6.png"
                alt="TIU 4"
                className="w-full h-40 object-cover rounded-md"
              />
              <h4 className="mt-3 text-lg font-semibold">TPA 1</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
