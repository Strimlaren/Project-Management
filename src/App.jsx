import "./App.module.css";
import { getProjects } from "./utils/database";
import Menu from "./components/Menu/Menu";
import WorkArea from "./components/WorkArea/WorkArea";
import DefaultArea from "./components/DefaultArea/DefaultArea";
import { useState } from "react";

function App() {
  const [database, setDatabase] = useState(getProjects());
  const [title, setTitle] = useState("");
  const [selectedProject, setSelectedProject] = useState(
    <DefaultArea
      onSelect={handleSelectProject}
      db={database}
      setDB={setDatabase}
    />,
  );

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
        db={database}
        setDB={setDatabase}
      />
      {selectedProject}
    </main>
  );
}

export default App;
