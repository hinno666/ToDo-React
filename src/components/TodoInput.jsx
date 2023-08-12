import { useState } from "react"
import { BiPlus } from 'react-icons/bi'

const TodoInput = ({ todos, setTodos }) => {
    const [todo, setTodo] = useState('')

    const randomId = Date.now();

    const createTodo = (e) => {
        e.preventDefault()

        if (todo === '') return

        const newTodo = {
            id: randomId,
            text: todo
        }

        const newTodos = [newTodo, ...todos];
        setTodos(newTodos);
        setTodo('');
    }

    return (
        <form className="todo-input" onSubmit={createTodo}>
            <input placeholder="write your task..." className="task-input" type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button type="submit" className="btn"><BiPlus /></button>
        </form>
    );
}

export default TodoInput;