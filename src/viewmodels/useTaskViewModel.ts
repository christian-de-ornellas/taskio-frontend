import { useQuery, useQueryClient } from '@tanstack/react-query';
import { taskService } from '@/models/taskService';
import { TSTATUS } from '@/models/task';
import { ITask } from '@/models/task'; // <- Certifique-se que o tipo está aqui

export function useTaskViewModel(status: TSTATUS) {
  const queryKey = 'tasks';
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery<ITask[]>({
    queryKey: [queryKey, status],
    queryFn: () => taskService.getByStatus(status),
  });

  return {
    tasks: data,
    isLoading,
    isError,
    queryClient,
  };
}
