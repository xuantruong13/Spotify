import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ListsSong from './components/ListsSong';
import DetailsSong from './components/DetailsSong';
import { Songs } from './Context';
import DataSongs from './Data/songs.json'
import Playing from './components/Playing';
import { useContext, useState } from 'react';

function App() {
  const [song, setSong] = useState(DataSongs[0])
  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)
    setSong(song)
  }
  return (
    <div className="">
      <Songs.Provider value={{DataSongs, song, handleSetSong}}>
        <Navbar/>
        <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden '>
          <DetailsSong/>
          <ListsSong/>
        </div>
        <Playing />
      </Songs.Provider>
    </div>
  );
}

export default App;
