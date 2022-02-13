import React, { useState } from 'react';
import { IoCreateOutline } from 'react-icons/io5';

import useStore from '../../store';
import TaskCreate from './TaskCreate';
import Button from '../common/Button';
import { TaskList, TaskListItem } from '.';
import { Header, Wrapper } from '../common';
import TaskSeparator from './TaskSeparator';
import TaskUpdate from './TaskUpdate';

type EditTask = {
  id: string;
  title: string;
};

export default function Task() {
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [editingTask, setEditingTask] = useState<EditTask | null>(null);
  const { tasks } = useStore();

  const onEditTask = (id: string, title: string) => {
    setEditingTask({ id, title });
    setIsUpdating(true);
  };

  const completedTask = tasks.filter(({ done }) => done);

  const completedTaskList = () =>
    tasks.map(
      (task) =>
        task.done && (
          <TaskListItem editTask={onEditTask} task={task} key={task.id} />
        )
    );

  const uncompletedTaskList = () =>
    tasks.map(
      (task) =>
        !task.done && (
          <TaskListItem editTask={onEditTask} task={task} key={task.id} />
        )
    );

  return (
    <Wrapper>
      <Header title="TodoIt" />
      <TaskList>
        <>
          {isCreating && <TaskCreate setIsCreating={setIsCreating} />}
          {isUpdating && (
            <TaskUpdate
              task={editingTask as EditTask}
              setIsUpdating={setIsUpdating}
            />
          )}
          {!tasks.length && !isCreating && (
            <div className="flex flex-col justify-center items-center mb-5">
              <IoCreateOutline
                size="3rem"
                className="text-white text-opacity-40"
              />
              <p className="text-white text-opacity-40 text-center mt-4">
                Not tasks here yet
              </p>
            </div>
          )}
          {tasks.length ? uncompletedTaskList() : null}

          {completedTask.length ? (
            <TaskSeparator completed={completedTask.length} />
          ) : null}

          {tasks.length ? completedTaskList() : null}
        </>
      </TaskList>
      <Button onClick={() => setIsCreating(true)} />
    </Wrapper>
  );
}
