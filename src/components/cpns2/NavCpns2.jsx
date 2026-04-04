import React, { useEffect, useState } from "react";
import { dataQues } from "../../database/cpns1/quest";
import { useNavigate } from "react-router-dom";

const NavCpns2 = ({ answers, setTrace }) => {
  const navigate = useNavigate();

  function onTraceControl(i) {
    setTrace(i); // pindah soal
  }
  function onFinished() {
    navigate("/resultcpns2");
  }
  return (
    <div>
      <h1 className="text-center text-xl font-bold mb-4">Pilih Soal</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {dataQues.map((v, index) => (
          <button
            key={index}
            onClick={() => onTraceControl(index)}
            className={`${
              answers[index] !== undefined
                ? `bg-blue-500 text-white`
                : `bg-gray-300 text-black`
            }   px-4 py-2 rounded  transition cursor-pointer hover:bg-blue-700`}
          >
            Soal {index + 1}
          </button>
        ))}
      </div>
      <div className="pt-5">
        <button
          className={`m-10 cursor-pointe bg-pink-600 rounded-2xl p-2 text-white `}
          onClick={onFinished}
        >
          Finished
        </button>
      </div>
    </div>
  );
};

export default NavCpns2;
