function Game({
  restart,
  lives,
  heart,
  heartlost,
  message,
  moves,
  userScore,
  cpuScore,
  setMoves,
  results,
}) {
  return (
    <div className="game">
      <div className="top-bar">
        <button className="return" onClick={restart}>
          Return
        </button>
        <div className="hearts">
          {lives.map((life) => (
            <div>
              {life.life ? (
                <img src={heart} alt="heart" />
              ) : (
                <img src={heartlost} alt="heartlost" />
              )}
            </div>
          ))}
        </div>
      </div>
      <p className="message">{message}</p>
      {moves.map((move) => (
        <img src={move} alt="move" />
      ))}
      <span className="score">
        {`YOU ${userScore}`}-{`${cpuScore} `}CPU
      </span>
      <div className="buttons">
        <button
          onClick={function () {
            setMoves([]);
            results(0);
          }}
        >
          Rock
        </button>
        <button
          onClick={function () {
            setMoves([]);
            results(1);
          }}
        >
          Paper
        </button>
        <button
          onClick={function () {
            setMoves([]);
            results(2);
          }}
        >
          Scissors
        </button>
        <div></div>
      </div>
    </div>
  );
}

export default Game;
