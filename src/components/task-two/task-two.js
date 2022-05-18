import {
  React,
  useState
} from 'react';

import './task-two.css';

export default function TaskTwo() {
  const [btn, setBtn] = useState('');

  return(
    <container id="container-two">
    <h2 id="hdr-two">Task Two</h2>
    <div id="two-btn-div">
      <button id="red"></button>
      <button id="yellow"></button>
    </div>
    </container>
  )
}