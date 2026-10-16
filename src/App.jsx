import "./App.module.css"
import { getProjects } from "./utils/database"
import Menu from "./components/Menu/Menu"
import WorkArea from "./components/WorkArea/WorkArea"
import DefaultArea from "./components/DefaultArea/DefaultArea"
import CreateArea from "./components/CreateArea/CreateArea"
import { useState } from "react"

function App() {
  const [database, setDatabase] = useState(getProjects())
  const [selectedProject, setSelectedProject] = useState(null)
  const [showCreateArea, setShowCreateArea] = useState(false)

  function handleSelectProject(project) {
    setSelectedProject(project)
    setShowCreateArea(false)
  }

  function handleCreateProject() {
    setShowCreateArea(true)
    setSelectedProject(null)
  }

  return (
    <main>
      <Menu
        onSelect={handleSelectProject}
        onCreate={handleCreateProject}
        selectedProject={selectedProject}
        db={database}
        setDB={setDatabase}
      />

      {showCreateArea ? (
        <CreateArea
          onSelect={handleSelectProject}
          db={database}
          setDB={setDatabase}
        />
      ) : selectedProject ? (
        <WorkArea
          key={selectedProject.title}
          project={selectedProject}
          onSelect={handleSelectProject}
          db={database}
          setDB={setDatabase}
        />
      ) : (
        <DefaultArea handleCreateProject={handleCreateProject} />
      )}
    </main>
  )
}

export default App
