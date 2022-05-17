import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

export default function MenuBar() {
  return (
    <>
    <h1 id="nav-hdr">Let's React!</h1>
    <div id="nav-div">
      <button id="btn-one">
        <Link to="/">Task 1</Link>
      </button>
      <button id="btn-two">
        <Link to="/two">Task 2</Link>
      </button>
      <button id="btn-three">
        <Link to="/three">Task 3</Link>
      </button>
    </div>
    </>
  )
}