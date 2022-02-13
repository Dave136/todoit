import React from 'react';

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function Wrapper({ children }: Props): JSX.Element {
  return (
    <div className="bg-black bg-opacity-95 h-screen min-h-screen">
      <section className="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4 max-w-xl mx-auto">
        {children}
      </section>
    </div>
  );
}
