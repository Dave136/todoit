import React from 'react';

type Task = {
  id: string;
  title: string;
  description: string;
  done: boolean;
};

const tasks: Task[] = [
  {
    id: 'aaa-bbb-ccc',
    title: 'Make the design from figma template',
    description: 'Is nedded to have a desing of new site',
    done: false,
  },
];

export default function Task() {
  const handleChange = () => {};

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <div>
            <input type="checkbox" onChange={handleChange} />
          </div>
        </li>
      ))}
    </ul>
  );
}
