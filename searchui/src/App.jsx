import { useEffect, useRef, useState } from 'react'
import './App.css'
import Searchbar from './components/Searchbar'
import CardContainer from './components/CardContainer';
import Card from './components/Card';
import Getpopulardata from './components/apifunctions';
import { alignProperty } from '@mui/material/styles/cssUtils';


function App() {
 
const [Movies, setMovies] = useState([]);
const [value, setvalue] = useState('');
useEffect(() => {
  async function fetchData() {
    try {
      const popularMovies = await Getpopulardata();
      console.log(popularMovies);
      setMovies(popularMovies.slice(0, 6));
    } catch (error) {
      console.error(error);
    }
  }
  fetchData();
}, []); 

const searchoo = (svalue) => {
  setvalue(svalue)
}  

 
  return (
    <>
      <div className="searchbar">
        <Searchbar handlesearch={searchoo} />
        <div div className='popular'>
        <h1>Popular Movies</h1>
        <div className='popularlist'>
          {Movies.map((movie, index) => { return <Card key={movie.id} original_title={movie.original_title} poster_path={movie.poster_path}  /> })}
        </div>
        </div>
        <h1>you searched for {value}</h1>
       <CardContainer />
      </div>
    </>
  )
}

export default App
