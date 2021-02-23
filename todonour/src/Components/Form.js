import React from 'react'

const Form =({inputText,setInputText,todos,setTodos,setStatues,status}) => {

    const inputTextHandler = (e)=>{
        setInputText(e.target.value)
    
    }

    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([
            ...todos,{
                text:inputText,
                completed:false,
                id:Math.random()*1000
            },
        ])
        setInputText("")
        
    }
    const statuesHandler = (e) => {
        setStatues(e.target)
    }
    



console.log(todos)
    return (
        <div>
            <form className = "listForm" action = "">
                <input type = "text" className="todo-input" value={inputText} onChange={inputTextHandler}/>
                <button className ="todo-button" type="submit" onClick= {submitTodoHandler} >
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className= "select">
                    <select className ="filter-todo" name="todo" id="" onChange={statuesHandler}>
                        <option value = "all" > all </option>
                        <option value = "completed" > completed </option>
                        <option value = "uncompleted" >uncompleted  </option>


                    </select>


                </div>

            </form>

        </div>
    )
}

export default Form
