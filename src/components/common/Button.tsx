import React from 'react';
import { IoAdd } from 'react-icons/io5';

type Props = {
  onClick: React.MouseEventHandler;
};

export default function Button(props: Props): JSX.Element {
  return (
    <div className="flex rounded-lg justify-center">
      <button
        {...props}
        className="flex items-center justify-center rounded-full border-2 text-sm font-medium p-4 text-white bg-yellow-500 border-none transition duration-200 hover:bg-yellow-600"
      >
        <IoAdd size="1.4rem" />
      </button>
    </div>
  );
}
