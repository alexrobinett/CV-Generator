
import Navbar from './components/Navbar'
import Body from './components/body'
import './App.css'
import Sidebar from './components/Sidebar'


function App() {
 
  
  // function showPreview(){

  // }

  return (
    <div className="App flex flex-col w-full">
      <Navbar/>
      <main className="flex min-h-screen ">
      <Body />
      <Sidebar/>
      </main>
      
    </div>
  )
}

export default App
