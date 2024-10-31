import { useState } from "react"

interface Props {
    setMissions: ([Missions]:any) => void,
}

export default function AddMission({setMissions}: Props) {

    const [name, setName] = useState('')
    const [status, setStatus] = useState('')
    const [priority, setPriority] = useState('')
    const [description, setDescription] = useState('')  


    const addMission = async() => {
       const res = await fetch('https://reactexambackend.onrender.com/missions/8867790', {
            method: 'POST',
            body: JSON.stringify({name, status, priority, description}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()

        console.log(data)

    }
  return (
    <>
      <div className="Add">
      <input type="text"
      placeholder="name"
      onChange={(e) => setName(e.target.value)} />
      <input type="text"
      placeholder="status"
      onChange={(e) => setStatus(e.target.value)} />
      <input type="text"
      placeholder="priority"
      onChange={(e) => setPriority(e.target.value)} />
      <input type="text"
      placeholder="description"
      onChange={(e) => setDescription(e.target.value)} />
    </div>
    <button onClick={()=>addMission()}>add</button>

  </>
  )
}
