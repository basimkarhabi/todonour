import React from 'react';
import Todo from "./Todo";

const TodoList = ({todos, setTodos, filterdTodo}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {
                    filterdTodo.map(item => <Todo 
                        key={item.id}
                        text={item.text}
                        completed ={item.completed}
                        item={item}
                        todos={todos}
                        setTodos={setTodos}
                    />)
}
            </ul>
        </div>
    )
}
export default TodoList
