import { useState } from 'react'
import './App.css'
import User from './components/user'
import MessageView from './components/message-view'
import MessageEditor from './components/message-editor'
import Message from "./components/message";


let key = 0
function App() {
  
  const time = new Date ;
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const [components, setComponents] = useState([])
  const [selectedValue, setSelectedValue] = useState('')
  const [message, setMessage] = useState('')
  

    const handleClick = (e) => {
        e.preventDefault() ; 
        key = key + 1
        let newMessage = <Message key={key} text={message} user={selectedValue} time={`${hours} : ${minutes}`}/>;
        setComponents([...components, newMessage])
    }

    const handleSelectChange = (e) => {
      setSelectedValue(e.target.value);
    };

    const handleMessageChange = (e) => {
      setMessage(e.target.value)
      console.log(e.target.value);
    }

  return (
    <div className='container'>
      <User handleChange={handleSelectChange} />
      <MessageView components={components} />
      <MessageEditor handleClick={handleClick} getMessage={handleMessageChange} />
    </div>
  )
}

export default App