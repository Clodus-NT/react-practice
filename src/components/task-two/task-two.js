import React, { useState } from 'react';

import './task-two.css';

export default function TaskTwo() {
  const [btnRedId, setBtnRedId] = useState('btn-red');
  const [btnYellowId, setBtnYellowId] = useState('btn-yellow');

  const swapRed = () => {
    if (btnRedId === 'btn-red') {
      setBtnRedId((btnRedId) => btnRedId === 'btn-yellow')
    }
  }

  return(
    <div id="container-two">
    <h2 id="hdr-two">Task Two</h2>
    <div id="two-btn-div">
      <button 
        id={btnRedId.toString()}
        onClick={() => swapRed()}
      >
      </button>
      <button 
        id={btnYellowId.toString()}
      ></button>
    </div>
    </div>
  )
}