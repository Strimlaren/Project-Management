import "./App.module.css";
import Menu from "./components/Menu/Menu";
import WorkArea from "./components/WorkArea/WorkArea";
import DefaultArea from "./components/DefaultArea/DefaultArea";
import { useState } from "react";

function App() {
  const [selectedProject, setSelectedProject] = useState(
    <DefaultArea onSelect={handleSelectProject} />,
  );
  const [title, setTitle] = useState("");

  function handleSelectProject(project) {
    setSelectedProject(project);
  }

  // Helps to show selected indicator on menu items
  function handleTitle(newTitle) {
    setTitle(newTitle);
  }

  return (
    <main>
      <Menu
        onSelect={handleSelectProject}
        selectedTitle={handleTitle}
        title={title}
      />
      {selectedProject}
    </main>
  );
}

export default App;
