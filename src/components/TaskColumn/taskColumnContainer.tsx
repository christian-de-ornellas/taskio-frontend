import React from 'react';

interface ITaskCardContainerProps {
  children: React.ReactNode;
}

const TaskColumnContainer = ({ children }: ITaskCardContainerProps): React.JSX.Element => (
  <section className="bg-gray-900 w-96 rounded-lg flex flex-col h-full px-4">{children}</section>
);

export default TaskColumnContainer;
