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
    </>
  )
}