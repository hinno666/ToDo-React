import { useState } from "react";
import { RxCross2 } from "react-icons/rx"
import { MdDone, MdRemoveDone } from "react-icons/md"
import { BsFillPencilFill } from "react-icons/bs"


const TodoItem = ({ text, id, deleteTodo, changeTodo }) => {
    const [doneTodo, setDoneTodo] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [changeText, setChangeText] = useState(text)


    return (
        <div className="todo">
            <div className={doneTodo ? 'text text-done' : 'text'}>
                <p>{isEdit ? text : changeText}</p>
                <div className="btn-container">
                    <button className="todo-btn done" onClick={() => setDoneTodo(!doneTodo)}>{doneTodo ? <MdRemoveDone /> : <MdDone />}</button>
                    <button className="todo-btn change" type="button" onClick={() => setIsEdit(!isEdit)}><BsFillPencilFill /></button>
                    <button className="todo-btn close" type="button" onClick={() => deleteTodo(id)}><RxCross2 /></button>
                </div>
                <form className={isEdit ? 'change-input active' : "change-input"} onSubmit={(e) => {
                    e.preventDefault()
                    if (changeText.length === 0) {
                        changeTodo('')
                    } else {
                        changeTodo(changeText, id)
                        setIsEdit(false)
                    }
                }}>
                    <input
                        type="text"
                        value={changeText}
                        className="task-input"
                        placeholder='Введите текст...'
                        onChange={(e) => setChangeText(e.target.value)}
                    />
                    <button type="submit" className="btn btn-change"> <MdDone /></button>
                </form>
            </div>

        </div>
    );
}

export default TodoItem;