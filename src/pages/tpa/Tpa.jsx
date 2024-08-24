import React from 'react';
import './tpa.scss';
import { Link } from 'react-router-dom';

export default function Tpa() {
  return (
    <div className='container-tpa'>
      <div className="topbar">Tes Potensi Akademik</div>
      <div className="link-home"> <Link to="/" className='link'>
       <img src="images/home.png" alt="" className='img'/>
       <span className='span'>Home</span>
       </Link></div>
      <div className="container-list">
        <ul className="ul">
          <li className="li">
            <img src="/images/6.png" alt="" className='img'/>
            <h4 className="h4">TPA 1</h4>
            <Link to="/tpa1" className='link'>go tpa 1</Link>
          </li>
          <li className="li">
            <img src="/images/5.jpg" alt="" className='img'/>
            <h4 className="h4">TPA 2</h4>
            <Link to="/tpa2" className='link'>go tpa 2</Link>
          </li>
          <li className="li">
            <img src="/images/7.JPG" alt="" className='img'/>
            <h4 className="h4">TPA 3</h4>
            <Link to="/tpa3" className='link'>go tpa 3</Link>
          </li>
          <li className="li">
            <img src="/images/7.JPG" alt="" className='img'/>
            <h4 className="h4">TPA 3</h4>
            <Link to="/tpa4" className='link'>go tpa 3</Link>
          </li>
          
        </ul>
      </div>
    </div>
  )
}
