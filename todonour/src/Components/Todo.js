import React from 'react'

function Todo({item,text,id,setTodos,todos,completed}) {
    const deleteHandler =(e)=>{
        setTodos(todos.filter(el=> el.id !== item.id ))
    }
const completeHandler = (e) => {
    setTodos(todos.map(el=>{
        if(el.id===item.id){
            return {
                 ...el, completed: !el.completed
            }  
        }
        return el
    }))
}



    return (
        <div className="todo">
            <li className={ `todo-item ${completed ? "completed":''}`}>
                {text}
                <button className="complete-btn">
                    <i className ="fas fa-check"></i>
                </button>
                <button className ="trash-btn" onClick={deleteHandler}>
                    <i className ="fas fa-trash"></i>
                </button>
            </li>
        </div>
    )
}

export default Todo
