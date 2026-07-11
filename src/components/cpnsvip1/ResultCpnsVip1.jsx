import React, { useEffect, useState } from "react";
import { correctAnswer } from "../../database/cpns10/correctAnswer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ResultCpnsVip1 = () => {
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
    navigate("/cpns+vip");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-8 bg-gray-100">
      <h1 className="text-2xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
        Quiz Application
      </h1>
      <div className="w-full flex items-center justify-center flex-col">
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
      <div className="w-full pt-20 ">
        <h1 className="text-2xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
          Pembahasan
        </h1>
        <div className="w-full pt-5 flex flex-col gap-4 items-center justify-center">
          {/* soal no1 */}
          <div className="w-full max-w-4xl overflow-x-auto bg-white pt-5 md:pt-8 xl:pt-12 px-5 xl:px-10 pb-5 rounded-2xl">
            <div className="flex pl-2">
              <span className="pr-2 font-bold">1.</span>
              <div>
                <p className="pl-2 font-bold">2.026² - 2.020² = ...</p>
                <ul className="pt-2">
                  <li className="pb-1">24.276</li>
                  <li className="pb-1">42.462</li>
                  <li className="pb-1">64.386</li>
                  <li className="pb-1">82.684</li>
                </ul>
              </div>
            </div>
            <div className="pt-5">
              <span>Jawaban: A. 24.276</span>
              <div>
                <p>Hitung menggunakan rumus selisih kuadrat:</p>
                <p className="text-center">a²-b² = (a-b) (a+b)</p>
                <p>Dengan: </p>
                <ul className="pl-2">
                  <li>a = 2026</li>
                  <li>b = 2020</li>
                </ul>
                <p>Maka:</p>
                <p className="text-center">
                  2.026² - 2.020² = (2026 - 2020) (2026 + 2020)
                </p>
                <p className="text-center">= 6 x 4046</p>
                <p className="text-center">= 24.276</p>
              </div>
            </div>
          </div>
          {/* soal no2  */}
          <div className="w-full  max-w-4xl overflow-x-auto bg-white pt-5 md:pt-8 xl:pt-12 px-5 xl:px-10 pb-5 rounded-2xl">
            <div className="flex pl-2">
              <span className="pr-2 font-bold">2.</span>
              <div>
                <p className="pl-2 font-bold">3/4 + 63/5 x 7 + 2 = ...</p>
                <ul className="pt-2">
                  <li className="pb-1">88,50</li>
                  <li className="pb-1">89,95</li>
                  <li className="pb-1">90,55</li>
                  <li className="pb-1">90,95</li>
                </ul>
              </div>
            </div>
            <div className="pt-5">
              <span>Jawaban: D. 90,95</span>
              <div>
                <p>
                  Hitung sesuai urutan operasi (perkalian dikerjakan terlebih
                  dahulu):
                </p>
                <p className="text-center">3/4 + 63/5 x 7 + 2</p>
                <p className="pt-1 pl-1"> 63/5 x 7 = 441/5 = 88,2</p>
                <p>Lalu: </p>
                <p className="pt-1 pl-1">3/4 = 0,75</p>
                <p className="pt-2 pl-1">Maka:</p>
                <p className="text-center">0,75 + 88,2 + 2 = 90,95</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCpnsVip1;
