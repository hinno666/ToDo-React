import { RxCross2 } from "react-icons/rx"


const TodoItem = ({ text, id, deleteTodo }) => {
    return (<div className="todo">
        <p>{text}
            <button className="todo-btn" type="button" onClick={() => deleteTodo(id)}><RxCross2 /></button>
        </p>
    </div>);
}

export default TodoItem;