import React, { useState } from 'react';
import useStore from '../../store';

type Props = {
  setIsCreating: Function;
};

export default function TaskCreate(props: Props) {
  const [title, setTitle] = useState('');
  const { addTask } = useStore();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.currentTarget.value);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    addTask(title);
    setTitle('');
    props.setIsCreating(false);
  };

  return (
    <li className="bg-cool-gray-700 bg-opacity-30 border-transparent shadow-lg group rounded-lg block p-4 border">
      <dl className="flex flex-col">
        <div className="mb-4">
          <dt className="sr-only">form input</dt>
          <dd>
            <input
              type="text"
              className="form-input bg-transparent text-white focus:outline-none focus:shadow-none"
              placeholder={`Tap "enter" to create subtasks`}
              onChange={onChange}
            />
          </dd>
        </div>
        <div>
          <dt className="sr-only">Done button</dt>
          <dd className="flex justify-end items-end w-full">
            <button
              className={`transition ease-out duration-500 ${
                !title.length ? 'text-white text-opacity-40' : 'text-yellow-200'
              }`}
              onClick={onClick}
              disabled={!!!title.length}
            >
              Done
            </button>
          </dd>
        </div>
      </dl>
    </li>
  );
}
