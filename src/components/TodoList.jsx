import { useState, useEffect } from 'react';


const TodoList = () => {

    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState("");


    const addTodo = () => {
      setTodo(prev => [...prev, input]);
      setInput("");
    };

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Enter a todo"
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todo.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;