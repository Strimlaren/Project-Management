import DefaultArea from "../DefaultArea/DefaultArea";
import css from "./CreateArea.module.css";
import { useState, useRef } from "react";
import {
  addProject,
  removeProject,
  addTask,
  removeTask,
} from "../../utils/database";

export default function CreateArea({ onSelect, db, setDB }) {
  const [textArea, setTextArea] = useState(0);
  const [inputArea, setInputArea] = useState(0);
  const [dateArea, setDateArea] = useState(null);

  const titleRef = useRef("");
  const descriptionRef = useRef("");
  const dateRef = useRef(null);
  const saveButton = useRef(null);

  let validEntries = false;

  function handleTextArea(event) {
    setTextArea(event.target.value.length);
  }

  function handleInputArea(event) {
    setInputArea(event.target.value.length);
  }

  function handleDateArea(event) {
    setDateArea(event.target.value);
  }

  if (textArea && inputArea && dateArea) {
    validEntries = true;
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
      <div className={css.item} onChange={handleDateArea}>
        <h6>DUE DATE</h6>
        <input type="date" />
      </div>
      <div className={css.buttons_div}>
        <button
          className={css.cancel_button}
          onClick={() =>
            onSelect(<DefaultArea onSelect={onSelect} db={db} setDB={setDB} />)
          }
        >
          Cancel
        </button>
        <button
          className={`${css.save_button} ${!validEntries && css.disabled}`}
          undefined={validEntries}
        >
          {validEntries ? "Save Project" : "Invalid Fields"}
        </button>
      </div>
    </div>
  );
}
