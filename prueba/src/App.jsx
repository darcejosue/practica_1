import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Buscar from './components/buscador'

function App() {

  const [palabra, setPalabra] = useState("")
  const handleSearsh = (e) =>{
    const minuscula = e.target.value;
    
    setPalabra(minuscula.toUpperCase())
  }

  return (
    <div>
    <input type="text" name='buscar' onChange={handleSearsh}/>
     <Buscar buscar={palabra}/>
    
    </div>
  )
}

export default App
