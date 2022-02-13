import React, { useEffect, useRef } from 'react';
import { IoTrash } from 'react-icons/io5';

import useStore from '../../store';
import { fadeIn, fadeOut } from '../../utils/animation';
import type { Task } from '../../store';

type Props = {
  task: Task;
  editTask: Function;
};

export default function TaskListItem({ task, editTask }: Props): JSX.Element {
  const { toggleComplete, removeTask } = useStore();
  let li = useRef(null);

  useEffect(() => {
    fadeIn(li);
  }, []);

  return (
    <li
      className="bg-cool-gray-700 bg-opacity-30 border-transparent shadow-lg group rounded-lg block p-4 border w-full"
      onDoubleClick={() => editTask(task.id, task.title)}
      ref={(el) => (li = el)}
    >
      <dl className="flex w-full">
        <div className="">
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
        <div className="block w-full overflow-hidden">
          <dt className="sr-only">Title</dt>
          <dd
            className={`truncate ${task.done ? 'text-gray-500' : 'text-white'}`}
          >
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
        <div className="">
          <dt className="sr-only">Delete task</dt>
          <dd>
            <IoTrash
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
