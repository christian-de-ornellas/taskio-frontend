'use client';

import { useTaskViewModel } from '@/viewmodels/useTaskViewModel';
import { ITask, TSTATUS } from '@/models/task';
import TaskCard from '@/components/TaskCard';
import TaskColumn from '@/components/TaskColumn';

export default function Page() {
  const statusLabels: Record<TSTATUS, string> = {
    BACKLOG: 'Backlog',
    DOING: 'Doing',
    DONE: 'Done',
  };

  const statuses: TSTATUS[] = ['BACKLOG', 'DOING', 'DONE'];

  const viewModels = {
    BACKLOG: useTaskViewModel('BACKLOG'),
    DOING: useTaskViewModel('DOING'),
    DONE: useTaskViewModel('DONE'),
  };

  return (
    <div className="flex gap-x-10">
      {statuses.map((status) => {
        const { tasks } = viewModels[status];
        return (
          <TaskColumn.Container key={status}>
            <TaskColumn.Header title={statusLabels[status]} />
            <TaskCard.Container>
              {tasks?.map((task: ITask) => <TaskCard.Title key={task.id} title={task.title} />)}
            </TaskCard.Container>
          </TaskColumn.Container>
        );
      })}
    </div>
  );
}
