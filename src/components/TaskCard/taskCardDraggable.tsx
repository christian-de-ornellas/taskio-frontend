import { useDraggable } from '@dnd-kit/core';
import { TSTATUS } from '@/models/task';

export function TaskCardDraggable({
  id,
  title,
  status,
}: {
  id: string;
  title: string;
  status: TSTATUS;
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data: { status },
  });

  const style = {
    transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
  };

  const colors: Record<TSTATUS, string> = {
    BACKLOG: 'bg-gray-700',
    DOING: 'bg-teal-900',
    DONE: 'bg-teal-600',
    TRASH: 'bg-pink-700',
  };

  return (
    <article
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`p-2 ${colors[status] ?? 'bg-white'} rounded shadow hover:cursor-move text-white`}
    >
      {title}
    </article>
  );
}
