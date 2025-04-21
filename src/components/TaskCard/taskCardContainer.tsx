import React from 'react';

interface ITaskCardContainerProps {
  children: React.ReactNode;
}

const TaskCardContainer = ({ children }: ITaskCardContainerProps): React.JSX.Element => (
  <div className="flex flex-col gap-2 overflow-y-auto h-full pb-4">{children}</div>
);

export default TaskCardContainer;
