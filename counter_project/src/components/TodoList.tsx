import type { Todo } from "../types/todo";

interface TodoListProps {
    tasks : Todo[];
}


const TodoList = ({tasks}: TodoListProps) => {
  return (
    <div className="flex gap-7 border ">
        <ul>
            {
                tasks.map( (task) => (
                    <section key={task.id}>
                        <li>{task.task}</li>
                        <li>{task.completed}</li>
                    </section>
                ) )
            }
        </ul>
    </div>
  );
};

export default TodoList;