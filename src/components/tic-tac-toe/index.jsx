// 0 1 2
// 3 4 5
// 6 7 8

import { useState, useEffect } from "react";
import './style.css';
function Square({ value, onSquareClick }) {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
}

export default function TicTacToe() {
    const [squares, setSquares] = useState(Array(9).fill(""));
    const [isXTurn, setIsXTurn] = useState(true);
    const [status, setStatus] = useState("");

    function handleClick(getCurrentSquare) {
        let cpySquares = [...squares];
        if (getWinner(cpySquares) || cpySquares[getCurrentSquare]) return;
        cpySquares[getCurrentSquare] = isXTurn ? "X" : "O";
        setIsXTurn(!isXTurn);
        setSquares(cpySquares);
    }

    function getWinner(squares) {
        const winningPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
        ];

        for (let i = 0; i < winningPatterns.length; i++) {
            const [x, y, z] = winningPatterns[i];

            if (
                squares[x] &&
                squares[x] === squares[y] &&
                squares[x] === squares[z]
            ) {
                return squares[x];
            }
        }

        return null;
    }

    function handleRestart() {
        setIsXTurn(true);
        setSquares(Array(9).fill(""));
    }

    useEffect(() => {
        if (!getWinner(squares) && squares.every((item) => item !== "")) {
            setStatus(`This is a draw ! Please restart the game`);
        } else if (getWinner(squares)) {
            setStatus(`Winner is ${getWinner(squares)}. Please restart the game`);
        } else {
            // setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
            setStatus(`Turn of player ${isXTurn ? "X" : "O"}`);
        }
    }, [squares, isXTurn]);

    console.log(squares);

    return (
        <>
            <div className="tic-tac-toe-container">
                <h1 style={{ color: 'red' }}>Tic Tac Toe</h1>
                <div className="row">
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                </div>
                <div className="row">
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                </div>
                <div className="row">
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                </div>
                <h2>{status}</h2>
                <button onClick={handleRestart} style={{ background: 'red', color: 'white', fontSize: '20px'}}>Restart</button>
            </div>
        </>
    );
}