import Board from './components/Board/Board';
import calculateWinner from './utils/calculateWinner';
import { Box, Center, Heading, Stack } from '@chakra-ui/react';
import { useState } from 'react';

const Status = ({ winner, xIsNext }) => (
  winner
    ? 'Winner: ' + winner
    : 'Next player: ' + (xIsNext ? 'X' : 'O')
);

const Game = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setxIsNext] = useState(true);

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  
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
    <Center>
      <Stack w={452} spacing={6} m={6}>
        <Heading>Tic tac toe</Heading>
        <Board
          squares={current.squares}
          onClick={index => handleClick(index)}
        />
        <Box>
          <Status winner={winner} xIsNext={xIsNext} />
          <Moves />
        </Box>
      </Stack>
    </Center>
  );
};

export default Game;
