import React from 'react';
import './twk.scss';
import { Link } from 'react-router-dom';


export default function Twk() {


  return (
    
    <div className="container-twk">
      <div className="topbar">Tes Wawasan Kewarganegaraan</div>
      <div className="link-home"> <Link to="/" className='link'>
       <img src="images/home.png" alt="" className='img'/>
       <span className='span'>Home</span>
       </Link></div>
      <div className="container-list">
        <ul className="ul">
          <li className="li">
            <img src="/images/1.JPG" alt="" className='img'/>
            <h4 className="h4">TWK 1</h4>
            <Link to="/twk1" className='link'>go twk 1</Link>
          </li>
          <li className="li">
            <img src="/images/1.JPG" alt="" className='img'/>
            <h4 className="h4">TWK 2</h4>
            <Link to="/twk2" className='link'>go twk 2</Link>
          </li>
          <li className="li">
            <img src="/images/2.JPG" alt="" className='img'/>
            <h4 className="h4">TWK 3</h4>
            <Link to="/twk3" className='link'>go twk 3</Link>
          </li>
          <li className="li">
            <img src="/images/2.JPG" alt="" className='img'/>
            <h4 className="h4">TWK 3</h4>
            <Link to="/twk4" className='link'>go twk 3</Link>
          </li>
          
        </ul>
      </div>
    </div>
  )
}
