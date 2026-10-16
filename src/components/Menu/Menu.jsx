import css from "./Menu.module.css"
import CreateArea from "../CreateArea/CreateArea"
import WorkArea from "../WorkArea/WorkArea.jsx"

export default function Menu({ onSelect, selectedTitle, title, db, setDB }) {
  function changeProject(project) {
    console.log("Menu", project)
    selectedTitle(project.title)
    onSelect(
      <WorkArea onSelect={onSelect} project={project} db={db} setDB={setDB} />,
    )
  }

  return (
    <aside>
      <h2>PROJECTS</h2>
      <hr />
      <button
        onClick={() =>
          onSelect(<CreateArea onSelect={onSelect} db={db} setDB={setDB} />)
        }
      >
        + Add Project
      </button>
      {db.map((project, index) => (
        <p
          className={`${css.menuLink} ${title === project.title ? css.active : ""}`}
          key={index}
          onClick={() => changeProject(project)}
        >
          {console.log("menu map", project)}
          {project.title}
        </p>
      ))}
    </aside>
  )
}
