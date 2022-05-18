import React, { useState } from 'react';
import './task-three.css';


export default function TaskThree() {
  const [tile, setTile] = useState('');

  return(
    <>
      <div id='div-three'>
        <button id='dlt-btn-one'>One</button>
        <button id='dlt-btn-two'>Two</button>
        <button id='dlt-btn-three'>Three</button>
        <button id='dlt-btn-four'>Four</button>
      </div>
      <div id='reset-btn-three'>
        <button>Reset</button>
      </div>
    </>
  )
}