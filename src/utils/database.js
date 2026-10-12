export let database = [
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

export function add(item) {
  database.push(item);
}

export function remove(title) {
  const newDatabase = database.filter((item) => item.title !== title);
  database = newDatabase;
}
