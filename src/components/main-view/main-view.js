import React from 'react';
import TaskOne from '../task-one/task-one';

import './main-view.css';

export default function MainView() {
  return (
    <>
    <h1 id="main-view-header">Let's React</h1>
    <button id="task-one-btn">Task 1</button>
    <button id="task-two-btn">Task 2</button>
    <button id="task-three-btn">Task 3</button>
    <br></br>
    <TaskOne />
    </>
  )
}