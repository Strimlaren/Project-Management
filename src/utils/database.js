const initialDatabase = [
  {
    title: "Get Stronger",
    description:
      "Get stronger in the gym and be able to lift cars well above my head.",
    dueDate: "2027-01-12",
    tasks: [
      "Benchpress: 100kg",
      "Squats: 160kg",
      "Deadlift: 200kg",
      "Biceps Curl: 30kg",
    ],
  },
  {
    title: "Get Faster",
    description: "Get fast as fuck so I can beat the Flash in a 100m race.",
    dueDate: "2027-01-12",
    tasks: [
      "Running: 10km in 12sec",
      "Swimming: 1km in 1 min",
      "Cycling: 200km in 3min",
      "Counting to 1,000,000 in 100ms",
    ],
  },
];

const STORAGE_KEY = "projects";

export function getProjects() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (saved !== null) {
    return JSON.parse(saved);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialDatabase));

  return initialDatabase;
}

function saveProjects(projects) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));

  return projects;
}

// Add a project
export function addProject(project) {
  const projects = getProjects();

  return saveProjects([...projects, project]);
}

// Remove a project by title
export function removeProject(title) {
  const projects = getProjects();

  return saveProjects(projects.filter((project) => project.title !== title));
}

// Add a task to a project
export function addTask(title, task) {
  const projects = getProjects();

  return saveProjects(
    projects.map((project) =>
      project.title === title
        ? { ...project, tasks: [...project.tasks, task] }
        : project,
    ),
  );
}

// Remove a task from a project
export function removeTask(title, task) {
  const projects = getProjects();

  return saveProjects(
    projects.map((project) =>
      project.title === title
        ? {
            ...project,
            tasks: project.tasks.filter((t) => t !== task),
          }
        : project,
    ),
  );
}
