import css from "./CreateArea.module.css"
import { useState, useRef } from "react"
import { addProject, getProjects } from "../../utils/database"

export default function CreateArea({ onSelect, handleDefault, setDB }) {
  const [textArea, setTextArea] = useState(0)
  const [inputArea, setInputArea] = useState(0)
  const [dateArea, setDateArea] = useState(null)
  const [isDuplicate, setIsDuplicate] = useState(false)

  const MAX_DESC = 150
  const MAX_INPUT = 21

  const titleRef = useRef("")
  const descriptionRef = useRef("")
  const dateRef = useRef(null)

  let validEntries = false

  function handleTextArea(event) {
    setTextArea(event.target.value.length)
  }

  function handleInputArea(event) {
    setInputArea(event.target.value.length)
  }

  function handleDateArea(event) {
    setDateArea(event.target.value)
  }

  function handleSave() {
    if (!validEntries) return

    const db = getProjects()
    const result = db.find(
      (item) =>
        item.title.toLowerCase() === titleRef.current.value.toLowerCase(),
    )
    if (result) {
      setIsDuplicate(true)
      setTimeout(() => {
        setIsDuplicate(false)
      }, 4000)
      titleRef.current.value = ""
      setTextArea(0)
      return
    }

    const newProject = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: dateRef.current.value,
      tasks: [],
    }

    setDB(addProject(newProject))
    onSelect(newProject)
  }

  if (textArea && inputArea && dateArea) {
    validEntries = true
  }

  return (
    <div className={css.container}>
      <div className={css.item}>
        <h6>TITLE</h6>
        <input
          type="text"
          ref={titleRef}
          onChange={handleInputArea}
          maxLength={21}
        />
        <p className={css.duplicateError}>
          {isDuplicate ? "Duplicate titles found!" : ""}
        </p>
        <p className={css.counter}>
          {inputArea}/{MAX_INPUT}
        </p>
      </div>
      <div className={css.item}>
        <h6>DESCRIPTION</h6>
        <textarea
          ref={descriptionRef}
          maxLength={MAX_DESC}
          onChange={handleTextArea}
        />
        <p className={css.counter}>
          {textArea}/{MAX_DESC}
        </p>
      </div>
      <div className={css.item} onChange={handleDateArea}>
        <h6>DUE DATE</h6>
        <input ref={dateRef} type="date" />
      </div>
      <div className={css.buttons_div}>
        <button className={css.cancel_button} onClick={() => handleDefault()}>
          Cancel
        </button>
        <button
          className={`${css.save_button} ${!validEntries && css.disabled}`}
          undefined={validEntries}
          onClick={handleSave}
        >
          {validEntries ? "Save Project" : "Invalid Form"}
        </button>
      </div>
    </div>
  )
}
