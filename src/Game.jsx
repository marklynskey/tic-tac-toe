import Board from './components/Board/Board';
import calculateWinner from './utils/calculateWinner';
import { useState } from 'react';
import './Game.css';

const Game = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setxIsNext] = useState(true);

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  const status = (
    winner
      ? 'Winner: ' + winner
      : 'Next player: ' + (xIsNext ? 'X' : 'O')
  );

  const handleClick = index => {
    const historyCopy = history.slice(0, stepNumber + 1); // When going to a previous step, we don't keep the future steps
    const current = historyCopy[historyCopy.length - 1];
    const squares = current.squares.slice();
    
    // If game is over or the square already has a value, do nothing
    if (calculateWinner(squares) || squares[index]) {
      return;
    }

    squares[index] = xIsNext ? 'X' : 'O';

    setHistory(historyCopy.concat([{ squares: squares }]));
    setStepNumber(historyCopy.length);
    setxIsNext(!xIsNext);
  }

  const jumpTo = step => {
    setStepNumber(step);
    setxIsNext((step % 2) === 0);
  };

  const Moves = () => (
    <ol>
      {history.map((step, move) => {
        const desc = move ?
          'Go to move #' + move :
          'Go to game start';
        
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{desc}</button>
          </li>
        );
      })}
    </ol>
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
        <Moves />
      </div>
    </div>
  );
};

export default Game;
