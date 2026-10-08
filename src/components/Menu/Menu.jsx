import "./Menu.module.css";
import CreateArea from "../CreateArea/CreateArea";

export default function Menu({ onSelect }) {
  return (
    <aside>
      <h2>PROJECTS</h2>
      <hr />
      <button onClick={() => onSelect(<CreateArea onSelect={onSelect} />)}>
        + Add Project
      </button>
    </aside>
  );
}
