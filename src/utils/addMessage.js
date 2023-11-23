import Message from "./message"; 

const [components, setComponents] = useState([])

const handleClick = () => {
    newMessage = <Message />;
    setComponents([...components, newMessage])
}

