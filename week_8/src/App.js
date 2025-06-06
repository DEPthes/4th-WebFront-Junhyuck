import { useState } from 'react';
import "./myStyle.css"

function Square({ value, onSquareClick, highlight}) {
  return (
    <button className="square" onClick={onSquareClick} style={{backgroundColor: highlight ? "skyblue" : "white"}}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  const result = calculateWinner(squares);
  let winLine;

  if (result && result.line) {
    winLine = result.line;
  } else {
    winLine = [];
  }

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner.winner;
  } else if (!squares.includes(null)) {
    status = '무승부입니다!'; 
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  const rows = [];
  for (let i = 0; i < 9; i += 3) {
    rows.push(
      <div className='board-row' key={i}>
        <Square value = {squares[i]} onSquareClick = {() => handleClick(i)} highlight = {winLine.includes(i)}/>
        <Square value={squares[i + 1]} onSquareClick={() => handleClick(i + 1)} highlight = {winLine.includes(i + 1)} />
        <Square value={squares[i + 2]} onSquareClick={() => handleClick(i + 2)} highlight = {winLine.includes(i + 2)}/>
      </div>
    )
  }

  return (
    <>
      <div className="status">{status}</div>
      {rows}
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isAscending, setIsAscending] = useState(true); // 오름차순, 내림차순 useState

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <button className='toggle-btn' onClick={() => setIsAscending(!isAscending)}>
          {isAscending ? "오름차순" : "내림차순"}
        </button>
        <ol>{isAscending ? moves : [...moves].reverse()}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner : squares[a], line : [a, b, c]};
    }
  }
  return null;
}