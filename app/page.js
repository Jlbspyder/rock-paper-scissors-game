"use client";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

const HomePage = () => {
  const [showGameBoard, setShowGameBoard] = useState(false);
  const [showRules, setShowRules] = useState(false)
  const [userImages, setUserImages] = useState(null)
  const [cpuImages, setCpuImages] = useState(null)
  const [result, setResult] = useState(null)
  const [score, setScore] = useState(0)

  const options = {
    "rock": "/images/rock.png",
    "paper": "/images/paper.png",
    "scissors": "/images/scissors.png"
}
let point = 0
  
  const makePick = (pick) => {
    setShowGameBoard((prev) => !prev);
    const choice = options[pick]
    setUserImages(choice)
    cpuPick()
    let cpu = cpuPick()
    setGamePlay(pick, cpu )
  };

  const cpuPick = () => {
    let optns = ["rock", "paper", "scissors"]
    let cpuOption = optns[Math.floor(Math.random() * 3)]
    const cpuChoice = options[cpuOption]
    setCpuImages(cpuChoice)
    return cpuOption
  }

  const setGamePlay = (userPick, cpuPick) => {
      if (userPick === "paper" && cpuPick === "scissors") {
        setWinner("YOU LOSE!")
        setScore((point) => (point - 3))
      }
      if (userPick === "paper" && cpuPick === "rock") {
        setWinner("YOU WIN!")
        setPoints(point + 3)
      }
      if (userPick == "paper" && cpuPick == "paper") {
        setWinner("IT'S A TIE!");
        setScore((point)  => (point + 1))
      }
      if (userPick == "rock" && cpuPick == "scissors") {
        setWinner("YOU WIN!");
        setPoints(point + 3);
      }
      if (userPick == "rock" && cpuPick == "paper") {
        setWinner("YOU LOSE!");
        setScore((point) => (point - 3))
      }
      if (userPick == "rock" && cpuPick == "rock") {
        setWinner("IT'S A TIE!");
        setScore((point)  => (point + 1))
      }
      if (userPick == "scissors" && cpuPick == "scissors") {
        setWinner("IT'S A TIE!");
        setScore((point)  => (point + 1))
      }
      if (userPick == "scissors" && cpuPick == "rock") {
        setWinner("YOU LOSE!");
        setScore((point) => (point - 3))
      }
      if (userPick == "scissors" && cpuPick == "paper") {
        setWinner("YOU WIN!");
        setPoints(point + 3);
      }
  }  

  const restart = () => {
    setShowGameBoard(false)
  }

  const setWinner = (winner) => {
    setResult(winner)
  }

  const setPoints = (newPoint) => {
    point = newPoint
    setScore((point => (point + 3)))
  }

  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <img src="images/logo.svg" alt="logo" className="title" />
        </div>
        <div className="result">
          <p>SCORE</p>
          <h1>{score}</h1>
        </div>
      </div>
      {!showGameBoard && (
        <div className="board">
          <div className="symbols">
            <div className="effect paper">
              <img
                src="/images/paper.png"
                alt="paper"
                onClick={() => makePick("paper")}
              />
            </div>
            <div className="effect scissors">
              <img
                src="/images/scissors.png"
                alt="scissors"
                onClick={() => makePick("scissors")}
              />
            </div>
            <div className="effect rock">
              <img
                src="/images/rock.png"
                alt="rock"
                onClick={() => makePick("rock")}
              />
            </div>
          </div>
        </div>
      )}
      {showGameBoard && <div className="game-board">
        <div className="user">
        <h3>YOU PICKED</h3>
          <img src={userImages} alt="game-img" className="user-img" />
        </div>
        <div className="summary">
          <h1>{result}</h1>
          <div className="play" onClick={restart} >PLAY AGAIN</div>
        </div>
        <div className="cpu">
        <h3>THE HOUSE PICKED</h3>
          <img src={cpuImages} alt="game-img" className="cpu-img" />
        </div>
      </div>}
      {showGameBoard && <div className="mobile-board">
        <div className="user">
          <img src={userImages} alt="game-img" className="user-img" />
          <h3>YOU PICKED</h3>
        </div>
        <div className="cpu">
          <img src={cpuImages} alt="game-img" className="cpu-img" />
          <h3>THE HOUSE PICKED</h3>
        </div>
      </div>}
      {showGameBoard && <div className="mobile-summary">
        <h1>{result}</h1>
        <div className="play" onClick={restart} >PLAY AGAIN</div>
      </div>}
      {!showRules && <div className="footer">
        <div className="rules" onClick={() => setShowRules(true)} >RULES</div>
      </div>}
      <div className={showRules ? "mobile-guideline open" : "mobile-guideline"}>
          <h2>RULES</h2>
          <div className="guideline-img">
            <img src="/images/image-rules.svg" alt="" />
          </div>
          <MdOutlineClose className="mobile-close" onClick={() => setShowRules(false)} />
      </div>
      <div className={showRules ? "rules-bg" : "rules-bg quit"}>
        <div className={showRules ? "guideline open" : "guideline"}>
            <div className="guideline-flex">
              <h2>RULES</h2>
              <MdOutlineClose className="close" onClick={() => setShowRules(false)} />
            </div>
            <div className="guideline-img">
              <img src="/images/image-rules.svg" alt="" className="beats" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
