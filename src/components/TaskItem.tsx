import React from 'react';
import useStore from '../store';
import type { Task } from '../store';

type Props = {
  task: Task;
};

export default function TaskItem({ task }: Props) {
  const { removeTask, toggleComplete } = useStore();
  return (
    <li>
      <h3>{task.title} | <button onClick={() => removeTask(task.id)}>&times;</button></h3>
      <p>{task.description}</p>
      <div>status: {task.done ? "complete": "uncomplete"}</div>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => toggleComplete(task.id)}
      />
    </li>
  );
}
