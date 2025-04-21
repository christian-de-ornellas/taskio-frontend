import React from 'react';

interface ITaskCardHeaderProps {
  title: string;
}

const TaskCardTitle = ({ title }: ITaskCardHeaderProps): React.JSX.Element => (
  <article className="bg-gray-100 rounded-lg p-2">
    <h4 className="text-purple-900">{title}</h4>
  </article>
);

export default TaskCardTitle;
