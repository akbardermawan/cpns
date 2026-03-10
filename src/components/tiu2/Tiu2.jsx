import React from "react";
import "./tiu2.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { dataQues } from "../../database/tiu2";
import { toast } from "react-toastify";

export default function Tiu2() {
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
    <div className="tiu2-container">
      <div className="question-container">
        <div className="question-text">{ques?.question}</div>
        <div className="answers-container">
          {ques?.answer.map((a, index) => (
            <div
              key={index}
              className={`answer ${className} ${selectedAnswer === a ? "active" : ""}`}
              onClick={() => handleClick(a)}
            >
              {a.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
