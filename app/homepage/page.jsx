"use client";
import { useState } from "react";
import Link from "next/link";
import { MdOutlineClose } from "react-icons/md";

const HomePage = () => {
  const [showGameBoard, setShowGameBoard] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [userImages, setUserImages] = useState(null);
  const [cpuImages, setCpuImages] = useState(null);
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);

  const options = {
    rock: "/images/rock.png",
    paper: "/images/paper.png",
    scissors: "/images/scissors.png",
    spock: "/images/icon-spock.svg",
    lizard: "/images/icon-lizard.svg"
  };
  const placeholderImg = "/images/placeholder-img.png";

  let point = 0;

  const makePick = (pick) => {
    setShowGameBoard((prev) => !prev);
    const choice = options[pick];
    setUserImages(choice);
    cpuPick();
    let cpu = cpuPick();
    setGamePlay(pick, cpu);
  };

  const cpuPick = () => {
    let optns = ["rock", "paper", "scissors", "spock", "lizard"];
    let cpuOption = optns[Math.floor(Math.random() * 5)];
    const cpuChoice = options[cpuOption];
    setCpuImages(placeholderImg);
    setTimeout(() => {
      setCpuImages(cpuChoice);
    }, 1000);

    return cpuOption;
  };

  const reset = () => {
    setScore(0);
  };

  const setGamePlay = (userPick, cpuPick) => {
    if (userPick === "paper" && cpuPick === "scissors") {
      setWinner("YOU LOSE!");
      setTimeout(() => {
        setScore((point) => point - 3);
      }, 2000);
    }
    if (userPick === "paper" && cpuPick === "rock") {
      setWinner("YOU WIN!");
      setPoints(point + 3);
    }
    if (userPick == "paper" && cpuPick == "paper") {
      setWinner("IT'S A TIE!");
      setTimeout(() => {
        setScore((point) => point + 1);
      }, 2000);
    }
    if (userPick === "paper" && cpuPick === "spock") {
      setWinner("YOU WIN!");
      setPoints(point + 3)
    }
    if (userPick === "paper" && cpuPick === "lizard") {
      setWinner("YOU LOSE!");
      setTimeout(() => {
        (setScore((point) => (point - 3)))
      }, 2000)
    }
    if (userPick == "rock" && cpuPick == "scissors") {
      setWinner("YOU WIN!");
      setPoints(point + 3);
    }
    if (userPick == "rock" && cpuPick == "paper") {
      setWinner("YOU LOSE!");
      setTimeout(() => {
        setScore((point) => point - 3);
      }, 2000);
    }
    if (userPick == "rock" && cpuPick == "rock") {
      setWinner("IT'S A TIE!");
      setTimeout(() => {
        setScore((point) => point + 1);
      }, 2000);
    }
    if (userPick == "rock" && cpuPick == "lizard") {
      setWinner("YOU WIN!");
      setPoints(point + 3)
    }
    if (userPick == "rock" && cpuPick == "spock") {
      setWinner("YOU LOSE!");
      setTimeout(() => {
        setScore((point) => point - 1);
      }, 2000);
    }
    if (userPick == "scissors" && cpuPick == "scissors") {
      setWinner("IT'S A TIE!");
      setTimeout(() => {
        setScore((point) => point + 1);
      }, 2000);
    }
    if (userPick == "scissors" && cpuPick == "rock") {
      setWinner("YOU LOSE!");
      setTimeout(() => {
        setScore((point) => point - 3);
      }, 2000);
    }
    if (userPick == "scissors" && cpuPick == "paper") {
      setWinner("YOU WIN!");
      setPoints(point + 3);
    }
    if (userPick == "scissors" && cpuPick == "lizard") {
      setWinner("YOU WIN!");
      setPoints(point + 3);
    }
    if (userPick == "scissors" && cpuPick == "spock") {
      setWinner("YOU LOSE!");
      setTimeout(() => {
        setScore((point) => point - 3);
      }, 2000);
    }
    if (userPick == "spock" && cpuPick == "lizard") {
      setWinner("YOU LOSE!");
      setTimeout(() => {
        setScore((point) => point - 3);
      }, 2000);
    }
    if (userPick == "spock" && cpuPick == "spock") {
      setWinner("IT'S A TIE!");
      setTimeout(() => {
        setScore((point) => point + 1);
      }, 2000);
    }
    if (userPick == "spock" && cpuPick == "scissors") {
      setWinner("YOU WIN!");
      setPoints(point + 3);
    }
    if (userPick == "spock" && cpuPick == "paper") {
      setWinner("YOU LOSE!");
      setTimeout(() => {
        setScore((point) => point - 3);
      }, 2000);
    }
    if (userPick == "spock" && cpuPick == "rock") {
      setWinner("YOU WIN!");
      setPoints(point + 3);
    }
    if (userPick == "lizard" && cpuPick == "rock") {
      setWinner("YOU LOSE!");
      setTimeout(() => {
        setScore((point) => point - 3);
      }, 2000);
    }
    if (userPick == "lizard" && cpuPick == "spock") {
      setWinner("YOU WIN!");
      setPoints(point + 3);
    }
    if (userPick == "lizard" && cpuPick == "lizard") {
      setWinner("IT'S A TIE!");
      setTimeout(() => {
        setScore((point) => point + 1);
      }, 2000);
    }
    if (userPick == "lizard" && cpuPick == "scissors") {
      setWinner("YOU LOSE!");
      setTimeout(() => {
        setScore((point) => point - 3);
      }, 2000);
    }
    if (userPick == "lizard" && cpuPick == "paper") {
      setWinner("YOU WIN!");
      setPoints(point + 3);
  };
}

  const restart = () => {
    setShowGameBoard(false);
  };

  const setWinner = (winner) => {
    setTimeout(() => {
      setResult(winner);
    }, 2000);
    setResult("");
  };

  const setPoints = (newPoint) => {
    point = newPoint;
    setTimeout(() => {
      setScore((point) => point + 3);
    }, 2000);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="logo" onClick={() => setShowGameBoard(false)}>
          <img src="images/logo-bonus.svg" alt="logo" className="title" />
        </div>
        <div className="result">
          <p>SCORE</p>
          <h1>{score}</h1>
          <div className="end-game">
            <Link href="/">
              <div className="end">END GAME</div>
            </Link>
          </div>
        </div>
      </div>
      {!showGameBoard && (
        <div className="board">
          <div className="symbols">
            <div className="effect scissors">
              <img
                src="/images/scissors.png"
                alt="scissors"
                onClick={() => makePick("scissors")}
              />
            </div>
            <div className="effect spock-bg">
              <div className="spock">
                <img 
                src="/images/icon-spock.svg" 
                alt="spock" 
                id="icon-spock"
                onClick={() => makePick("spock")} />
              </div>
            </div>
            <div className="effect paper">
              <img
                src="/images/paper.png"
                alt="paper"
                onClick={() => makePick("paper")}
              />
            </div>
            <div className="effect lizard-bg">
              <div className="lizard">
                <img 
                src="/images/icon-lizard.svg" 
                alt="lizard" 
                id="icon-lizard"
                onClick={() => makePick("lizard")} />
              </div>
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
      {showGameBoard && (
        <div className="game-board">
          <div className="user">
            <h3>YOU PICKED</h3>
            <img src={userImages} alt="game-img" className="user-img" />
          </div>
          <div className="summary">
            <h1>{result}</h1>
            {result && (
              <div className="play" onClick={restart}>
                PLAY AGAIN
              </div>
            )}
          </div>
          <div className="cpu">
            <h3>THE HOUSE PICKED</h3>
            <img src={cpuImages} alt="game-img" className="cpu-img" />
          </div>
        </div>
      )}
      {showGameBoard && (
        <div className="mobile-board">
          <div className="user">
            <img src={userImages} alt="game-img" className="user-img" />
            <h3>YOU PICKED</h3>
          </div>
          <div className="cpu">
            <img src={cpuImages} alt="game-img" className="cpu-img" />
            <h3>THE HOUSE PICKED</h3>
          </div>
        </div>
      )}
      {showGameBoard && (
        <div className="mobile-summary">
          <h1>{result}</h1>
          {result && (
            <div className="play" onClick={restart}>
              PLAY AGAIN
            </div>
          )}
        </div>
      )}
      <div className="reset" onClick={reset}>
        RESET
      </div>
      {!showRules && (
        <div className="footer">
          <div className="rules" onClick={() => setShowRules(true)}>
            RULES
          </div>
        </div>
      )}
      <div className={showRules ? "mobile-guideline open" : "mobile-guideline"}>
        <h2>RULES</h2>
        <div className="guideline-img">
          <img src="/images/image-rules.svg" alt="" />
        </div>
        <MdOutlineClose
          className="mobile-close"
          onClick={() => setShowRules(false)}
        />
      </div>
      <div className={showRules ? "rules-bg" : "rules-bg quit"}>
        <div className={showRules ? "guideline open" : "guideline"}>
          <div className="guideline-flex">
            <h2>RULES</h2>
            <MdOutlineClose
              className="close"
              onClick={() => setShowRules(false)}
            />
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
