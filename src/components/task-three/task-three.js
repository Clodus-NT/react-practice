import React, { useState } from 'react';
import './task-three.css';

export default function TaskThree() {
  const [tileClass1, setTileClass1] = useState('');
  const [tileClass2, setTileClass2] = useState('');
  const [tileClass3, setTileClass3] = useState('');
  const [tileClass4, setTileClass4] = useState('');

  const [isClass, setIsClass] = useState('dlt-self')

  const removeTile = () => {
    const nextClass = 'dlt-self';
   
    if (tileClass1 === '') {
      setTileClass1(nextClass)
    } else if (tileClass2 === '') {
      setTileClass2(nextClass)
    } else if (tileClass3 === '') {
      setTileClass3(nextClass)
    } else if (tileClass4 === '') {
      setTileClass4(nextClass)
    }
  }

  const resetTiles = () => {
    const resetTileClass = '';


    if (
      tileClass1  === 'dlt-self'
      || tileClass2 === 'dlt-self'
      || tileClass3 === 'dlt-self'
      || tileClass4 === 'dlt-self'
    ) {
      setTileClass1(resetTileClass)
      setTileClass2(resetTileClass)
      setTileClass3(resetTileClass)
      setTileClass4(resetTileClass)
    }
    // if (tileClass1  !== '') {
    //   setTileClass1(resetTileClass)
    // } else if (tileClass2 !== '') {
    //   setTileClass2(resetTileClass)
    // } else if (tileClass3 !== '') {
    //   setTileClass3(resetTileClass)
    // } else if (tileClass4 !== '') {
    //   setTileClass4(resetTileClass)
    // }
  }

  return(
    <>
      <div id='div-three'>
        <button 
          id='dlt-btn-one'
          className={tileClass1}
          onClick={removeTile}
        >One</button>

        <button 
          id='dlt-btn-two'
          className={tileClass2}
          onClick={removeTile}
        >Two</button>

        <button 
          id='dlt-btn-three'
          className={tileClass3}
          onClick={removeTile}
        >Three</button>

        <button 
          id='dlt-btn-four'
          className={tileClass4}
          onClick={removeTile}
        >Four</button>
      </div>
      <div id='reset-btn-three'>
        <button
          onClick={resetTiles}
        >Reset</button>
      </div>
    </>
  )
}