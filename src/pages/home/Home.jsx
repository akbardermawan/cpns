import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";

export default function Home() {
  return (
    <div className="container-home">
      <div className="header">
        <img src="/images/logo.png" alt="logo" className="img" />
        <span className="span"> ADM </span>
      </div>
      <div className="intro">
        <p className="p">
          Mudah-mudahan dengan mengerjakan soal-soal berikut dapat membatu
          teman-teman lolos seleksi cpns, semoga cita-cita tergapai. Mohon juga
          bantuan do'anya supaya saya juga dapat lolos tes cpns seperti
          teman-teman. terimaksih......
        </p>
      </div>
      <div className="container-main">
        <ul className="ques-list">
          <li className="list">
            <Link to="/tiu" className="link">
              <h2 className="text-2xl font-bold">Tes Intelegensi Umum</h2>
            </Link>
          </li>
          <li className="list">
            <Link to="/twk" className="link">
              <h2 className="text-2xl font-bold">Tes Wawasan Kebangsaan</h2>
            </Link>
          </li>
          <li className="list">
            <Link to="/tkp" className="link">
              <h2 className="text-2xl font-bold">Tes Karakteristik Pribadi</h2>
            </Link>
          </li>
          <li className="list">
            <Link to="/pp" className="link">
              <h2 className="text-2xl font-bold">SKD Penyuluh Pertanian</h2>
            </Link>
          </li>
          <li className="list">
            <Link to="/cpns" className="link">
              <h2 className="text-2xl font-bold">Simulasi CPNS</h2>
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer">
        <h6 className="h6">
          Dalam gelapnya malam, saya ingin menjadi bagian dari bintang bintang
          yang menerangi malam
        </h6>
        <span className="span">akbardermawan@1998.gmail.com</span>
      </div>
    </div>
  );
}
