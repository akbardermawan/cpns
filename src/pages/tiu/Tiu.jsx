import React from 'react'
import { Link } from 'react-router-dom';
import './tiu.scss';

export default function Tiu() {
  return (
    <div className='container-tiu'>
       <div className="topbar">Tes Intelegensi Umum</div>
       <div className="link-home"> <Link to="/" className='link'>
       <img src="images/home.png" alt="" className='img'/>
       <span className='span'>Home</span>
       </Link></div>
      <div className="container-list">
        <ul className="ul">
          <li className="li">
            <img src="/images/3.JPG" alt="" className='img'/>
            <h4 className="h4">TIU 1</h4>
            <Link to="/tiu1" className='link'>go tiu 1</Link>
          </li>
          <li className="li">
            <img src="/images/3.JPG" alt="" className='img'/>
            <h4 className="h4">TIU 2</h4>
            <Link to="/tiu2" className='link'>go tiu 2</Link>
          </li>
          <li className="li">
            <img src="/images/4.JPG" alt="" className='img'/>
            <h4 className="h4">TIU 3</h4>
            <Link to="/tiu3" className='link'>go tiu 3</Link>
          </li>
          <li className="li">
            <img src="/images/4.JPG" alt="" className='img'/>
            <h4 className="h4">TIU 4</h4>
            <Link to="/tiu4" className='link'>go tiu 4</Link>
          </li>
          
        </ul>
      </div>
    </div>
  )
}
