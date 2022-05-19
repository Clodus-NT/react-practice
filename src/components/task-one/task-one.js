import {
  React,
  useState
} from 'react';
import './task-one.css';

export default function TaskOne() {
  const [text, setText] = useState('');

  return (
    <>
    <div id="text-input-div">
      <h2>Task One</h2>
      <label>
        <input 
          id="text-input" 
          type="text"
          placeholder='try typing something'
          onChange={(e) => setText(e.target.value)}>
        </input>
      </label>
    </div>
    <br/>
    <p id="textbox">{text}</p>
    <br/>
    <div id="reset-textbox-btn-div">
      <button 
      id="reset-textbox-btn" 
      type="reset"
      onClick={() => {
        setText('')
        document.getElementById("text-input").value=''
      }}>
        Clear
      </button>
    </div>
    </>
  )
}