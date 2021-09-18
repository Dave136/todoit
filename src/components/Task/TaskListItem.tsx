import React from 'react';
import { IoTrashBinOutline } from 'react-icons/io5';

import useStore from '../../store';
import type { Task } from '../../store';

type Props = {
  task: Task;
  editTask: Function;
};

export default function TaskListItem({ task, editTask }: Props): JSX.Element {
  const { toggleComplete, removeTask } = useStore();

  return (
    <li
      className="bg-cool-gray-700 bg-opacity-30 border-transparent shadow-lg group rounded-lg block p-4 border"
      onDoubleClick={() => editTask(task.id, task.title)}
    >
      <dl className="flex">
        <div>
          <dt className="sr-only">checkbox</dt>
          <dd className="mr-3">
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleComplete(task.id)}
              className={`form-checkbox bg-transparent border border-cool-gray-500 rounded-sm ${
                task.done && 'checked'
              }`}
            />
          </dd>
        </div>
        <div className="flex-grow">
          <dt className="sr-only">Title</dt>
          <dd>
            <span
              className={`leading-6 font-medium ${
                task.done
                  ? 'text-gray-500 line-through'
                  : 'group-hover:text-white text-white'
              }`}
            >
              {task.title}
            </span>
          </dd>
        </div>
        <div className="self-center">
          <dt className="sr-only">Delete task</dt>
          <dd>
            <IoTrashBinOutline
              className="text-white text-opacity-30 cursor-pointer hover:text-red-500"
              size="1.2rem"
              onClick={() => removeTask(task.id)}
            />
          </dd>
        </div>
      </dl>
    </li>
  );
}
