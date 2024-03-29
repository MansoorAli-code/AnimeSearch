import React,{useState , useEffect} from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

const App = () => {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");

  const GetTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`).then(res => res.json());

    setTopAnime(temp.top.slice(0,5));
  }

  const handleSearch = e => {
    e.preventDefault();

    FetchAnime(search);
    
  }

  const FetchAnime = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`).then(res => res.json());

    setAnimeList(temp.results);
    console.log(temp.results);
  }

  useEffect(() => {
    GetTopAnime();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
          <Sidebar topAnime={topAnime} />
          <MainContent handleSearch={handleSearch} search={search} setSearch={setSearch} animeList={animeList}  />
      </div>
    </div>
  )
}

export default App

