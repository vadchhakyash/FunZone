// import { useState } from 'react';
// import GameLoader from './components/GameLoader';

// function App() {
//   const [activeGame, setActiveGame] = useState('cricket');

//   return (
//     <div className="app">
//       <h1>My Game Arcade</h1>
      
//       {/* Game Selector Buttons */}
//       <div className="menu">
//         <button onClick={() => setActiveGame('cricket')}>Play Cricket</button>
//         {/* Future games can be added here easily */}
//         <button onClick={() => setActiveGame('racing')}>Play Racing</button>
//       </div>

//       {/* The Game Player */}
//       <div className="stage">
//         {activeGame === 'cricket' && <GameLoader gameId="cricket" />}
//         {activeGame === 'racing' && <p>Upload racing game folder to play!</p>}
//       </div>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Home from './components/Home';
import GameLoader from './components/GameLoader';
import './App.css'; // We will add styles here

// A small wrapper to get the game ID from the URL
const GamePage = () => {
  const { gameId } = useParams();
  console.log("Current Game ID:", gameId); 
  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden' }}>
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
