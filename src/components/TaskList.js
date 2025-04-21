import React from "react";
import Task from "./Task";

function TaskList({ tasks, selectedCategory, onDelete }) {


  const taskList = tasks.map((task, index) => (
    <Task onDelete={onDelete} key={index} text={task.text} category={task.category} />
  ))

  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
