import { useState } from "react";

export function Task({task}) {
  const [isCheched, setIsChecked] = useState(false)

  const handleCheck = () => {
    setIsChecked(!isCheched)
  }

  if (!task) return
  if(!isCheched ) {
  return (
    <li className={`w-full bg-white p-4 rounded-lg border border-neutral-300 flex justify-between items-center`}>
      <div className="flex gap-3">
        <input type="checkbox" onChange={handleCheck} />
        <span className={`${isCheched ? 'line-through': ''}`}>{task.todo}</span>
      </div>
      <span>X</span>
    </li>
  )}
}

