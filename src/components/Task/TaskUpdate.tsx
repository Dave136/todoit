import React, { useEffect, useRef, useState } from 'react';
import useStore from '../../store';
import { fadeIn, fadeOut } from '../../utils/animation';

type Props = {
  task: {
    id: string;
    title: string;
  };
  setIsUpdating: Function;
};

export default function TaskUpdate({ task, ...props }: Props) {
  const [title, setTitle] = useState(task.title);
  const { updateTask } = useStore();
  let li = useRef(null);

  useEffect(() => {
    fadeIn(li);
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.currentTarget.value);

  const onClick = () => {
    updateTask(task.id, title);
    setTitle('');
    props.setIsUpdating(false);
  };

  const onCancel = () => {
    fadeOut(li, () => props.setIsUpdating(false));
  };

  return (
    <li
      ref={(el) => (li = el)}
      className="bg-cool-gray-700 bg-opacity-30 border-transparent shadow-lg group rounded-lg block p-4 border"
    >
      <dl className="flex flex-col">
        <div className="mb-4">
          <dt className="sr-only">form input</dt>
          <dd>
            <input
              type="text"
              className="form-input bg-transparent text-white focus:outline-none focus:shadow-none"
              placeholder={`Tap "enter" to create subtasks`}
              value={title}
              onChange={onChange}
            />
          </dd>
        </div>
        <div>
          <dt className="sr-only">Actions</dt>
          <dd className="flex justify-end items-end w-full">
            <button
              className="transition ease-out duration-500 text-white text-opacity-40 mr-2"
              onClick={onCancel}
            >
              cancel
            </button>
            <button
              className={`transition ease-out duration-500 ${
                !title.length ? 'text-white text-opacity-40' : 'text-yellow-200'
              }`}
              onClick={onClick}
              disabled={!!!title.length}
            >
              done
            </button>
          </dd>
        </div>
      </dl>
    </li>
  );
}
