import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TimerCpns2 = () => {
  const navigate = useNavigate();

  // ambil waktu dari localStorage jika ada
  const [time, setTime] = useState(() => {
    const savedTime = localStorage.getItem("quizTimer");
    return savedTime ? parseInt(savedTime) : 60 * 60;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        const newTime = prevTime - 1;

        if (newTime <= 0) {
          clearInterval(timer);
          localStorage.removeItem("quizTimer");
          navigate("/resultcpns2");
          return 0;
        }

        // simpan setiap 5 menit (300 detik)
        if (newTime % 300 === 0) {
          localStorage.setItem("quizTimer", newTime);
        }

        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  // format menit:detik
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="text-xl font-bold text-yellow-900">
      Time Left : {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
};

export default TimerCpns2;
