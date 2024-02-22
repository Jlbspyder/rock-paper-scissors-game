"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MdOutlineClose } from "react-icons/md";

// const getLocalStorage = () => {
//   let gamePoint = localStorage.getItem("gameScore");
//   if (gamePoint) {
//     return (gamePoint = JSON.parse(gamePoint));
//   } else {
//     return 0;
//   }
// };

const HomePage = () => {
  const [showGameBoard, setShowGameBoard] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [result, setResult] = useState("");
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);
  const [score, setScore] = useState(0);
  const [userPick, setUserPick] = useState("");
  const [compPick, setCompPick] = useState("");

  let point = 0;

  // useEffect(() => {
  //   localStorage.setItem("gameScore", JSON.stringify(score));
  // }, [score]);

  const restart = () => {
    setShowGameBoard(false);
    setWin(false);
    setLose(false);
    setCompPick("");
  };

  const setWinner = (winner) => {
    setTimeout(() => {
      setResult(winner);
    }, 2000);
    setResult("");
  };

  const setPoints = (newPoint) => {
    point = newPoint;
    const timer = setTimeout(() => {
      setScore((point) => point + 3);
      setWin(true);
      setLose(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  };
  const setLoss = (newPoint) => {
    point = newPoint;
    const timer = setTimeout(() => {
      setLose(true);
      setWin(false);
      setScore((point) => point - 3);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  };
  const setDraw = (newPoint) => {
    point = newPoint;
    setTimeout(() => {
      setLose(true);
      setWin(true);
      setScore((point) => point + 1);
    }, 2000);
  };

  const endGame = () => {
    localStorage.removeItem("gameScore");
  };

  const makePick = (pick) => {
    setShowGameBoard((prev) => !prev);
    cpuPick();
    let cpu = cpuPick();
    setGamePlay(pick, cpu);
    setUserPick(pick);
    setTimeout(() => {
      setCompPick(cpu);
    }, 2000);
  };

  const cpuPick = () => {
    let optns = ["rock", "paper", "scissors", "spock", "lizard"];
    let cpuOption = optns[Math.floor(Math.random() * 5)];
    setTimeout(() => {
      setCompPick(cpuOption);
    }, 1000);

    return cpuOption;
  };

  const reset = () => {
    setScore(0);
    setShowGameBoard(false);
    setWin(false);
    setLose(false);
  };

  const setGamePlay = (userPick, cpuPick) => {
    if (userPick === "paper" && cpuPick === "scissors") {
      setWinner("YOU LOSE!");
      setLoss(point - 3);
    }
    if (userPick === "paper" && cpuPick === "rock") {
      setWinner("YOU WIN!");
      setPoints(point + 3);
    }
    if (userPick == "paper" && cpuPick == "paper") {
      setWinner("IT'S A TIE!");
      setDraw(point + 3);
    }
    if (userPick === "paper" && cpuPick === "spock") {
      setWinner("YOU WIN!");
      setPoints(point + 3);
    }
    if (userPick === "paper" && cpuPick === "lizard") {
      setWinner("YOU LOSE!");
      setLoss(point - 3);
    }
    if (userPick == "rock" && cpuPick == "scissors") {
      setWinner("YOU WIN!");
      setPoints(point + 1);
    }
    if (userPick == "rock" && cpuPick == "paper") {
      setWinner("YOU LOSE!");
      setLoss(point - 3);
    }
    if (userPick == "rock" && cpuPick == "rock") {
      setWinner("IT'S A TIE!");
      setDraw(point + 1);
    }
    if (userPick == "rock" && cpuPick == "lizard") {
      setWinner("YOU WIN!");
      setPoints(point + 3);
    }
    if (userPick == "rock" && cpuPick == "spock") {
      setWinner("YOU LOSE!");
      setLoss(point - 3);
    }
    if (userPick == "scissors" && cpuPick == "scissors") {
      setWinner("IT'S A TIE!");
      setDraw(point + 1);
    }
    if (userPick == "scissors" && cpuPick == "rock") {
      setWinner("YOU LOSE!");
      setLoss(point - 3);
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
      setLoss(point - 3);
    }
    if (userPick == "spock" && cpuPick == "lizard") {
      setWinner("YOU LOSE!");
      setLoss(point - 3);
    }
    if (userPick == "spock" && cpuPick == "spock") {
      setWinner("IT'S A TIE!");
      setDraw(point + 1);
    }
    if (userPick == "spock" && cpuPick == "scissors") {
      setWinner("YOU WIN!");
      setPoints(point + 3);
    }
    if (userPick == "spock" && cpuPick == "paper") {
      setWinner("YOU LOSE!");
      setLoss(point - 3);
    }
    if (userPick == "spock" && cpuPick == "rock") {
      setWinner("YOU WIN!");
      setPoints(point + 3);
    }
    if (userPick == "lizard" && cpuPick == "rock") {
      setWinner("YOU LOSE!");
      setLoss(point - 3);
    }
    if (userPick == "lizard" && cpuPick == "spock") {
      setWinner("YOU WIN!");
      setPoints(point + 3);
    }
    if (userPick == "lizard" && cpuPick == "lizard") {
      setWinner("IT'S A TIE!");
      setDraw(point + 1);
    }
    if (userPick == "lizard" && cpuPick == "scissors") {
      setWinner("YOU LOSE!");
      setLoss(point - 3);
    }
    if (userPick == "lizard" && cpuPick == "paper") {
      setWinner("YOU WIN!");
      setPoints(point + 3);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <div className="logo" onClick={() => setShowGameBoard(false)}>
          <img src="images/logo-bonus.svg" alt="logo" className="title" />
        </div>
        <div className="result">
          <p>SCORE</p>
          <h1>{score}</h1>
          <div className="end-game">
            <Link href="/">
              <div className="end" onClick={endGame}>
                END GAME
              </div>
            </Link>
          </div>
        </div>
      </header>
      {!showGameBoard && (
        <div className="board">
          <div className="symbols">
            <div className="effect scissors-bg">
              <div className="scissors">
                <img
                  src="/images/icon-scissors.svg"
                  alt="scissors"
                  id="icon-scissors"
                  onClick={() => makePick("scissors")}
                />
              </div>
            </div>
            <div className="effect spock-bg">
              <div className="spock">
                <img
                  src="/images/icon-spock.svg"
                  alt="spock"
                  id="icon-spock"
                  onClick={() => makePick("spock")}
                />
              </div>
            </div>
            <div className="effect paper-bg">
              <div className="paper">
                <img
                  src="/images/icon-paper.svg"
                  alt="paper"
                  id="icon-paper"
                  onClick={() => makePick("paper")}
                />
              </div>
            </div>
            <div className="effect lizard-bg">
              <div className="lizard">
                <img
                  src="/images/icon-lizard.svg"
                  alt="lizard"
                  id="icon-lizard"
                  onClick={() => makePick("lizard")}
                />
              </div>
            </div>
            <div className="effect rock-bg">
              <div className="rock">
                <img
                  src="/images/icon-rock.svg"
                  alt="rock"
                  id="icon-rock"
                  onClick={() => makePick("rock")}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {showGameBoard && (
        <div className="game-board">
          <div className={`user ${win ? "user win" : ""}`}>
            <h3>YOU PICKED</h3>
            <div className={`img-wrapper choice ${userPick}`}>
              <img
                src={`/images/icon-${userPick}.svg`}
                alt="game-img"
                className="user-img"
              />
            </div>
          </div>
          <div className="summary">
            <h1>{result}</h1>
            {result && (
              <div className="play" onClick={restart}>
                PLAY AGAIN
              </div>
            )}
          </div>
          <div className={`cpu ${lose ? "cpu cpu-win" : ""}`}>
            <h3>THE HOUSE PICKED</h3>
            <div className={`img-wrapper choice ${compPick}`}>
              {compPick && (
                <img
                  src={`/images/icon-${compPick}.svg`}
                  alt="game-img"
                  className="user-img"
                />
              )}
            </div>
          </div>
        </div>
      )}
      {showGameBoard && (
        <div className="mobile-board">
          <div className={`user ${win ? "user win" : ""}`}>
            <div className={`img-wrapper choice ${userPick}`}>
              <img
                src={`/images/icon-${userPick}.svg`}
                alt="game-img"
                className="user-img"
              />
            </div>
            <h3>YOU PICKED</h3>
          </div>
          <div className={`cpu ${lose ? "cpu cpu-win" : ""}`}>
            <div className={`img-wrapper choice ${compPick}`}>
              {compPick && (
                <img
                  src={`/images/icon-${compPick}.svg`}
                  alt="game-img"
                  className="user-img"
                />
              )}
            </div>
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
          <img src="/images/image-rules-bonus.svg" alt="" />
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
            <img src="/images/image-rules-bonus.svg" alt="" className="beats" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
