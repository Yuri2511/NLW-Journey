const activity = {
  name: "Lunch",
  date: new Date("2024-07-08T10:00:00"),
  completed: true,
};

const activities = [
  activity,
  {
    name: 'Group Workout',
    date: new Date("2024-07-09T12:00:00"),
    completed: false
  },
  {
    name: 'Gaming session',
    date: new Date("2024-07-09T19:00:00"),
    completed: true
  }
];

const createActivityItem = (activity) => {
  let input = '<input type="checkbox" ';

  if (activity.completed) {
    input += 'checked';
  }

  input += '>';

  return `
  <div>
    ${input}
    <span>${activity.name}</span>
    <time>${activity.date.toLocaleString()}</time>
  </div>`;
};

const section = document.querySelector('section');
let content = '';

for (let activity of activities) {
  content += createActivityItem(activity);
}

section.innerHTML = content;
