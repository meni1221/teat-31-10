interface Props {
    setName: (name: string) => void,
    setStatus: (status: string) => void,
    setPriority: (priority: string) => void,
    setDescription: (description: string) => void, 
}

export default function Add(props: Props) {
    const [name, setName] = useState('')
    const [status, setStatus] = useState('')
    const [priority, setPriority] = useState('')
    const [description, setDescription] = useState('')  
}
export default function AddMission() {
  return (
    <div>
      
    </div>
  )
}
