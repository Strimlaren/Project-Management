import "./App.module.css";
import Menu from "./components/Menu/Menu";
import WorkArea from "./components/WorkArea/WorkArea";
import DefaultArea from "./components/DefaultArea/DefaultArea";
import { useState } from "react";

function App() {
  const [selectedProject, setSelectedProject] = useState(
    <DefaultArea onSelect={handleSelectProject} />,
  );

  function handleSelectProject(project) {
    setSelectedProject(project);
  }

  return (
    <main>
      <Menu onSelect={handleSelectProject} />
      {selectedProject}
    </main>
  );
}

export default App;
