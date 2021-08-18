import React, { useState } from 'react';
import TaskList from './components/TaskList';
import useStore from './store';

export default function Task() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const { addTask, tasks } = useStore()

  const reset = () => {
    setTitle('')
    setDescription('')
  }

  return (
    <div>
      <h2>TodoIt - Tasks</h2>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea cols={30} rows={10} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      <button onClick={() => {
        addTask(title, description)
        reset()
      }}>Add task</button>
      <TaskList tasks={tasks} />
    </div>
  );
}
