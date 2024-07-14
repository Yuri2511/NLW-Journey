const activity = {
  name: "Lunch",
  date: new Date("2024-07-08T10:00:00"),
  completed: false,
};

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
section.innerHTML = createActivityItem(activity);
