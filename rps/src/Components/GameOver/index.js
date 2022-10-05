function GameOver({ restart }) {
  return (
    <div className="game-over">
      <h1>Game Over</h1>
      <button className="play-again" onClick={restart}>
        Play Again
      </button>
    </div>
  );
}

export default GameOver;
