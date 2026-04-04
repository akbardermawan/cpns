import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavCpns2 from "./NavCpns2";
import QuestCpns2 from "./QuestCpns2";

import { dataQues } from "../../database/cpns2/quest";
import { toast } from "react-toastify";
import TimerCpns2 from "./TimerCpns2";

const RoomCpns2 = () => {
  const [answers, setAnswers] = useState({}); // simpan semua jawaban
  const [trace, setTrace] = useState(0); // index soal

  const navigate = useNavigate();

  // load dari localStorage jika ada
  useEffect(() => {
    const saved = localStorage.getItem("quizAnswers");
    if (saved) {
      setAnswers(JSON.parse(saved));
    }
  }, []);

  //onPrev
  function onPrev() {
    localStorage.setItem("quizAnswers", JSON.stringify(answers));
    if (trace > 0) setTrace(trace - 1);
  }

  //onNext
  function onNext() {
    localStorage.setItem("quizAnswers", JSON.stringify(answers));
    if (trace < dataQues.length - 1) setTrace(trace + 1);
  }

  function onSave() {
    localStorage.setItem("quizAnswers", JSON.stringify(answers));
    toast.success("Jawaban berhasil disimpan!");
  }

  function onChecked(value) {
    setAnswers({
      ...answers,
      [trace]: value, // simpan jawaban berdasarkan index soal
    });
  }

  function onFinished() {
    navigate("/resultcpns2");
  }

  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen">
      <div className="flex flex-col w-full h-[70%] md:w-[70%] md:h-[65%] justify-center items-center">
        <div className="absolute top-5 right-5 m-2">
          <TimerCpns2 />
        </div>

        <h1 className="text-black m-5 text-xl md:text-4xl font-semibold">
          Quiz Application
        </h1>

        {/* kirim data soal */}
        <QuestCpns2
          question={dataQues[trace]}
          onChecked={onChecked}
          check={answers[trace]} // ambil jawaban dari state
        />

        <div className="flex w-full max-w-4xl justify-between md:justify-center px-5 pt-2 ">
          <div className="px-5 flex w-[50%] justify-around">
            <button
              className="m-10 cursor-pointer bg-amber-300 rounded-2xl p-2"
              onClick={onPrev}
            >
              Prev
            </button>

            <button
              className="bg-amber-300 m-10 cursor-pointer rounded-2xl p-2"
              onClick={onNext}
            >
              Next
            </button>
          </div>
          <div className="px-5 w-[50%] flex justify-around">
            <button
              className="bg-green-300 m-10 cursor-pointer rounded-2xl p-2"
              onClick={onSave}
            >
              Save
            </button>

            <button
              className={`m-10 cursor-pointe bg-pink-600 rounded-2xl p-2 text-white ${
                trace === dataQues.length - 1 ? "" : "hidden"
              }`}
              onClick={onFinished}
            >
              Finished
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-[30%] md:w-[30%] md:h-[90%] py-2 px-8">
        <NavCpns2 answers={answers} setTrace={setTrace} />
      </div>
    </div>
  );
};

export default RoomCpns2;
