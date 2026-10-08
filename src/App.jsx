import "./App.module.css";
import Menu from "./components/Menu/Menu";
import WorkArea from "./components/WorkArea/WorkArea";
import DefaultArea from "./components/DefaultArea/DefaultArea";
import { useState } from "react";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  function handleSelectProject() {}

  return (
    <main>
      <Menu />
      {!selectedProject ? <DefaultArea /> : <WorkArea />}
    </main>
  );
}

export default App;
