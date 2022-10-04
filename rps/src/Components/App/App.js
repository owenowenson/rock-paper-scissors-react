import { useState } from "react";
import heart from "../.././heart.svg";
import heartlost from "../.././heartlost.svg";
import "./App.css";

// Rock = 0
// Paper = 1
// Scissors = 2

function App() {
  const [input, setInput] = useState();
  const [username, setUsername] = useState();
  const [cpu, setCpu] = useState();
  const [cpuScore, setCpuScore] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [livesCount, setLivesCount] = useState(4);
  const [lives, setLives] = useState([
    { life: true },
    { life: true },
    { life: true },
    { life: true },
    { life: true },
  ]);
  const [message, setMessage] = useState("Choose your weapon if you dare.");

  // const [moves, setMoves] = useState(0);

  // if (moves === 0 && username === '') {
  //   let name = window.prompt("What's your name?");
  //   setUsername(name);
  // }
  function restart() {
    setUsername();
    setCpuScore(0);
    setUserScore(0);
    setLivesCount(4);
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
    if (cpu === 0) {
      let move = "Computer chose rock.";
      console.log(move);
    } else if (cpu === 1) {
      let move = "Computer chose paper.";
      console.log(move);
    } else if (cpu === 2) {
      let move = "Computer chose scissors.";
      console.log(move);
    }

    if (input === cpu) {
      setMessage("Draw.");
    } else if (input - cpu === 1 || input - cpu === -2) {
      setMessage(`${username} wins.`);

      setUserScore(userScore + 1);
    } else {
      setMessage(`${username} loses.`);

      setCpuScore(cpuScore + 1);
      setLives([
        ...lives.slice(0, livesCount),
        { ...lives[livesCount], life: false },
        ...lives.slice(livesCount + 1, 5),
      ]);
      setLivesCount(livesCount - 1);
    }
  }

  return (
    <div className="App">
      {username ? (
        <div className="content">
          <div className="top-bar">
            <button className="return" onClick={restart}>
              Return
            </button>
            <div className="hearts">
              {lives.map((life, index) => (
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
          <span className="score">
            {`YOU ${userScore}`}-{`${cpuScore} `}CPU
          </span>
          <div className="buttons">
            <button
              onClick={function () {
                console.log("You chose rock.");
                results(0);
              }}
            >
              Rock
            </button>
            <button
              onClick={function () {
                console.log("You chose paper.");
                results(1);
              }}
            >
              Paper
            </button>
            <button
              onClick={function () {
                console.log("You chose scissors.");
                results(2);
              }}
            >
              Scissors
            </button>
            <div></div>
          </div>
        </div>
      ) : (
        <div className="title-page">
          <h1>RPS DUEL</h1>
          <p>Think you have what it takes?</p>
          <input placeholder="Enter your name." onKeyUp={onChange}></input>
        </div>
      )}
    </div>
  );
}

export default App;
