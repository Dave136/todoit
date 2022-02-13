import React from 'react';
import { IoChevronDown } from 'react-icons/io5';

type Props = {
  completed: number;
};

export default function TaskSeparator({ completed }: Props): JSX.Element {
  return (
    <li className="flex ml-4">
      <button
        type="button"
        className="flex items-center justify-center rounded-full border-2 text-sm font-medium p-1 text-white border-none"
      >
        <IoChevronDown size="1rem" />
      </button>
      <p className="text-white text-opacity-80 text-sm ml-3">
        Completed {completed}
      </p>
    </li>
  );
}
