import React from 'react';
import { BrowserRouter, Routes, Route, useParams, Link } from 'react-router-dom';
import Home from './components/Home';
import GameLoader from './components/GameLoader';
import './App.css'; // We will add styles here

// A small wrapper to get the game ID from the URL
const GamePage = () => {
  const { gameId } = useParams();
  console.log("Current Game ID:", gameId); 
  return (
    <div className="game-page">
      <Link to="/" className="home-icon" aria-label="Back to home">
        🏠
      </Link>
      <GameLoader gameId={gameId} height="100vh" width="100%" />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play/:gameId" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
