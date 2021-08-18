import React from 'react';
import TaskItem from './TaskItem';
import type { Task } from '../store';

type Props = {
  tasks: Task[];
}

export default function TaskList({ tasks }: Props) {
  return (
    <ul>
      {!tasks.length && (
        <p>No exists tasks yet</p>
      )}
      {tasks.map((task) => (
        <TaskItem task={task} />
      ))}
    </ul>
  )
}