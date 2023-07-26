import { useState } from 'react'
import './App.css'
import Searchbar from './components/Searchbar'
import CardContainer from './components/CardContainer';
import Card from './components/Card';
import getpopulardata from './components/apifunctions';

function App() {
 getpopulardata();
  return (
    <>
      <div className="searchbar">
        <Searchbar />
        <div className='popular'>
        popular movies
        </div>
       <CardContainer />
      </div>
    </>
  )
}

export default App
