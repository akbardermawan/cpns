import React from 'react';
import './que.scss';
import { useEffect, useState } from 'react';
import Ques from './Ques.jsx';

export default function Que() {
    const [quesNumber, setQuesNumber] = useState(1); 
  return (
    <div className='container-que1'>
       <Ques quesNumber={quesNumber} setQuesNumber={setQuesNumber} />
    </div>
  )
}
