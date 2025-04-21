import React from 'react';

interface ITaskCardHeaderProps {
  title: string;
}

const TaskColumnHeader = ({ title }: ITaskCardHeaderProps): React.JSX.Element => (
  <header className="py-2 shrink-0">
    <h2 className="text-gray-50">{title}</h2>
  </header>
);

export default TaskColumnHeader;
