import DefaultArea from "../DefaultArea/DefaultArea";
import css from "./CreateArea.module.css";
import { useState } from "react";

export default function CreateArea({ onSelect }) {
  const [textArea, setTextArea] = useState(0);
  const [inputArea, setInputArea] = useState(0);

  function handleTextArea(event) {
    setTextArea(event.target.value.length);
  }

  function handleInputArea(event) {
    setInputArea(event.target.value.length);
  }

  return (
    <div className={css.container}>
      <div className={css.item}>
        <h6>TITLE</h6>
        <input type="text" onChange={handleInputArea} maxLength={35} />
        <p className={css.counter}>{inputArea}/35</p>
      </div>
      <div className={css.item}>
        <h6>DESCRIPTION</h6>
        <textarea maxLength={150} onChange={handleTextArea} />
        <p className={css.counter}>{textArea}/150</p>
      </div>
      <div className={css.item}>
        <h6>DUE DATE</h6>
        <input type="date" />
      </div>
      <div className={css.buttons_div}>
        <button
          className={css.cancel_button}
          onClick={() => onSelect(<DefaultArea onSelect={onSelect} />)}
        >
          Cancel
        </button>
        <button className={css.save_button}>Save</button>
      </div>
    </div>
  );
}
