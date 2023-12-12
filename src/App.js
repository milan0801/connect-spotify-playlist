import './App.css';
import Playlist from './features/playlist/Playlist';
import SearchBar from './features/searchBar/SearchBar';
import SearchResults from './features/searchResults/SearchResults';

function App() {
  return (
    <div className='App'>
      <header>
        <h1>Spotify Playlist</h1>
      </header>
      <div className='search-bar'>
        <SearchBar />
      </div>
      <div className='results'>
        <SearchResults/>
        <Playlist/>
      </div>
    </div>
  );
}

export default App;
