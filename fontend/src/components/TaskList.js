import React from "react";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>
          {task.title}
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button onClick={() => deleteTask(task._id)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
