import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginCpns1 = () => {
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();

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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <div className="container max-w-lg p-6 bg-blue-100 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-light mb-4">
          Quiz Application
        </h1>
        <ol className="list-decimal list-inside space-y-2 text-black">
          <li>You will be asked 10 questions one after another.</li>
          <li>10 points is awarded for the correct answer.</li>
          <li>
            Each question has three options. You can choose only one option.
          </li>
          <li>You can review and change answers before the quiz finishes.</li>
          <li>The result will be declared at the end of the quiz.</li>
        </ol>

        <form className="pt-8 pb-4">
          <input
            type="text"
            value={userName}
            placeholder="Input Your Name"
            className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-blue-800 border"
            onChange={(e) => setUserName(e.target.value)}
          />
        </form>

        <div className="mt-6 flex justify-center">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition"
            onClick={startQuiz}
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginCpns1;
