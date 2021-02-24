import React from 'react'

const Todo = ({setTodos, todos, item, text, completed }) => {
    
const deleteHandler = (e) => {
    setTodos(todos.filter(el => el.id !== item.id))
}
    
    
    const completeHandler = (e) => {
        setTodos(todos.map(el => {
            if (el.id === item.id) {
                return {
                    ...el, completed: !el.completed
                }
            }
            return el
        }))
    }
    
    
    return (
        <div className="todo">
            <li className={`todo-item ${completed ? "completed": ''}`} >
                {text}</li>
                <button onClick={completeHandler} className="complete-btn">
                    <i className="fas fa-check"></i>
                </button>
                <button onClick={deleteHandler} className="trash-btn">
                    <i className="fas fa-trash"></i>
                </button>
        </div>
    )
}

export default Todo
