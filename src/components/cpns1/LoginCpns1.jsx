import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AD_SCRIPT_ID = "native-banner-script";
const LoginCpns1 = () => {
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("quizTimer");
    localStorage.removeItem("username");
    localStorage.removeItem("quizAnswers");
  }, []);

  // Dummy result data
  const result = new Array(100).fill(null);

  async function startQuiz(e) {
    e.preventDefault();

    if (userName.trim() === "") {
      toast.error("Please enter your name before starting the quiz.");
      return;
    }

    try {
      // Simpan username ke localStorage
      localStorage.setItem("username", userName);

      // redirect ke halaman home
      navigate("/roomcpns1");
    } catch (error) {
      toast.error("Error login Please try again.");
    }
  }

  //Iklan
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <div className="container max-w-lg p-6 bg-blue-100 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-light mb-4">
          Quiz Application
        </h1>
        <ol className="list-decimal list-inside space-y-2 text-black">
          <li>You will be asked 110 questions one after another.</li>
          <li>5 points is awarded for the correct answer.</li>
          <li>
            Each question has four options. You can choose only one option.
          </li>
          <li>You can review and change answers before the quiz finishes.</li>
          <li>The result will be declared at the end of the quiz.</li>
        </ol>

        <form className="pt-8 pb-4" onSubmit={startQuiz}>
          <input
            type="text"
            value={userName}
            placeholder="Input Your Name"
            className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-blue-800 border"
            onChange={(e) => setUserName(e.target.value)}
          />

          <div className="pt-6 flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition"
            >
              Start Quiz
            </button>
          </div>
        </form>
      </div>

      {/* Tempat Native Banner */}
      <div className="w-full flex justify-center mt-4">
        <div className="w-full max-w-5xl  overflow-hidden">
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
};

export default LoginCpns1;
