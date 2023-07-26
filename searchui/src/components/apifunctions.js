const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGIxZGY3ZmI2Yjg0ODEwNmEwZDg1YTljY2ZjZmRmMCIsInN1YiI6IjY0YzExOWMyZWRlMWIwMDEzYzZlNjQzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aff7NXvArInBBRvotkb1GJOJYN9WEn52fX2GWeeHYgk',
    }
  };

  async function getpopulardata() {
    try{
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?region=IN', options);
    const popularData = await response.json().then((data) => data.results);
    console.log(popularData);

    }
    catch(error){
        console.log(error);
    }
  }

  export default getpopulardata;
