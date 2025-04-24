'use client';

import { useTaskViewModel } from '@/viewmodels/useTaskViewModel';
import { TSTATUS } from '@/models/task';
import KanbanBoard from '@/components/KanbanBoard';

export default function TasksView() {
  const statuses: TSTATUS[] = ['BACKLOG', 'DOING', 'DONE', 'TRASH'];

  const viewModels = {
    BACKLOG: useTaskViewModel('BACKLOG'),
    DOING: useTaskViewModel('DOING'),
    DONE: useTaskViewModel('DONE'),
    TRASH: useTaskViewModel('TRASH'),
  };

  return (
    <div className="flex gap-x-10">
      <KanbanBoard viewModels={viewModels} columns={statuses} />;
    </div>
  );
}
