import css from "./WorkArea.module.css"
import { useRef, useState } from "react"
import {
  addTask,
  removeTask,
  removeProject,
  getProjects,
} from "../../utils/database"
import DeleteButton from "../DeleteButton/DeleteButton"

export default function WorkArea({ onSelect, project, setDB }) {
  const addTaskInputRef = useRef("")
  const [data, setData] = useState(project)
  const [isDuplicate, setIsDuplicate] = useState(false)
  const [taskEntry, setTaskEntry] = useState(0)

  const MAX_TASK = 50
  let isValidTaskEntry = true

  if (taskEntry < 5 || taskEntry > MAX_TASK) isValidTaskEntry = false

  function handleTaskEntry(event) {
    setTaskEntry(event.target.value.length)
  }

  function handleRemoveProject() {
    setDB(removeProject(project.title))
    onSelect()
  }

  function handleAddTask() {
    const db = getProjects()
    const result = db.find(
      (item) => item.title.toLowerCase() === project.title.toLowerCase(),
    )

    if (result.tasks.includes(addTaskInputRef.current.value)) {
      setIsDuplicate(true)
      setTimeout(() => {
        setIsDuplicate(false)
      }, 4000)
      addTaskInputRef.current.value = ""
      setTaskEntry(0)
      return
    }

    setDB(addTask(project.title, addTaskInputRef.current.value))
    setData(getProjects().find((p) => p.title === project.title))
    addTaskInputRef.current.value = ""
    setTaskEntry(0)
  }

  function handleRemoveTask(task) {
    setDB(removeTask(project.title, task))
    setData(getProjects().find((p) => p.title === project.title))
  }

  return (
    <section className={css.workAreaSection}>
      <div className={css.titleContainer}>
        <h1>{data.title}</h1>
        {/* <button onClick={handleRemoveProject}>Delete</button> */}
        <DeleteButton handlerFunction={handleRemoveProject} />
      </div>
      <p className={css.date}>Due: {data.dueDate}</p>
      <hr className={css.hr} />
      <p className={css.description}>{data.description}</p>

      <hr className={css.hr} />
      <div className={css.taskInput}>
        <h2>
          Tasks
          {data.tasks.length > 0 ? `: ${data.tasks.length}` : ""}
        </h2>
        <div className={css.taskInsertion}>
          <input
            onChange={handleTaskEntry}
            ref={addTaskInputRef}
            type="text"
            required
          />

          {isDuplicate ? (
            <p className={css.duplicateTaskError}>Duplicate tasks found!</p>
          ) : (
            ""
          )}

          <button
            disabled={!isValidTaskEntry}
            onClick={handleAddTask}
            className={`${css.addTaskButton} ${!isValidTaskEntry ? css.disabled : ""}`}
          >
            Add Task
          </button>
        </div>
      </div>
      {data.tasks.length === 0 ? (
        <p className={css.noTasks}>This project does not yet have any tasks.</p>
      ) : (
        <ul className={`${data.tasks.length === 0 ? css.empty : ""}`}>
          {data.tasks.map((task, i) => (
            <li key={i}>
              <p>{task}</p>
              <button onClick={() => handleRemoveTask(task)}>Clear</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
