import { useState } from 'react'
import './App.css'
import User from './components/user'
import MessageView from './components/message-view'
import MessageEditor from './components/message-editor'
import Message from "./components/message";


let key = 1
function App() {
  const time = new Date
  const hours = time.getHours();
  const minutes = time.getMinutes();
  
  const [components, setComponents] = useState([])
  

    const handleClick = () => {
        key = key + 1
        console.log(key);
        let newMessage = <Message key={key} text={'Salut tu vas bien ?'} time={`${hours} : ${minutes}`}/>;
        setComponents([...components, newMessage])
    }

  return (
    <div className='container'>
      <User />
      <MessageView components={components} />
      <MessageEditor handleClick={handleClick} />
    </div>
  )
}

export default App
