import Board from './components/Board/Board';
import Status from './components/Status/Status';
import calculateWinner from './utils/calculateWinner';
import { Center, Heading, Stack } from '@chakra-ui/react';
import { useState } from 'react'

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

  return (
    <Center>
      <Stack w={452} spacing={6} m={6}>
        <Heading>Tic tac toe</Heading>
        <Status winner={winner} xIsNext={xIsNext} />
        <Board
          squares={current.squares}
          onClick={index => handleClick(index)}
        />
      </Stack>
    </Center>
  );
};

export default Game;
