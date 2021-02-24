import React,{useState, useEffect} from 'react';
import "./Style.css";
import Form from "./Form"
import TodoList from "./TodoList"


const App = () => {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatues] = useState('all');
    const [filterdTodo, setFilteredTodo] = useState([]);


    useEffect(() => {
        saveLocal();
    }, [])
    
    useEffect(() => {
        getSaveLocal();
        filterHandler();
    }, [todos, status])    

  
    
    const getSaveLocal = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    const saveLocal = () => {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]))
        } else {
            let todoLocal = JSON.parse(localStorage.getItem('todos'));
            setTodos(todoLocal);
        }
    }
    
    

const filterHandler = () => {
    switch (status) {
        case 'comleted':
            setFilteredTodo(todos.filter(event => event.completed === true))
            break;
        case 'uncompleted':
            setFilteredTodo(todos.filter(event => event.completed === false))
            break;
        default:
            setFilteredTodo(todos)
            break;  
    }
}
    
console.log(filterdTodo)


    return (
        <div className="App">
            <div>
                <h1>Todo App BY JiN</h1>
            </div>
            <div>
            <Form
                setStatues={setStatues}
                status={status}
                todos={todos}
                setTodos={setTodos}
                inputText={inputText}
                setInputText={setInputText}/>
            <TodoList
                todos={todos}
                setTodos={setTodos}
                filterdTodo={filterdTodo}/>
            
            </div>
        </div>
    )
}

export default App;
