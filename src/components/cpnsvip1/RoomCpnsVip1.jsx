import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavCpnsVip1 from "./NavCpnsVip1";
import QuestCpnsVip1 from "./QuestCpnsVip1";

import { dataQues } from "../../database/cpnsvip1/quest";
import { toast } from "react-toastify";
import TimerCpnsVip1 from "./TimerCpnsVip1";

const RoomCpnsVip1 = () => {
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
    navigate("/resultcpnsvip1");
  }

  return (
    <div className="min-h-screen w-full bg-gray-100 p-3 md:p-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 md:flex-row md:items-start">
        {/* Area Utama Soal */}
        <div className="flex min-w-0 flex-1 flex-col gap-5">
          {/* Header Timer */}
          <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
            <div>
              <h2 className="text-base font-bold text-gray-800 md:text-lg">
                Latihan Soal CPNS
              </h2>
              <p className="mt-1 text-xs text-gray-500 md:text-sm">
                Kerjakan soal dengan teliti dan cermat.
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 px-3 py-2">
              <TimerCpnsVip1 />
            </div>
          </div>

          {/* Komponen Soal */}
          <div className="flex w-full justify-center">
            <QuestCpnsVip1
              question={dataQues[trace]}
              onChecked={onChecked}
              check={answers[trace]}
            />
          </div>

          {/* Navigasi Tombol */}
          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm md:p-5">
            {/* Prev dan Next */}
            <div className="flex items-center justify-between gap-3">
              <button
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 md:flex-none md:min-w-32"
                onClick={onPrev}
                disabled={trace === 0}
              >
                <span>←</span>
                Prev
              </button>

              <span className="text-xs font-medium text-gray-500 md:text-sm">
                {trace + 1} / {dataQues.length}
              </span>

              <button
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40 md:flex-none md:min-w-32"
                onClick={onNext}
                disabled={trace === dataQues.length - 1}
              >
                Next
                <span>→</span>
              </button>
            </div>

            {/* Save dan Finished */}
            <div className="mt-4 flex flex-col gap-3 border-t border-gray-100 pt-4 sm:flex-row sm:justify-between">
              <button
                className="flex items-center justify-center gap-2 rounded-xl border border-green-200 bg-green-50 px-5 py-3 text-sm font-semibold text-green-700 transition-colors hover:bg-green-100"
                onClick={onSave}
              >
                <span>✓</span>
                Save Jawaban
              </button>

              {trace === dataQues.length - 1 && (
                <button
                  className="flex items-center justify-center gap-2 rounded-xl bg-pink-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-pink-700"
                  onClick={onFinished}
                >
                  Finished
                  <span>→</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar Navigasi Soal */}
        <aside className="w-full md:sticky md:top-6 md:w-72 md:shrink-0 lg:w-80">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-100 bg-gray-50 px-5 py-4">
              <h3 className="font-bold text-gray-800">Navigasi Soal</h3>
              <p className="mt-1 text-xs text-gray-500">
                Pilih nomor soal untuk berpindah.
              </p>
            </div>

            <div className="p-3 md:p-4">
              <NavCpnsVip1 answers={answers} setTrace={setTrace} />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default RoomCpnsVip1;
