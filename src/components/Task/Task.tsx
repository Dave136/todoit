import React, { useState } from 'react';

import useStore from '../../store';
import TaskCreate from './TaskCreate';
import Button from '../common/Button';
import { TaskList, TaskListItem } from '.';
import { Header, Wrapper } from '../common';

export default function Task() {
  const [isCreating, setIsCreating] = useState(false);
  const { tasks } = useStore();

  return (
    <Wrapper>
      <Header title="TodoIt" />
      <TaskList>
        {isCreating && <TaskCreate setIsCreating={setIsCreating} />}

        {!tasks.length && !isCreating && (
          <p className="text-white text-opacity-40 text-center">
            There is not a tasks yet
          </p>
        )}

        {tasks.length &&
          tasks.map((task) => <TaskListItem task={task} key={task.id} />)}
      </TaskList>
      <Button onClick={() => setIsCreating(true)} />
    </Wrapper>
  );
}
