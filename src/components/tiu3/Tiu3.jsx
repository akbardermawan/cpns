import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { dataQues } from "../../database/tiu3";
import { toast } from "react-toastify";

export default function Tiu3() {
  const [quesNumber, setQuesNumber] = useState(1);

  const [ques, setQues] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("");
  const navigate = useNavigate(); // Inisialisasi useNavigate

  useEffect(() => {
    setQues(dataQues[quesNumber - 1]);
    setClassName("");
  }, [quesNumber]);

  const delay = (duration, callback) => {
    setTimeout(callback, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName(a.correct ? "correct" : "incorrect");

    delay(100, () => {
      if (a.correct) {
        if (quesNumber < dataQues.length) {
          toast.success("correct answer");

          setTimeout(() => {
            setQuesNumber((prev) => prev + 1);
            setSelectedAnswer(null);
            setClassName("");
          }, 1000);
        } else {
          toast.success("congratulations on finishing");

          setTimeout(() => {
            setSelectedAnswer(null);
            setClassName("");
            navigate("/tiu");
          }, 1500);
        }
      } else {
        toast.error("wrong answer");
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-6">
        {/* Question */}
        <div className="text-xl font-semibold text-gray-800 mb-6">
          {ques?.question}
        </div>

        {/* Answers */}
        <div className="flex flex-col mt-2">
          {ques?.answer.map((a, index) => (
            <div
              key={index}
              onClick={() => handleClick(a)}
              className={`cursor-pointer border rounded-lg p-4 transition mt-2
          hover:bg-blue-50 hover:border-blue-400
          ${
            selectedAnswer === a
              ? "bg-blue-100 border-blue-500 font-medium"
              : "bg-gray-50 border-gray-300"
          }`}
            >
              {a.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
