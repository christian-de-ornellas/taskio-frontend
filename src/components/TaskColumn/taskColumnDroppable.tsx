import { useDroppable } from '@dnd-kit/core';

export function TaskColumnDroppable({ id, children }: { id: string; children: React.ReactNode }) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div ref={setNodeRef} className="flex flex-col gap-2 min-h-[200px]">
      {children}
    </div>
  );
}
