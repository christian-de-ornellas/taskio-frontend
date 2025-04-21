import React from 'react';

interface ITaskCardHeaderProps {
  key: string;
  title: string;
}

const TaskCardTitle = ({ key, title }: ITaskCardHeaderProps): React.JSX.Element => (
  <article key={key} className="bg-gray-100 rounded-lg p-2">
    <h4>{title}</h4>
  </article>
);

export default TaskCardTitle;
