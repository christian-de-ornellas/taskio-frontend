import axios from 'axios';
import { ITask, TSTATUS } from './task';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const api = axios.create({ baseURL: apiUrl });
const pathname = 'tasks';

export const taskService = {
  getByStatus: (status: TSTATUS) =>
    api.get<ITask[]>(`/${pathname}?status=${status}`).then((res) => res.data),
  create: (data: Omit<ITask, 'id' | 'created_at'>) =>
    api.post(`/${pathname}`, data).then((res) => res.data),
  update: (id: string, data: Omit<ITask, 'id'>) =>
    api.patch(`${pathname}${id}/status`, data).then((res) => res.data),
};
