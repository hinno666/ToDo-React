import { useState } from "react"
import { BiPlus } from 'react-icons/bi'

const TodoInput = ({ todos, setTodos }) => {
    const [todo, setTodo] = useState('')

    const randomId = function (length = 6) {
        return Math.random().toString(36).substring(2, length + 2);
    };

    const createTodo = (e) => {
        e.preventDefault()

        if (todo === '') return

        const newTodo = {
            id: randomId(),
            text: todo
        }

        const newTodos = [newTodo, ...todos];
        setTodos(newTodos);
        setTodo('');
    }

    return (
        <form className="todo-input" onSubmit={createTodo}>
            <input className="task-input" type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button type="submit" className="btn"><BiPlus /></button>
        </form>
    );
}

export default TodoInput;