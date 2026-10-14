import css from "./Menu.module.css";
import CreateArea from "../CreateArea/CreateArea";
import WorkArea from "../WorkArea/WorkArea.jsx";

export default function Menu({ onSelect, selectedTitle, title, db }) {
  function handleSelectProject(project) {
    selectedTitle(project.title);
    onSelect(<WorkArea project={project} />);
  }

  return (
    <aside>
      <h2>PROJECTS</h2>
      <hr />
      <button onClick={() => onSelect(<CreateArea onSelect={onSelect} />)}>
        + Add Project
      </button>
      {db.map((project, index) => (
        <p
          className={`${css.menuLink} ${title === project.title ? css.active : ""}`}
          key={index}
          onClick={() => handleSelectProject(project)}
        >
          {project.title}
        </p>
      ))}
    </aside>
  );
}
