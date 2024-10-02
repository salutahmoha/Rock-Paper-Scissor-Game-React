import { useState } from "react";
import "./App.css";

function App() {
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [gameResult, setGameResult] = useState("currently Draw");
    const [playerChoice, setPlayerChoice] = useState("");
    const [computerChoice, setComputerChoice] = useState("");

    //function to generate and get computer choice
    const getComputerChoice = () => {
        const computerChoicesArray = ["✊", "✌", "✋"];
        const randomIndex = Math.floor(Math.random() * computerChoicesArray.length);
        return computerChoicesArray[randomIndex];
    };

    //function to handle game results and set the game result and scores
    function handleSetGameResults(playerChoice) {
        const choice = getComputerChoice();
        setComputerChoice(choice);

        if (playerChoice === choice) {
            setGameResult("Draw");
        } else if (
            (playerChoice === "✊" && choice === "✌") ||
            (playerChoice === "✌" && choice === "✋") ||
            (playerChoice === "✋" && choice === "✊")
        ) {
            setGameResult("Player Wins!");
            setPlayerScore(playerScore + 1);
        } else {
            setGameResult("Computer Win");
            setComputerScore(computerScore + 1);
        }
    }
    return (
        <section className="game-display-container">
            <div className="container">
                <div className="game-card">
                    <div className="card-details">
                        <h3 className="myname">rock scissors</h3>
                        <h4 className="scoreboard">
                            computer {computerScore} {playerScore} player
                        </h4>
                    </div>
                    <div className="computer-selection">{computerChoice}</div>
                    <div className="game-result-board">{gameResult}</div>
                    <div className="player-input">{playerChoice}</div>
                    {/* player inputs choices */}
                    <div className="input-choice-option">
                        <button
                            onClick={() => {
                                setPlayerChoice("✌");
                                handleSetGameResults("✌");
                            }}
                            className="user-input-choice">
                            <h4 className="user-emoji">&#9996;</h4>
                            <p className="user-input-text">scissors</p>
                        </button>
                        <button
                            onClick={() => {
                                setPlayerChoice("✊");
                                handleSetGameResults("✊");
                            }}
                            className="user-input-choice">
                            <h4 className="user-emoji">&#9994;</h4>
                            <p className="user-input-text">rock</p>
                        </button>

                        <button
                            onClick={() => {
                                setPlayerChoice("✋");
                                handleSetGameResults("✋");
                            }}
                            className="user-input-choice">
                            <h4 className="user-emoji">&#9995;</h4>
                            <p className="user-input-text">paper</p>
                        </button>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default App
