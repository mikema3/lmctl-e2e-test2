import { describe, it, expect } from 'vitest';
import { completeTask, tasksByStatus, type Task } from '../src/task.js';

const sample: Task[] = [
  { id: 1, title: 'Email John', done: true,  createdAt: '2026-05-01T08:00:00Z' },
  { id: 2, title: 'Pay rent',   done: false, createdAt: '2026-05-02T09:00:00Z' },
  { id: 3, title: 'Call vet',   done: false, createdAt: '2026-05-03T10:00:00Z' },
];

describe('completeTask', () => {
  it('marks the matching task done', () => {
    const out = completeTask(sample, 2);
    expect(out.find(t => t.id === 2)?.done).toBe(true);
  });

  it('leaves other tasks unchanged', () => {
    const out = completeTask(sample, 2);
    expect(out.find(t => t.id === 3)?.done).toBe(false);
    expect(out.find(t => t.id === 1)?.done).toBe(true);
  });

  it('is a no-op when the id is unknown', () => {
    expect(completeTask(sample, 999)).toEqual(sample);
  });
});

describe('tasksByStatus', () => {
  it('partitions correctly', () => {
    const { pending, done } = tasksByStatus(sample);
    expect(pending.map(t => t.id)).toEqual([2, 3]);
    expect(done.map(t => t.id)).toEqual([1]);
  });

  it('handles empty input', () => {
    expect(tasksByStatus([])).toEqual({ pending: [], done: [] });
  });
});
