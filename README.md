# tinytodo

A tiny in-memory task tracker library: add tasks, complete them, and
query what's still pending. No storage, no UI — just functions over a
`Task[]`.

## Use

```ts
import { addTask, completeTask, nextPendingTask } from 'tinytodo';

addTask('Pay rent');
addTask('Call vet');
const next = nextPendingTask(listTasks());
```

## Develop

```bash
npm install
npm test
```

## Status

Early. API may change.
