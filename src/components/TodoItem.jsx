import { useState } from "react";
import { RxCross2 } from "react-icons/rx"
import { MdDone, MdRemoveDone } from "react-icons/md"
import { BsFillPencilFill } from "react-icons/bs"



const TodoItem = ({ text, id, deleteTodo, changeTodo }) => {
    const [doneTodo, setDoneTodo] = useState(false);
    const [editing, setEditing] = useState(false);
    const [changeText, setChangeText] = useState(text)

    let editMode = {};
    if (!editing) {
        editMode.display = 'none';
    }




    return (
        <div className="todo">
            <div className="text" style={doneTodo ? { textDecoration: ' line-through', opacity: '0.5' } : { textDecoration: 'none' }}>{editing ? text : changeText}
                <div className="btn-container">
                    <button className="todo-btn done" onClick={() => setDoneTodo(!doneTodo)}>{doneTodo ? <MdRemoveDone /> : <MdDone />}</button>
                    <button className="todo-btn change" type="button" onClick={() => setEditing(!editing)}><BsFillPencilFill /></button>
                    <button className="todo-btn close" type="button" onClick={() => deleteTodo(id)}><RxCross2 /></button>
                </div>
            </div>
            <form className="change-input" style={editMode} onSubmit={(e) => {
                e.preventDefault()
                changeTodo(id, changeText)
                setEditing(false)
            }}>
                <input
                    type="text"
                    value={changeText}
                    className="task-input"
                    onChange={(e) => setChangeText(e.target.value)}
                />
                <button type="submit" className="btn btn-change"> <MdDone /></button>
            </form>
        </div>
    );
}

export default TodoItem;