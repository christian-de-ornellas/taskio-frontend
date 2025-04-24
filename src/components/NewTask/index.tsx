'use client';

import { useTaskViewModel } from '@/viewmodels/useTaskViewModel';
import { TSTATUS } from '@/models/task';

type NewTaskProps = {
  status: TSTATUS;
};

const NewTask = ({ status }: NewTaskProps) => {
  const { newTask, setNewTask, title, setTitle, inputRef, register, handleKeyDown } =
    useTaskViewModel(status);

  return newTask ? (
    <input
      {...register('title')}
      ref={inputRef}
      autoFocus
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      onKeyDown={handleKeyDown}
      className="appearance-none text-white placeholder:text-cyan-600 focus:border-cyan-600
      focus:border-b w-full p-2 focus:outline-none focus:shadow-outline"
      placeholder="Write a task..."
      title="Aperte as teclas Enter para confirmar os ESC para cancelar"
    />
  ) : (
    <button
      className="hover:bg-cyan-600 hover:text-cyan-100 hover:cursor-pointer
      font-semibold text-white rounded-lg p-2 text-left transition"
      onClick={() => setNewTask(true)}
    >
      + Add a card
    </button>
  );
};

export default NewTask;
