import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { taskService } from '@/models/taskService';
import { TSTATUS, ITask } from '@/models/task';
import { useForm } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';

export function useTaskViewModel(status: TSTATUS) {
  const queryKey = 'tasks';
  const queryClient = useQueryClient();
  const { register, handleSubmit } = useForm();
  const [newTask, setNewTask] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const { data, isLoading, isError } = useQuery<ITask[]>({
    queryKey: [queryKey, status],
    queryFn: () => taskService.getByStatus(status),
  });

  const createTaskMutation = useMutation({
    mutationFn: (newTask: Omit<ITask, 'id' | 'created_at' | 'status'>) =>
      taskService.create({ ...newTask, status }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey, status] });
    },
  });

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setNewTask(false);
      }
    }
    if (newTask) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [newTask, setNewTask]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && title.trim()) {
      createTaskMutation.mutate({ title });
      setNewTask(false);
      setTitle('');
    }
    if (e.key === 'Escape') {
      setNewTask(false);
      setTitle('');
    }
  };

  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: TSTATUS }) =>
      taskService.updateStatus(id, { status }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
  });

  const onDropTask = (taskId: string, newStatus: TSTATUS) => {
    updateStatusMutation.mutate({ id: taskId, status: newStatus });
  };

  return {
    tasks: data,
    isLoading,
    isError,
    handleKeyDown,
    inputRef,
    isCreating: createTaskMutation.isPending,
    queryClient,
    handleSubmit,
    register,
    newTask,
    setNewTask,
    title,
    setTitle,
    createTaskMutation,
    onDropTask,
  };
}
