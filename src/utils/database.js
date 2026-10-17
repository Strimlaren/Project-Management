const initialDatabase = [
  {
    title: "Backlog for this app",
    description: "What additional things to implement for this application.",
    dueDate: "2026-12-04",
    tasks: [
      "Delete project button with confirm prompt",
      "Validation for duplicate projects",
      "Validation for duplicate tasks",
      "Mobile adaptation",
      "Change order of tasks",
      "Edit project name and description",
    ],
  },
  {
    title: "Read books",
    description: "List of great fantasy books to read before 2028",
    dueDate: "2027-12-31",
    tasks: [
      "Dungeon Crawler Carl - Matt Dinniman",
      "Rhythm of War - Brandon Sanderson",
      "Empire of the Vampire - Jay Kristoff",
      "Sunlit Man - Brandon Sanderson",
    ],
  },
]

const STORAGE_KEY = "projects"

export function getProjects() {
  const saved = localStorage.getItem(STORAGE_KEY)

  if (saved !== null) {
    return JSON.parse(saved)
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialDatabase))

  return initialDatabase
}

function saveProjects(projects) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects))

  return projects
}

export function addProject(project) {
  const projects = getProjects()

  return saveProjects([...projects, project])
}

export function removeProject(title) {
  const projects = getProjects()

  return saveProjects(projects.filter((project) => project.title !== title))
}

export function addTask(title, task) {
  const projects = getProjects()

  const result = projects.find((item) => item.title === title)
  if (result.tasks.includes(task)) return projects

  return saveProjects(
    projects.map((project) =>
      project.title === title
        ? { ...project, tasks: [...project.tasks, task] }
        : project,
    ),
  )
}

export function removeTask(title, task) {
  const projects = getProjects()

  return saveProjects(
    projects.map((project) =>
      project.title === title
        ? {
            ...project,
            tasks: project.tasks.filter((t) => t !== task),
          }
        : project,
    ),
  )
}
