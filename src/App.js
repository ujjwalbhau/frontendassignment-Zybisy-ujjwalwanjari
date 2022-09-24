import { useState,useEffect } from 'react';
import './App.css';
import { AnimeDetail } from './Components/AnimeDetail';
import AnimeList from './Components/AnimeList';
import { WatchList } from './Components/WatchList';
import {removeFromList} from './Components/removeFromList';
function App() {
  const [data, setData] = useState();
  const [search, setSearch] = useState('');
  const [animeDetail, setAnimeDetail] = useState();
  const [filter, setFilter] = useState('');
  const [myList, setMyList] = useState([]);
  const [pagination, setPagination] = useState([]);

  // useEffect(()=>{
  //   localStorage.setMyList('myList ', JSON.stringify(myList));
    
  // },[myList])
  const addTo=(anime)=>{
    const index=myList.findIndex((myanime)=>{
      return myanime.mal_id === anime.mal_id
    })
    if(index < 0){
      const newArr=[...myList,anime]
     setMyList(newArr);
    }
    
  }
  const removeFrom=(anime)=>{
    const newArr=myList.filter((myanime)=>{
      return myanime.mal_id !== anime.mal_id
    })
    setMyList(newArr);
  }
  const filterItems=(e)=>{
    setFilter(e.target.value)
  }
  useEffect(()=>{
  const URL=`https://api.jikan.moe/v4/anime?q=${search}` ;
  fetch(URL).then(res=>res.json())
  .then((res)=>{
    console.log(res);
    setData(res.data)
  })
  },[search])
  const searchItems=(e)=>{
    setSearch(e.target.value);
  }
  
  return (
    <div className="App">
      <div className="header">
        <h1>My Anime List</h1>
        <div className='search-box'>
          <input type='search' placeholder='Search you Charecter'
          onChange={(e)=>searchItems(e)} />
        </div>
        <div className='filter-box'>
          <input type='dropdown' placeholder='Filter category' 
          onChange={(e)=>filterItems(e)}/>
        </div>
      </div>

      <div className='container'>
        <div className='animeInfo'>
        {
          animeDetail && <AnimeDetail animeDetail={animeDetail}/>
        }
        </div>
        
        <div className='anime-row'>
          <h3 className='head-name' >Anime</h3>
          <div className='row'>
            <AnimeList list={data} 
            setAnimeDetail={setAnimeDetail}
            animeComponent={WatchList}
            handleList={(anime)=>{addTo(anime)}}
            Filter={filter} />
           
          </div>
          
            
          
          
        </div>

        <h3 className='head-name' >My Watch List</h3>
          <div className='row'>
            <AnimeList list={myList} 
            setAnimeDetail={setAnimeDetail}
            animeComponent={removeFromList}
            handleList={(anime)=>{removeFrom(anime)}}/>
           
          </div>
      </div>

     
    </div>
  );
}

export default App;
