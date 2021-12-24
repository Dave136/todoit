import React, { useState } from 'react';
import { IoCreateOutline } from 'react-icons/io5';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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

  const completedTaskList = () => (
    <TransitionGroup>
      {tasks.map(
        (task) =>
          task.done && (
            <CSSTransition
              in={task.done}
              classNames="el"
              unmountOnExit
              timeout={350}
              appear
              key={task.id}
            >
              <TaskListItem editTask={onEditTask} task={task} key={task.id} />
            </CSSTransition>
          )
      )}
    </TransitionGroup>
  );

  const uncompletedTaskList = () => (
    <TransitionGroup>
      {tasks.map(
        (task) =>
          !task.done && (
            <CSSTransition
              in={!task.done}
              classNames="el"
              unmountOnExit
              timeout={350}
              appear
            >
              <TaskListItem editTask={onEditTask} task={task} key={task.id} />
            </CSSTransition>
          )
      )}
    </TransitionGroup>
  );

  return (
    <Wrapper>
      <Header title="TodoIt" />
      <TaskList>
        <>
          {isCreating && (
            <CSSTransition
              in={isCreating}
              classNames="el"
              unmountOnExit
              timeout={350}
              appear
            >
              <TaskCreate setIsCreating={setIsCreating} />
            </CSSTransition>
          )}
          {isUpdating && (
            <CSSTransition
              in={isUpdating}
              classNames="el"
              unmountOnExit
              timeout={450}
              appear
            >
              <TaskUpdate
                task={editingTask as EditTask}
                setIsUpdating={setIsUpdating}
              />
            </CSSTransition>
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
