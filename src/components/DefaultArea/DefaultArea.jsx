import "./DefaultArea.module.css";
import logo from "/logo.png";

export default function DefaultArea() {
  return (
    <section>
      <img src={logo} alt="Some random image." />
      <h1>No Project Selected</h1>
      <p>Select a project or get started with a new one.</p>
      <button>Create new project</button>
    </section>
  );
}
