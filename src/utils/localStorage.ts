import type { Task } from '../store';

interface Storage {
  getItem: (key: string) => Task[];
  save: (key: string, data: Task[]) => void;
  remove: (key: string) => void;
}

const storage: Storage = {
  getItem: (key: string) => {
    const item = localStorage?.getItem(key) ?? '[]';

    return JSON.parse(item);
  },
  save: (key: string, data: Task[]) => {
    localStorage.setItem(key, JSON.stringify(data));
  },
  remove: (key: string) => {
    localStorage.removeItem(key);
  },
};

export default storage;
