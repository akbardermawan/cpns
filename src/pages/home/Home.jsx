import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.scss";

const AD_SCRIPT_ID = "native-banner-script";

export default function Home() {
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
    <div className="container-home">
      <div className="header flex justify-between">
        <img src="/images/logo.png" alt="logo" className="img" />

        <a
          href="https://akbardermawanmac.netlify.app/"
          className="cursor-pointer"
          target="_blank"
        >
          <span className="span"> ADM </span>
        </a>
      </div>

      <div className="intro flex flex-col">
        <p className="text-gray-600 text-2xl">
          Disarankan untuk mengerjakan soal di PC atau Laptop
        </p>
      </div>
      <div className="container-main">
        <ul className="ques-list">
          <li className="list">
            <Link to="/tiu" className="link">
              <h2 className="text-2xl font-bold">TIU</h2>
            </Link>
          </li>
          <li className="list">
            <Link to="/twk" className="link">
              <h2 className="text-2xl font-bold">TWK</h2>
            </Link>
          </li>
          <li className="list">
            <Link to="/tkp" className="link">
              <h2 className="text-2xl font-bold">TKP</h2>
            </Link>
          </li>
          <li className="list">
            <Link to="/pp" className="link">
              <h2 className="text-2xl font-bold">SKB Penyuluh Pertanian</h2>
            </Link>
          </li>
          <li className="list">
            <Link to="/cpns" className="link">
              <h2 className="text-2xl font-bold">Simulasi CPNS</h2>
            </Link>
          </li>
          <li className="list">
            <Link to="/cpns+vip" className="link">
              <h2 className="text-2xl font-bold">
                CPNS VIP Soal + Pembahasan{" "}
              </h2>
            </Link>
          </li>
        </ul>
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
}
