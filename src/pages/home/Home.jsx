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
        <p className="p text-white">Mohon do'anya terimaksih......</p>
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
      <div className=" text-center">
        <span className="span text-black">akbardermawan27@gmail.com</span>
      </div>
    </div>
  );
}
