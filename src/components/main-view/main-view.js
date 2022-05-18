import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuBar from '../navbar/navbar';
import TaskOne from '../task-one/task-one';
import TaskTwo from '../task-two/task-two';
import TaskThree from '../task-three/task-three';


import './main-view.css';

export default function MainView() {
  return (
    <>
    <Router>
      <MenuBar />
      <Routes>
        <Route path="/" element={<TaskOne/>}/>
      </Routes>
      <Routes>
        <Route path="/two" element={<TaskTwo/>}/>
      </Routes>
      <Routes>
        <Route path="/three" element={<TaskThree/>}/>
      </Routes>
    </Router>
    {/* <h1 id="main-view-header">Let's React</h1>
    <button id="task-one-btn">Task 1</button>
    <button id="task-two-btn">Task 2</button>
    <button id="task-three-btn">Task 3</button>
    <br></br>
    <TaskOne /> */}
    </>
  )
}