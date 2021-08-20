import React from 'react';

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function TaskList({ children }: Props): JSX.Element {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4">
      {children}
    </ul>
  );
}
