import './App.css';
import PlayerList from './Playerlist';
import Purpose from './Purpose';
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from '/Header';
import NavBar from './NavBar';


function App() {

  const [players, setPlayers] = useState([]) 

  function addPlayer(newPlayer) {
    const updatedPlayers = [...players, newPlayer]
    setPlayers(updatedPlayers)
  }

  useEffect(()=> {
    fetch("http://localhost:3000/toys")
    .then(r=> r.json())
    .then(data => {
      setPlayers(data)
    })
  }, [])

  function removePlayer(id) {
    const updatedPlayers = players.filter((player) => player.id !== id )
    setPlayers(updatedPlayers)
  }

  return (
    <div className="App">
      <Header/>
      <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Purpose />}/>
            <Route path="/roster" element={<PlayerList players={players} onRemovePlayer={removeplayer} />}/>
            <Route path="/add" element={<AddPlayer onAddPlayer={addPlayer}/>}/>
          </Routes>
      </div>
    </div>
  );
}

export default App;