import React ,{useState}from 'react';
import './Style.css';
import Form from './Form'
import Todolist from './Todolist'

function App() {
const [inputText,setInputText]= useState("")
const [todos,setTodos]=useState([])
const[status,setStatues]=useState("all")
const[,filterTodo,setFilteredTodo]=useState([])


useEffect(() => {
                  getSaveLocal()
                  filterHandler()
                }, [todos,status])


useEffect(() => saveLocal() )


const getSaveLocal = () => {
  localStorage.setItem('todos',JSON.stringify(todos))
}


const saveLocal = () => {
  if(localStorage.getItem('todos')===null){
    localStorage.setItem('todos',JSON.stringify([]))
  }else{
    let todolocal =JSON.parse(localStorage.getItem('todos'))
  }





const filterHandler = () => {
  switch(status){
    case 'completed':
    setFilteredTodo(todos.filter(event=>event.completed === true))
       break;
    case 'uncompleted':
    setFilteredTodo(todos.filter(event=>event.completed === false))
      break;
    default :
    setFilteredTodo(todos)
  }
}

  return (
      <div className ="App">
        <div>
          <h1>Todo App </h1>
        </div>
          
      <Form 
      setStatues ={setStatues}
      status={status}
      inputText={inputText}
      setTodos={setTodos}
      todos={todos}
      setInputText={setInputText}

      
      
      />
      <Todolist 
      todos={todos}
      setTodos={setTodos} 
      />


    </div>
  );
}

export default App;
