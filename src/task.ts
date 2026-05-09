export interface Task {
  id: number;
  title: string;
  done: boolean;
  createdAt: string;
}

let nextId = 1;
const store: Task[] = [];

export function addTask(title: string): Task {
  const t: Task = {
    id: nextId++,
    title,
    done: false,
    createdAt: new Date().toISOString(),
  };
  store.push(t);
  return t;
}

export function listTasks(): Task[] {
  return [...store];
}

export function completeTask(tasks: Task[], id: number): Task[] {
  return tasks.map(t => (t.id === id ? { ...t, done: true } : t));
}

export function tasksByStatus(tasks: Task[]): { pending: Task[]; done: Task[] } {
  const pending: Task[] = [];
  const done: Task[] = [];
  for (const t of tasks) {
    if (t.done) done.push(t);
    else pending.push(t);
  }
  return { pending, done };
}

export function nextPendingTask(tasks: Task[]): Task | null {
  if (tasks.length === 0) return null;
  return tasks[0] ?? null;
}
