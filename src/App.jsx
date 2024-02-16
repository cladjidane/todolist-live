import './App.css'

import { useEffect, useState } from "react";

import { Form } from './Form'
import { Header } from './Header'
import { Tasks } from './Tasks'
import { listOptionsData } from './utils/helpers'

function App() {
  const [listTasksDataState, setListTasksDataState] = useState([])

  const handleChangeTasksList = (task) => {
    setListTasksDataState([...listTasksDataState, {todo: task}])
  } 

  useEffect(() => {
    setTimeout(() => {
      fetch('https://dummyjson.com/todos')
        .then(res => res.json())
        .then(res => setListTasksDataState(res.todos))
    }, 3000)
  }, [])

  return (
    <div className='container m-auto bg-neutral-300 p-6'>
      <Header />
      <Form handleChangeTasksList={handleChangeTasksList} listOptions={listOptionsData} />
      <Tasks listTasksData={listTasksDataState} />
    </div>
  )
}

export default App
