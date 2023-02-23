import { useState } from 'react'
import Navbar from './components/Navbar'
import Body from './components/body'
import './App.css'
import Sidebar from './components/Sidebar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App flex flex-col w-full">
      <Navbar/>
      <main className="flex min-h-screen">
      <Body />
      <Sidebar/>
      </main>
      
    </div>
  )
}

export default App
