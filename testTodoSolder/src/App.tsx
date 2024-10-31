import { useState } from "react";
import AddMission from "./components/AddMission";

interface Mission {
  name: string, 
  status: string,
  priority: string,
  description: string
}

export default function App() {

  const[Missions, setMissions] = useState<Mission[]>([])

  return (
    <div>
      <h1>test</h1>
      <AddMission setMissions={setMissions}/>
      {/* <ListMissions missions={Missions}/> */}
    </div>
  )
}
