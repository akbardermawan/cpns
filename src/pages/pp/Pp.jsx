import React from 'react'
import { Link } from 'react-router-dom';
import './pp.scss';

export default function Tiu() {
  return (
    <div className='container-tiu'>
       <div className="topbar">Penyuluh Pertanian</div>
       <div className="link-home"> <Link to="/" className='link'>
       <img src="images/home.png" alt="" className='img'/>
       <span className='span'>Home</span>
       </Link></div>
      <div className="container-list">
        <ul className="ul">
          <li className="li">
            <img src="/images/8.JPG" alt="" className='img'/>
            <h4 className="h4">PP 1</h4>
            <Link to="/pp1" className='link'>go PP 1</Link>
          </li>
          
          
        </ul>
      </div>
    </div>
  )
}
