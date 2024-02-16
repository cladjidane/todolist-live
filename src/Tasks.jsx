import { Task } from './Task'

export function Tasks({listTasksData}) {

  if(listTasksData.length === 0) return <p>Patientez ...</p>
  return (
    <div className="text-center my-12 w-2/3 m-auto">
      <ul>
        { listTasksData.map((task, index) => {
          return ( <Task key={`task-${index}`} task={task} /> )
        })}
      </ul>
    </div>
  )
}