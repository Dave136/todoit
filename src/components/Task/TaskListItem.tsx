import React from 'react';
import useStore from '../../store';
import type { Task } from '../../store';

type Props = {
  task: Task;
};

export default function TaskListItem({ task }: Props): JSX.Element {
  const { toggleComplete } = useStore();

  return (
    <li className="bg-cool-gray-700 bg-opacity-30 border-transparent shadow-lg group rounded-lg block p-4 border">
      <dl className="flex">
        <div>
          <dt className="sr-only">checkbox</dt>
          <dd className="mr-3">
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleComplete(task.id)}
              className="form-checkbox bg-transparent border border-cool-gray-500 rounded-sm"
            />
          </dd>
        </div>
        <div>
          <dt className="sr-only">Title</dt>
          <dd
            className={`leading-6 font-medium ${
              task.done
                ? 'line-through text-opacity-40 text-gray-500'
                : 'group-hover:text-white text-white'
            }`}
          >
            {task.title}
          </dd>
        </div>
      </dl>
    </li>
  );
}
