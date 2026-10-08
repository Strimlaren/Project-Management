import "./App.module.css";
import Menu from "./components/Menu/Menu";
import WorkArea from "./components/WorkArea/WorkArea";
import DefaultArea from "./components/DefaultArea/DefaultArea";
import { useState, createContext } from "react";

function App() {
  const [selectedProject, setSelectedProject] = useState(
    <DefaultArea onSelect={handleSelectProject} />,
  );
  // const ProjectContext = createContext(null);

  function handleSelectProject(project) {
    setSelectedProject(project);
  }

  return (
    // <ProjectContext value={{ selectedProject, setSelectedProject }}>
    <main>
      <Menu onSelect={handleSelectProject} />
      {selectedProject}
    </main>
    // </ProjectContext>
  );
}

export default App;
