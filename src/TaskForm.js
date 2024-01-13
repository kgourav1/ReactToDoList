import React, { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [taskName, setTaskName] = useState("");
  const handleSubmit = (ev) => {
    ev.preventDefault();
    onAdd(taskName);
    setTaskName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <button>+</button>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="New Task"
      />
    </form>
  );
};

export default TaskForm;
