import React, { useEffect, useState } from "react";
import { correctAnswer } from "../../database/cpns1/correctAnswer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ResultCpns1 = () => {
  const [userName, setUserName] = useState("");
  const [quizAnswer, setQuizAnswer] = useState([]);
  const [score, setScore] = useState(0);

  const navigate = useNavigate();

  //ambil username dari localstorage
  useEffect(() => {
    const name = localStorage.getItem("username");
    if (name) {
      setUserName(name);
    }
  }, []);

  //ambil quizAnswer dari localstorage
  useEffect(() => {
    const savedAnswer = localStorage.getItem("quizAnswers");

    if (savedAnswer) {
      setQuizAnswer(JSON.parse(savedAnswer));
    }
  }, []);

  //periksa skor
  useEffect(() => {
    let total = 0;

    correctAnswer.forEach((ans, index) => {
      if (quizAnswer[index] === ans) {
        total += 5;
      }
    });

    setScore(total);
  }, [quizAnswer]);

  //menghapu  quizTimer, username, dan quizAnswer dari localstorage
  function OnReturn() {
    // hapus data dari localStorage
    localStorage.removeItem("quizTimer");
    localStorage.removeItem("username");
    localStorage.removeItem("quizAnswers");

    // redirect
    navigate("/cpns");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-8 bg-gray-100">
      <h1 className="text-2xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
        Quiz Application
      </h1>

      <div className="w-full max-w-4xl overflow-x-auto pt-5">
        <table className="min-w-full bg-white rounded-xl shadow-md overflow-hidden">
          <thead className="bg-gray-200">
            <tr className="text-left text-gray-700 font-semibold">
              <th className="px-4 py-3">Name</th>

              <th className="px-4 py-3">Nilai</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t hover:bg-gray-50 transition-colors">
              <td className="px-4 py-2">{userName}</td>
              <td className="px-4 py-2">{score}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="pt-5">
        <p className="text-xl md:text-3xl text-black mt-20">
          Selamat <span className="font-bold text-blue-700">{userName} </span>{" "}
          hasil nilai SKD kamu adalah{" "}
          <span className="font-bold text-blue-700">{score}</span>.
        </p>
      </div>
      {/* Home Button */}
      <div className="pt-10">
        <button
          className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition"
          onClick={OnReturn}
        >
          Return CPNS
        </button>
      </div>
    </div>
  );
};

export default ResultCpns1;
