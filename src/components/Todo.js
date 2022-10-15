import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { RiEdit2Fill } from 'react-icons/ri'


function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        text: ''
    })

    const submitUpdate = (value) => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }



    return todos.map((todo, index) => {

        return <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>

            <div className='icons'>
                <RiEdit2Fill onClick={() => setEdit({ id: todo.id, value: todo.text })} className="edit-icon" />
                <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className="delete-icon" />
            </div>

        </div>
    })
}

export default Todo