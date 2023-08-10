import { useState } from "react";
import { AiOutlineClear } from 'react-icons/ai'
import { data } from './../todos';
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";



const TodoList = () => {
    const [todos, setTodos] = useState(data)

    const deleteTodo = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id)
        setTodos(newTodos);
    }

    const changeTodo = (updateTitle, id) => {

        setTodos(
            todos.map((todo) => {
                return { ...todo, text: todo.id === id ? updateTitle : todo.text }
            })
        )
    }


    return (<div className="todo-list">
        <TodoInput todos={todos} setTodos={setTodos} />
        {todos.length === 0 ? <p className="deals">Нет дел...</p> :
            todos.map((todo) => {
                return <TodoItem key={todo.id} {...todo} deleteTodo={deleteTodo} changeTodo={changeTodo} />
            })
        }

        <button type="button" className="btn" onClick={() => setTodos([])}><AiOutlineClear /></button>
    </div>);
}



export default TodoList;