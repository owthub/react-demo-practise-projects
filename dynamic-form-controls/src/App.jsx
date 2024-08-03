import { useState } from 'react'
import './App.css'
import Form1 from './components/form1'
import Form2 from './components/form2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Form1 /> */}
      <Form2 />
    </>
  )
}

export default App
