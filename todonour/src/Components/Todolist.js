import React from 'react'
import Todo from './Todo'

function Todolist({todos,setTodos,filteredTodo}) {
    return (
        <div className= "todo-container">
            <ul className="todo-list">
            {
                todos.map(item  =><Todo 
                        key={item.id}
                        text={item.text}
                        item={item}
                        todos={todos}
                        setTodos={setTodos}
                        completed={item.completed}
                    />)
            }


            </ul>
        </div>
    )
}

export default Todolist
