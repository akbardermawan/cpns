import React from 'react'
import { Link } from 'react-router-dom';
import './home.scss';

export default function Home() {
  return (
    <div className='container-home'>
      <div className="header">
        <img src="/images/logo.png"alt="logo" className='img'/>
        <span className='span'> ADM </span>

      </div>
      <div className='intro'>
          <p className='p'>Mudah-mudahan dengan mengerjakan soal-soal berikut dapat
             membatu teman-teman lolos seleksi cpns, semoga cita-cita tergapai. Mohon juga bantuan do'anya 
             supaya saya juga dapat lolos tes cpns seperti teman-teman. terimaksih......
          </p>
      </div>
      <div className="container-main">
        <ul className="ques-list">
            <li className="list">
              <h2 className='h2'>Tes Intelegensi Umum</h2>
            <Link to="/tiu" className='link'>Go to TUI </Link> 
            </li>
            <li className="list">
              <h2 className='h2'>Tes Wawasan Kebangsaan</h2>
            <Link to="/twk" className='link'>Go to TWK </Link> 
            </li>
            <li className="list">
              <h2 className='h2'>Tes Potensi Akademik</h2>
            <Link to="/tpa" className='link'>Go to TPA </Link> 
            </li>
            <li className="list">
              <h2 className='h2'>SKD Penyuluh Pertanian</h2>
            <Link to="/pp" className='link'>Go to PP </Link> 
            </li>
            
        </ul>
      </div>
      <div className="footer">
        <h6 className='h6'>
          Dalam gelapnya malam, saya ingin menjadi bagian dari bintang bintang yang menerangi malam
        </h6>
        <span className='span'>akbardermawan@1998.gmail.com</span>
      </div>
    </div>
  )
}
