import React from "react";
import { Link } from "react-router-dom";

const Cpns = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
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

      {/* Main Content */}
      <div className="w-full max-w-xl mt-10 p-4 ">
        <div className="flex flex-col">
          <div className="py-2">
            <Link
              to="/cpns1"
              className="block bg-white shadow-md rounded-xl p-6 hover:bg-blue-50 hover:shadow-lg transition m-5"
            >
              <h2 className="text-2xl font-bold text-gray-800">CPNS 1</h2>
            </Link>
          </div>
          <div className="py-2">
            <Link
              to="/cpns2"
              className="block bg-white shadow-md rounded-xl p-6 hover:bg-blue-50 hover:shadow-lg transition m-5"
            >
              <h2 className="text-2xl font-bold text-gray-800">CPNS 2</h2>
            </Link>
          </div>
          <div className="py-2">
            <Link
              to="/cpns3"
              className="block bg-white shadow-md rounded-xl p-6 hover:bg-blue-50 hover:shadow-lg transition m-5"
            >
              <h2 className="text-2xl font-bold text-gray-800">CPNS 3</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cpns;
