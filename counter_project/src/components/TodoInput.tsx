import { useState } from "react";

interface TodoInputProps {
  onAddTask: (task: string) => void;
}

const TodoInput = ({ onAddTask }: TodoInputProps) => {
  const [input, setInput] = useState<string>("");

  const handleSubmit = () => {
    console.log("Form Submitted");
    onAddTask(input);
  };

  return (
    <div className="flex gap-7">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border-2 rounded p-0.5 text-2xl font-bold"
      />

      <button
        onClick={handleSubmit}
        className="border-2 font-bold p-2 rounded-2xl hover:text-white hover:bg-black hover:border-b-white text-2xl transition duration-200"
      >
        Add Task
      </button>
    </div>
  );
};

export default TodoInput;
