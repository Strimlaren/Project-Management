import "./WorkArea.module.css";

export default function WorkArea({ project }) {
  return (
    <section>
      <h1>{project.title}</h1>
      <p>{project.dueDate}</p>
      <p>{project.description}</p>
      <hr />
      <ul>
        {project.tasks.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>
    </section>
  );
}
