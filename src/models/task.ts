export type TSTATUS = 'BACKLOG' | 'DOING' | 'DONE' | 'TRASH';

export interface ITask {
  id: string;
  title: string;
  status: TSTATUS;
  created_at: Date;
}
