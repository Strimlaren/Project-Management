import css from "./WorkArea.module.css"

import { useRef, useState } from "react"
import {
  addTask,
  removeTask,
  removeProject,
  getProjects,
} from "../../utils/database"

export default function WorkArea({ onSelect, project, db, setDB }) {
  const addTaskInputRef = useRef("")
  const [data, setData] = useState(project)

  function handleRemoveProject() {
    setDB(removeProject(project.title))
    onSelect()
  }

  function handleAddTask() {
    setDB(addTask(project.title, addTaskInputRef.current.value))
    setData(getProjects().find((p) => p.title === project.title))
    addTaskInputRef.current.value = ""
  }

  function handleRemoveTask(task) {
    setDB(removeTask(project.title, task))
    setData(getProjects().find((p) => p.title === project.title))
  }

  return (
    <section className={css.workAreaSection}>
      <div className={css.titleContainer}>
        <h1>{data.title}</h1>
        <button onClick={handleRemoveProject}>Delete</button>
      </div>
      <p className={css.date}>Due: {data.dueDate}</p>
      <hr className={css.hr} />
      <p className={css.description}>{data.description}</p>

      <hr className={css.hr} />
      <div className={css.taskInput}>
        <h2>
          Tasks
          {data.tasks.length > 0 ? `: ${data.tasks.length}` : undefined}
        </h2>
        <div className={css.taskInsertion}>
          <input ref={addTaskInputRef} type="text" required />
          <button onClick={handleAddTask} className={css.addTaskButton}>
            Add Task
          </button>
        </div>
      </div>
      <ul className={`${data.tasks.length === 0 ? css.empty : undefined}`}>
        {data.tasks.map((task, i) => (
          <li key={i}>
            <p>{task}</p>
            <button onClick={() => handleRemoveTask(task)}>Clear</button>
          </li>
        ))}
      </ul>
    </section>
  )
}
