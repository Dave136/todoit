import React from 'react';
import { IoList } from 'react-icons/io5';

type Props = {
  title: string;
};

export default function Header({ title }: Props) {
  return (
    <div className="mb-10">
      <h1 className="text-3xl font-bold text-cool-gray-700 text-center">
        <IoList className="inline-block" /> {title}
      </h1>
    </div>
  );
}
