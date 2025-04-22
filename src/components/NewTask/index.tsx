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
      className="appearance-none text-purple-900 placeholder:text-purple-900 w-full
        focus:bg-purple-100 p-2 rounded-lg focus:outline-none focus:shadow-outline"
      placeholder="Write a task..."
    />
  ) : (
    <button
      className="hover:bg-purple-200 hover:text-purple-900 hover:cursor-pointer text-white rounded-lg p-2 text-left transition"
      onClick={() => setNewTask(true)}
    >
      + Add a card
    </button>
  );
};

export default NewTask;
