import React from 'react'

const Form = ({inputText, setInputText, todos, setTodos, setStatues, status}) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
        
    }

 const submetTodoHandler = (e) => {
     e.preventDefault()
     setTodos([
         ...todos, {
             text: inputText,
             completed: false,
             id: Math.random() *1000
         }
     ])
         setInputText("")
 }
    console.log(todos)
 
    const statuesHandler = (e) => {
        setStatues(e.target.value)
    }
    console.log(status)
    

    return (
        
        <form className="listForm">
        <input value={inputText}
            onChange={inputTextHandler}
            type="text"
            className="todo-input"/>
        <button onClick={submetTodoHandler}
            className="todo-button"
            type="submit">
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select onChange={statuesHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
        
    );
}

export default Form

