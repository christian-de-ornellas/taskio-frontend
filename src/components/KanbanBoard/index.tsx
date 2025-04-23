'use client';

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import { ITask, TSTATUS } from '@/models/task';
import TaskCard from '@/components/TaskCard';
import TaskColumn from '@/components/TaskColumn';
import NewTask from '@/components/NewTask';
import { useTaskViewModel } from '@/viewmodels/useTaskViewModel';
import { Loading } from '@/components/Loading';

type Props = {
  columns: TSTATUS[];
  viewModels: Record<TSTATUS, ReturnType<typeof useTaskViewModel>>;
};

export default function KanbanBoard({ columns, viewModels }: Props) {
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    const sourceStatus = active.data.current?.status as TSTATUS;
    const destinationStatus = over?.id as TSTATUS;

    if (sourceStatus !== destinationStatus) {
      const draggedTaskId = active.id as string;
      viewModels[sourceStatus].onDropTask(draggedTaskId, destinationStatus);
    }
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="flex gap-x-10">
        {columns.map((status) => {
          const { tasks, isLoading } = viewModels[status];
          return (
            <TaskColumn.Container key={status}>
              <TaskColumn.Header title={status} />
              <TaskColumn.Droppable id={status}>
                {isLoading && <Loading />}
                {tasks?.map((task) => (
                  <TaskCard.Draggable
                    key={task.id}
                    id={task.id}
                    status={status}
                    title={task.title}
                  />
                ))}
                <NewTask status={status} />
              </TaskColumn.Droppable>
            </TaskColumn.Container>
          );
        })}
      </div>
    </DndContext>
  );
}
