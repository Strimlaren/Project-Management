import css from "./DefaultArea.module.css";
import logo from "/logo.png";
import CreateArea from "../CreateArea/CreateArea";

export default function DefaultArea({ onSelect, db }) {
  return (
    <section className={css.container}>
      <img src={logo} alt="Some random image." />
      <h1>No Project Selected</h1>
      <p>Select a project or get started with a new one.</p>
      <button
        onClick={() => onSelect(<CreateArea onSelect={onSelect} db={db} />)}
      >
        Create new project
      </button>
    </section>
  );
}
