import create from 'zustand';
import { v4 as uuid } from 'uuid';

export type Task = {
  id: string;
  title: string;
  description: string;
  done: boolean;
};

export type TaskState = {
  tasks: Task[];
  addTask: (title: string, description?: string) => void;
  removeTask: (id: string) => void;
  toggleComplete: (id: string) => void;
};

const useStore = create<TaskState>((set) => ({
  tasks: [],
  addTask: (title: string, description?: string) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          id: uuid(),
          title,
          description,
          done: false,
        } as Task,
      ],
    })),
  removeTask: (id: string) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
  toggleComplete: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? ({ ...task, done: !task.done } as Task) : task
      ),
    })),
}));

export default useStore;
