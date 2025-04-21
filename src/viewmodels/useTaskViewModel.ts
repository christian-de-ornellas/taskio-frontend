import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { taskService } from '@/models/taskService';
import { TSTATUS, ITask } from '@/models/task';

export function useTaskViewModel(status: TSTATUS) {
  const queryKey = 'tasks';
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery<ITask[]>({
    queryKey: [queryKey, status],
    queryFn: () => taskService.getByStatus(status),
  });

  const createTaskMutation = useMutation({
    mutationFn: (newTask: Omit<ITask, 'id'>) => taskService.create(newTask),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey, status] });
    },
  });

  return {
    tasks: data,
    isLoading,
    isError,
    createTask: createTaskMutation.mutate,
    createTaskAsync: createTaskMutation.mutateAsync,
    isCreating: createTaskMutation.isPending,
    queryClient,
  };
}
