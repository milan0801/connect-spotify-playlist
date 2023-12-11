import './App.css';
import SearchBar from './features/searchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Spotify Playlist</h1>
      </header>
      <div className="search-bar">
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
