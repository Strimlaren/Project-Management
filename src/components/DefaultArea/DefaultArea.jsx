import css from "./DefaultArea.module.css"
import logo from "/logo.png"

export default function DefaultArea({ handleCreateProject }) {
  return (
    <section className={css.container}>
      <img src={logo} alt="Some random image." />
      <h1>No Project Selected</h1>
      <p>Select a project or get started with a new one.</p>
      <button onClick={handleCreateProject}>Create new project</button>
    </section>
  )
}
