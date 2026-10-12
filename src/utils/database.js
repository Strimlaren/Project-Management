export let database = [
  {
    title: "Get Stronger",
    description:
      "Get stronger in the gym and be able to lift cars well above my head.",
    dueDate: "2027-01-12",
    tasks: [
      "Benchpress: 100",
      "Squats 160",
      "Deadlift 200",
      "Biceps Curl 30kg",
    ],
  },
  {
    title: "Get Faster",
    description:
      "Get stronger in the gym and be able to lift cars well above my head.",
    dueDate: "2027-01-12",
    tasks: [
      "Benchpress: 100",
      "Squats 160",
      "Deadlift 200",
      "Biceps Curl 30kg",
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
