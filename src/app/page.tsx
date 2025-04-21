'use client';

import { useTaskViewModel } from '@/viewmodels/useTaskViewModel';
import { ITask } from '@/models/task';

export default function Page() {
  const TODO = useTaskViewModel('BACKLOG');
  const DOING = useTaskViewModel('DOING');
  const DONE = useTaskViewModel('DONE');

  return (
    <div className="flex gap-x-10">
      <section className="bg-purple-900 w-96 rounded-lg flex flex-col h-full px-4">
        <header className="py-2 shrink-0">
          <h2 className="text-gray-50">Todo</h2>
        </header>

        <div className="flex flex-col gap-2 overflow-y-auto h-full pb-4">
          {TODO.tasks?.map((task: ITask) => (
            <article key={task.id} className="bg-gray-100 rounded-lg p-2">
              <h4>{task.title}</h4>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-purple-900 w-96 rounded-lg flex flex-col h-full px-4">
        <header className="py-2 shrink-0">
          <h2 className="text-gray-50">Doing</h2>
        </header>

        <div className="flex flex-col gap-2 overflow-y-auto h-full pb-4">
          {DOING.tasks?.map((task: ITask) => (
            <article key={task.id} className="bg-gray-100 rounded-lg p-2">
              <h4>{task.title}</h4>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-purple-900 w-96 rounded-lg flex flex-col h-full px-4">
        <header className="py-2 shrink-0">
          <h2 className="text-gray-50">Done</h2>
        </header>

        <div className="flex flex-col gap-2 overflow-y-auto h-full pb-4">
          {DONE.tasks?.map((task: ITask) => (
            <article key={task.id} className="bg-gray-100 rounded-lg p-2">
              <h4>{task.title}</h4>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
