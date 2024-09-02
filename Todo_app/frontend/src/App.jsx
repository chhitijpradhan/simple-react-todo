import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'

function App() {
  const [todos, setTodos ] =useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/todos')
        .then(response => response.json())
        .then(data => setTodos(data))
        .catch(error => console.error('Error fetching todos:', error));
}, [])

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos} ></Todos>
    </div>
      
  )
}

export default App
