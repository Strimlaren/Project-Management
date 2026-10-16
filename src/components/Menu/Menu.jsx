import css from "./Menu.module.css"

export default function Menu({ onSelect, onCreate, selectedProject, db }) {
  return (
    <aside>
      <h2>PROJECTS</h2>
      <hr />

      <button onClick={onCreate}>+ Add Project</button>

      {db.map((project) => (
        <p
          className={`${css.menuLink} ${
            selectedProject?.title === project.title ? css.active : ""
          }`}
          key={project.title}
          onClick={() => onSelect(project)}
        >
          {project.title}
        </p>
      ))}
    </aside>
  )
}
