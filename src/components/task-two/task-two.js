import React, { useState } from 'react';

import './task-two.css';

export default function TaskTwo() {
  const [btnRedId, setBtnRedId] = useState('btn-red');
  const [btnYellowId, setBtnYellowId] = useState('btn-yellow');

  const swapColor = () => {
    const nextRedId = 'btn-yellow';
    const nextYellowId = 'btn-red';

    if (btnRedId === 'btn-red') {
      setBtnRedId(nextRedId)
      setBtnYellowId(nextYellowId)
    } else {
      setBtnRedId(nextYellowId)
      setBtnYellowId(nextRedId)
    }
  }

  return(
    <div id="container-two">
    <h2 id="hdr-two">Task Two</h2>
    <div id="two-btn-div">
      <button 
        id={btnRedId.toString()}
        onClick={swapColor}
      >
      </button>
      <button 
        id={btnYellowId.toString()}
        onClick={swapColor}
      ></button>
    </div>
    </div>
  )
}