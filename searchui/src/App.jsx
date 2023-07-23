import { useState } from 'react'
import './App.css'
import Searchbar from './components/Searchbar'
import CardContainer from './components/CardContainer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="searchbar">
        <Searchbar />
        <CardContainer />
      </div>
    </>
  )
}

export default App
