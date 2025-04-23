import { useDraggable } from '@dnd-kit/core';

export function TaskCardDraggable({
  id,
  title,
  status,
}: {
  id: string;
  title: string;
  status: string;
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data: { status },
  });

  const style = {
    transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
  };

  return (
    <article
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="p-2 bg-white rounded shadow hover:cursor-move"
    >
      {title}
    </article>
  );
}
