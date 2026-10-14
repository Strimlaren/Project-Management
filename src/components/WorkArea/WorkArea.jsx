import css from "./WorkArea.module.css";
import DefaultArea from "../DefaultArea/DefaultArea";
import { addTask, removeTask, removeProject } from "../../utils/database";

export default function WorkArea({ onSelect, project, db, setDB }) {
  function handleRemoveProject() {
    setDB(removeProject(project.title));
    onSelect(<DefaultArea onSelect={onSelect} db={db} setDB={setDB} />);
  }
  return (
    <section>
      <div className={css.titleContainer}>
        <h1>{project.title}</h1>
        <button onClick={handleRemoveProject}>Delete</button>
      </div>
      <p className={css.date}>Due: {project.dueDate}</p>
      <hr className={css.hr} />
      <p className={css.description}>{project.description}</p>

      <hr className={css.hr} />
      <div className={css.taskInput}>
        <h2>Tasks</h2>
        <div className={css.taskInsertion}>
          <input type="text" required />{" "}
          <button className={css.addTaskButton}>Add Task</button>
        </div>
      </div>
      <ul>
        {project.tasks.map((task, i) => (
          <li key={i}>
            <p>{task}</p>
            <button>Clear</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
