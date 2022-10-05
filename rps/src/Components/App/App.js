import { useState } from "react";
import heart from "../.././heart.svg";
import heartlost from "../.././heartlost.svg";
import rock from "../.././rock.svg";
import paper from "../.././paper.svg";
import scissors from "../.././scissors.svg";
import "./App.css";
import Title from "../Title";
import Game from "../Game";

// Rock = 0
// Paper = 1
// Scissors = 2

// Gameover => leaderboard transition: table and play again

/*To do list: 
1. We want to clean up the code and create different components
2. Fix SVGs using useEffect on states 
3. CCS fixes
4. Create Leaderboard 
5. Animations and transitions
6. Connect a backend database to store scores and users 
*/

function App() {
  const [username, setUsername] = useState();
  const [cpu, setCpu] = useState();
  const [cpuScore, setCpuScore] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [livesCount, setLivesCount] = useState(5);
  const [lives, setLives] = useState([
    { life: true },
    { life: true },
    { life: true },
    { life: true },
    { life: true },
  ]);
  const [message, setMessage] = useState("Choose your weapon if you dare.");
  const [userWeapon, setUserWeapon] = useState();
  const [cpuWeapon, setCpuWeapon] = useState();
  const [moves, setMoves] = useState([]);

  function restart() {
    setUsername();
    setCpuScore(0);
    setUserScore(0);
    setLivesCount(5);
    setMessage("Choose your weapon if you dare.");
    setLives([
      { life: true },
      { life: true },
      { life: true },
      { life: true },
      { life: true },
    ]);
  }

  function onChange(e) {
    if (e.key === "Enter") {
      setUsername(e.target.value);
    }
  }

  function results(input) {
    setCpu(Math.floor(Math.random() * 3));

    if (input === 0) {
      setUserWeapon(rock);
      setMoves([userWeapon, cpuWeapon]);
    } else if (input === 1) {
      setUserWeapon(paper);
      setMoves([userWeapon, cpuWeapon]);
    } else if (input === 2) {
      setUserWeapon(scissors);
      setMoves([userWeapon, cpuWeapon]);
    }

    if (cpu === 0) {
      setCpuWeapon(rock);
      setMoves([userWeapon, cpuWeapon]);
    } else if (cpu === 1) {
      setCpuWeapon(paper);
      setMoves([userWeapon, cpuWeapon]);
    } else if (cpu === 2) {
      setCpuWeapon(scissors);
      setMoves([userWeapon, cpuWeapon]);
    }
    console.log("Moves", moves);
    if (input === cpu) {
      setMessage("Draw.");
    } else if (input - cpu === 1 || input - cpu === -2) {
      setMessage(`${username} wins.`);

      setUserScore(userScore + 1);
    } else {
      setMessage(`${username} loses.`);

      setCpuScore(cpuScore + 1);
      setLives([
        ...lives.slice(0, livesCount - 1),
        { ...lives[livesCount - 1], life: false },
        ...lives.slice(livesCount, 5),
      ]);

      setLivesCount(livesCount - 1);
    }
  }

  return (
    <div className="App">
      {username ? (
        <div className="content">
          {livesCount ? (
            <Game
              restart={restart}
              lives={lives}
              heart={heart}
              heartlost={heartlost}
              message={message}
              moves={moves}
              userScore={userScore}
              cpuScore={cpuScore}
              setMoves={setMoves}
              results={results}
            />
          ) : (
            <div className="game-over">
              <h1>Game Over</h1>
              <button className="play-again" onClick={restart}>
                Play Again
              </button>
            </div>
          )}
        </div>
      ) : (
        <Title setUsername={setUsername} />
      )}
    </div>
  );
}
export default App;
