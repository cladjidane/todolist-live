import Option from "./Option";
import { useState } from "react";

export function Form({listOptions, handleChangeTasksList}) {  
  const [taskName, setTaskName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    handleChangeTasksList(taskName)
    setTaskName('')
  }

  return (
    <>
      <form onSubmit={handleSubmit} action="" className="bg-white p-8 rounded-lg border w-2/3 m-auto">
        <label htmlFor="input-task" className="block">Nom de la tâche</label>
        <div className="flex items-center gap-8 justify-between">
          <input onChange={(e) => setTaskName(e.target.value)} value={taskName} type="text" id="input-task" className="border border-neutral-300 p-4 rounded w-1/2" />
          <span>ou</span>
          <select onChange={(e) => setTaskName(e.target.value)} name="" id="" className="border border-neutral-300 p-4 rounded w-full" >
            {listOptions.map((task, index) => {
              return <option key={`opt-${index}`}>{task.taskName}</option>
            })}
          </select>
        </div>
        <button className="block border border-neutral-500 bg-slate-200 py-4 px-8 my-6">Envoyer</button>
      </form>
    </>
  )
}