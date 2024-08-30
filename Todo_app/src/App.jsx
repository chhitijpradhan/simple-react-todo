import { useState } from 'react'




function App() {
  console.log("setTodo ")

  const [todos,setTodos] = useState([{
    title :"gym",
    description : "morning"
  },{
    title: "study",
    description :"evening"
  }])


  function addTodo () {
    console.log("add new todo created")
    setTodos([...todos,
    {title:"play time",
      description:"valorant"
    }])
  }

    return (
    <div>
      <button onClick={addTodo} >Add A new Todo</button>
    
      {todos.map (function (todo) {
        return <Todo title={todo.title} description={todo.description} />
      })}

    </div>

    )

}
// create a component Single todo
// todo (){
// title : "title";
// description :"description";
// completed : "false";
//}

function Todo (props) {
  console.log("component added")
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  )
}
export default App
