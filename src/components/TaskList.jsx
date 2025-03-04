import AddTask from "./AddTask";
import TaskItem from "./TaskItem";
import { useState } from "react";

const tasks = [
  {
    id: 1,
    name: "Task 1",
    description: "Task 1 Description",
    completed: true,
  },
  {
    id: 2,
    name: "Task 2",
    description: "Task 2 Description",
    completed: true,
  },
  {
    id: 3,
    name: "Task 3",
    description: "Task 3 Description",
    completed: false,
  },
];

function TaskList() {
  const [todos, setTodos] = useState(tasks);

  return (
    <div>
      <AddTask setTodos={setTodos} />
      <h1>Tasks</h1>
      <div className="task-list">
        {todos.length > 0 ? (
          todos.map((task, idx) => (
            //   <div key={idx}>{task}</div>
            <TaskItem key={idx} task={task} toggleChecked={setTodos} />
          ))
        ) : (
          <div>No tasks</div>
        )}
      </div>
    </div>
  );
}

export default TaskList;
