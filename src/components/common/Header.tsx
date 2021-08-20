import React from 'react';

type Props = {
  title: string;
};

export default function Header({ title }: Props): JSX.Element {
  return (
    <header className="flex items-center justify-between text-white">
      <h2 className="text-lg leading-6 font-medium text-white">{title}</h2>
    </header>
  );
}
