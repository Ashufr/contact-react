import { useState } from 'react'
import Navbar from './assets/components/Navigation/Navbar'
import Section from './assets/components/Section/Section'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Section/>  
    </div>
  )
}

export default App
