import { useState } from "react"

export function Header() {

  //let title = 'MON SUPER TITRE'
  const [title, setTitle] = useState('MON SUPER TITRE STATE ')

  const handleClick = () => {
    setTitle('BLABLABLA')
    console.log(title)
  }

  return (
    <div className="text-center my-12">
      <h1 className="text-3xl font-bold text-red-600">{title}</h1>
      <h2 className="text-xl font-bold">Sous titre</h2>
      <button className="bg-red-600 p-4" onClick={handleClick}>Changer Titre</button>
    </div>
  )
}