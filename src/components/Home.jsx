import { Link } from "react-router-dom";
import { useMemo, useState } from "react";

const games = [
  {
    id: "Doodle-Cricket",
    title: "FunZone Cricket",
    image: "/Game/Doodle-Cricket/img/android-chrome-512x512.png",
    description: "Play the classic Google Cricket game!",
  },
  {
    id: "doodle-snake",
    title: "FunZone Snake",
    image: "/Game/doodle-snake/icons/android-icon-192x192.png",
    description: "Enjoy timeless fun with FunZone Snake!",
  },
  {
    id:"doodle-baseball",
    title:"FunZone Baseball",
    image:"/Game/doodle-baseball/icons/android-icon-192x192.png",
    description:"Step up to the plate and play FunZone Baseball!",
  },
  {
    id:"doodle-basketball",
    title:"FunZone Basketball",
    image:"/Game/doodle-basketball/icons/android-icon-192x192.png",
    description:"Step up to the plate and play FunZone basketball!",
  },
  {
    id:"doodle-football",
    title:"FunZone Football",
    image:"/Game/doodle-football/icons/android-icon-192x192.png",
    description:"Kick off and enjoy FunZone Football!"
  },
  {
    id:"doodle-garden-gnomes",
    title:"FunZone Gnomes",
    image:"/Game/doodle-garden-gnomes/icons/android-icon-192x192.png",
    description:"Help the gnomes in FunZone Garden Gnomes!" 
  },
  {
    id:"doodle-halloween",
    title:"FunZone Halloween",
    image:"/Game/doodle-halloween/icons/android-icon-192x192.png",
    description:"Celebrate spooky fun with FunZone halloween!"
  },
  {
    id:"doodle-pacman",
    title:"FunZone Pacman",
    image:"/Game/doodle-pacman/icons/android-icon-192x192.png",
    description:"chomp through dots in FunZone pacman!"
  },
  {
    id:"doodle-solitaire",
    title:"FunZone Solitaire",
    image:"/Game/doodle-solitaire/icons/android-icon-192x192.png",
    description:"Enjoy a classic game of FunZone Solitaire!"
  },
  {
    id:"doodle-bubble-tea",
    title:"FunZone Bubble Tea",
    image:"/Game/doodle-bubble-tea/icons/android-icon-192x192.png",
    description:"Serve up some fun with FunZone Bubble Tea!"
  }
];

export default function Home() {
  const [query, setQuery] = useState("");

  const filteredGames = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return games;
    return games.filter((game) =>
      `${game.title} ${game.description}`.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="arcade-container">
      <h1 className="arcade-title"><span className="text-black">🎮</span> My Game Arcade</h1>
      <p className="arcade-sub">Choose a game and start having fun!</p>

      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search games..."
          className="search-input"
          aria-label="Search games"
        />
      </div>

      <div className="game-grid">
        {filteredGames.map((game) => (
          <div key={game.id} className="game-card">
            <img src={game.image} alt={game.title} className="game-image" />

            <h3>{game.title}</h3>
            <p>{game.description}</p>

            <Link to={`/play/${game.id}`} className="play-btn">
              Play Now →
            </Link>
          </div>
        ))}
        {!filteredGames.length && (
          <div className="empty-state">
            <p>No games found for “{query}”.</p>
          </div>
        )}
      </div>

    </div>
  );
}
