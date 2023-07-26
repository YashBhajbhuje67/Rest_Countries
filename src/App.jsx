import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Display from './components/Display'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Display />
    </div>
  )
}

export default App
