import { useState } from "react";
import TodoInput from "./components/TodoInput";
import type { Todo } from "./types/todo";
import TodoList from "./components/TodoList";

const App = () => {
  const [tasks, setTasks] = useState<Todo[]>([]);

  const handleAddTask = (task: string) => {
    setTasks((prev) => {
      return [
        ...prev,
        {
          id: prev.length + 1,
          task: task,
          completed: false,
        },
      ];
    });
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-10">
      <TodoInput onAddTask={handleAddTask} />
      <TodoList tasks = {tasks}/>
    </div>
  );
};

export default App;
