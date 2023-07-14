import { useState } from 'react';

type Props = {
  value: string,
  onSquareClick: any,
}

type BoardProps = {
  xIsNext: boolean,
  squares: string[],
  onPlay: (nextSquares: string[]) => void,
}

function Square({ value, onSquareClick }: Props) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }: BoardProps) {
  // Typescript does not allow 'handleClick(i)'.
  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  const status = winner ?
    "Winner: " + winner :
    "Next player: " + (xIsNext ? "X" : "O");

  // 2. Rewrite Board to use two loops to make the squares instead of hardcoding them.
  const board = [...Array(3)].map((_, i) => {
    let threeSquares = [...Array(3)].map((_, j) => {
      let n = 3 * i + j;
      return <Square key={n} value={squares[n]} onSquareClick={() => handleClick(n)} />
    });
    return <div key={i} className="board-row">{threeSquares}</div>
  });

  return (
    <>
      <div className="status">{status}</div>
      {board}
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  // Typescript does not allow 'handlePlay(nextSquares)'.
  function handlePlay(nextSquares: string[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  // Typescript does not allow 'jumpTo(nextMove)'.
  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((_squares, move) => {
    // 1. For the current move only, show “You are at move #…” instead of a button.
    if (move === currentMove) {
      return <li key={move}> {/* assign proper keys */}
        <b>{"You are at move #" + move}</b>
      </li>
    }
    const description = move > 0 ?
      'Go to move #' + move :
      'Go to game start';
    return (
      <li key={move}> {/* assign proper keys */}
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
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

// Typescript does not allow 'calculateWinner(squares)'.
function calculateWinner(squares: string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
