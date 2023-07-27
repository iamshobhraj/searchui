import { useEffect, useRef, useState } from 'react'
import './App.css'
import Searchbar from './components/Searchbar'
import CardContainer from './components/CardContainer';
import Card from './components/Card';
import * as apifncs from './components/apifunctions';


function App() {
 
const [PMovies, setPMovies] = useState([]);
const [SMovies, setSMovies] = useState([]);
const [valoo, setvaloo] = useState('');
useEffect(() => {
  async function fetchData() {
    try {
      const popularMovies = await apifncs.Getpopulardata();
      setPMovies(popularMovies.slice(0, 6));
    } catch (error) {
      console.error(error);
    }

    try{
      if (valoo !== ''){
      const searchmovie = await apifncs.GetseaarchData(valoo);
      setSMovies(searchmovie.slice(0,6));
      }
      else {
        setSMovies([]);
      }
    }
   catch (error) {
    console.error(error);
   }
  }
  fetchData();
}, [valoo]); 

const searchoo = (svalue) => {
  setvaloo(svalue)
}  


console.log(SMovies)
 
  return (
    <>
      < div className="searchbar">
        <Searchbar handlesearch={searchoo} />
        <h1>Popular Movies</h1>
        <div className='popularlist'>
          {PMovies.map((movie, index) => { return <Card key={movie.id} original_title={movie.original_title} poster_path={movie.poster_path}  /> })}
        </div>
        <h1>you searched for {valoo}</h1>
       <CardContainer cardData={SMovies}/>
      </div>
    </>
  )
}

export default App
