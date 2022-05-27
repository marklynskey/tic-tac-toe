import { useState } from 'react';
import './Game.css';

const Square = props => (
  <button className="square" onClick={props.onClick}>
    {props.value}
  </button>
);

const Board = props => {
  const renderSquare = i => (
    <Square
      value={props.squares[i]}
      onClick={() => props.onClick(i)}
    />
  );

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

const Game = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setxIsNext] = useState(true);


  const handleClick = i => {
    const historyCopy = history.slice(0, stepNumber + 1); // When going to a previous step, we don't keep the future steps
    const current = historyCopy[historyCopy.length - 1];
    const squares = current.squares.slice();
    
    // If game is over or the square already has a value, do nothing
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? 'X' : 'O';

    setHistory(historyCopy.concat([{ squares: squares }]));
    setStepNumber(history.length);
    setxIsNext(!xIsNext);
  }

  const jumpTo = step => {
    setStepNumber(step);
    setxIsNext((step % 2) === 0);
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  // Componentise this?
  const moves = history.map((step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  const status = (
    winner
      ? 'Winner: ' + winner
      : 'Next player: ' + (xIsNext ? 'X' : 'O')
  );

  return (
    <div className="game">
      <div className="game-board">
        <Board 
          squares={current.squares}
          onClick={i => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

function calculateWinner(squares) {
  // Possible winning lines
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
    // If first square in a line is not empty, and the rest of the line has the same value, we have a winner
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  
  return null;
}

export default Game;