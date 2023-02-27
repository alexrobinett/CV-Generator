
import Navbar from './components/Navbar'
import Body from './components/body'
import './App.css'
import Sidebar from './components/Sidebar'
import React, { useState } from "react"


function App() {
 
  
  const [isPreview, setIsPreview] = useState(false)
  const [useTemplate, setUseTemplate ] = useState(false)

  function togglePreview(){
    setIsPreview(prevVal => prevVal ? false : true)
  }

  function toggleTemplate(){
    setUseTemplate(prevVal => prevVal ? false : true)
    console.log(useTemplate)
  }

  return (
    <div className="App flex flex-col w-full">
      <Navbar/>
      <main className="flex min-h-screen ">
      <Body
      isPreview={isPreview} 
      useTemplate={useTemplate}
      />
      <Sidebar
      isPreview={isPreview}
      togglePreview={togglePreview}
      toggleTemplate={toggleTemplate}
      />
      </main>
      
    </div>
  )
}

export default App
