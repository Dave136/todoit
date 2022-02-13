import create from 'zustand';
import { v4 as uuid } from 'uuid';
import storage from '../utils/localStorage';

export type Task = {
  id: string;
  title: string;
  done: boolean;
};

export type TaskState = {
  tasks: Task[];
  addTask: (title: string) => void;
  updateTask: (id: string, title?: string) => void;
  removeTask: (id: string) => void;
  toggleComplete: (id: string) => void;
};

const useStore = create<TaskState>((set) => ({
  tasks: storage.getItem('tasks') || [],
  addTask: (title: string) =>
    set((state) => {
      const updateState = {
        tasks: [
          ...state.tasks,
          {
            id: uuid(),
            title,
            done: false,
          } as Task,
        ],
      };

      storage.save('tasks', updateState.tasks);

      return updateState;
    }),
  updateTask: (id: string, title?: string) =>
    set((state) => {
      const updateState = {
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, title: title || task.title } : task
        ),
      };

      storage.save('tasks', updateState.tasks);

      return updateState;
    }),
  removeTask: (id: string) =>
    set((state) => {
      const updateState = {
        tasks: state.tasks.filter((task) => task.id !== id),
      };

      storage.save('tasks', updateState.tasks);

      return updateState;
    }),
  toggleComplete: (id) =>
    set((state) => {
      const updateState = {
        tasks: state.tasks.map((task) =>
          task.id === id ? ({ ...task, done: !task.done } as Task) : task
        ),
      };

      storage.save('tasks', updateState.tasks);

      return updateState;
    }),
}));

export default useStore;
