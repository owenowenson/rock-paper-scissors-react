import { useState } from "react";
import './App.css'

// Rock = 0
// Paper = 1
// Scissors = 2

function App() {
  const [input, setInput] = useState();
  const [username, setUsername] = useState();
  const [cpu, setCpu] = useState();
  const [cpuScore, setCpuScore] = useState(0);
  const [userScore, setUserScore] = useState(0);
  // const [moves, setMoves] = useState(0);

  // if (moves === 0 && username === '') {
  //   let name = window.prompt("What's your name?");
  //   setUsername(name);
  // }

  function onChange(e){
    if(e.key === 'Enter'){
      setUsername(e.target.value)
      setInput('')
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
      window.alert("Draw.");
      // setMoves(moves + 1);
    } else if (input - cpu === 1 || input - cpu === -2) {
      window.alert(`${username} wins.`);
      // setMoves(moves + 1);
      setUserScore(userScore + 1);
    } else {
      window.alert(`${username} loses.`);
      // setMoves(moves + 1);
      setCpuScore(cpuScore + 1);
    }
  }

  return (
    <div className="App">
    {username ? (
      <div className="content">
      <span className="score">{`YOU ${userScore}`}-{`${cpuScore} `}CPU</span>
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
      <div>
      </div>
      </div>
      </div>
    ):(
      <div className="title-page">
      <h1>RPS DUEL</h1>
      <p>Think you have what it takes?</p>
      <input value={input} placeholder="Enter your name." onKeyUp={onChange}></input>
      </div>
    ) }
      
      
    </div>
  );
}

export default App;
