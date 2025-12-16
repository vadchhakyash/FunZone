import LazyIframe from "./LazyIframe";


export default function GameLoader({ gameId }) {
  const gameUrl = `/Game/${gameId}/index.html`;
  return <LazyIframe src={gameUrl} title={gameId} />;
}




// const GameLoader = ({ gameId, width = "100%", height = "600px" }) => {
//   // Use the variable again!
//   const gameUrl = `/Game/${gameId}/index.html`; 

//   return ( 
//        <div className="game-container" style={{ width, height, border: '2px solid #333' }}>
//        <iframe 
//          src={gameUrl}
//          title={`Game: ${gameId}`}
//          width="100%"
//          height="100%"
//          style={{ border: 'none' }}
//          allow="autoplay; fullscreen; accelerometer; gyroscope; encrypted-media; picture-in-picture" 
//        />
//      </div>
//   );
// };

// export default GameLoader;