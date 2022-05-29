import Board from "./components/Board/Board";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import Status from "./components/Status/Status";
import calculateWinner from "./utils/calculateWinner";
import { Button, Center, Heading, Stack } from "@chakra-ui/react";
import { useState } from "react";

const Game = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setxIsNext] = useState(true);
  const [xColor, setXColor] = useState("pink");
  const [oColor, setOColor] = useState("blue");

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const handleClick = (index) => {
    const historyCopy = history.slice(0, stepNumber + 1); // When going to a previous step, we don't keep the future steps
    const current = historyCopy[historyCopy.length - 1];
    const squares = current.squares.slice();

    // If game is over or the square already has a value, do nothing
    if (calculateWinner(squares) || squares[index]) {
      return;
    }

    squares[index] = xIsNext ? "X" : "O";

    setHistory(historyCopy.concat([{ squares: squares }]));
    setStepNumber(historyCopy.length);
    setxIsNext(!xIsNext);
  };

  const resetGame = () => {
    setHistory([{ squares: Array(9).fill(null) }]);
    setStepNumber(0);
    setxIsNext(true);
    setXColor("pink");
    setOColor("blue");
  };

  return (
    <Center>
      <Stack w={454} spacing={8} m={6}>
        <Heading>Tic tac toe</Heading>
        <Stack direction="row" spacing={2}>
          <ColorPicker
            label="X color"
            value={xColor}
            onChange={(event) => setXColor(event.target.value)}
          />
          <ColorPicker
            label="O Color"
            value={oColor}
            onChange={(event) => setOColor(event.target.value)}
          />
        </Stack>
        <Board
          squares={current.squares}
          onClick={(index) => handleClick(index)}
          colors={{ o: oColor, x: xColor }}
        />
        <Stack spacing={4}>
          <Status
            winner={winner}
            xIsNext={xIsNext}
            colors={{ o: oColor, x: xColor }}
          />
          <Button
            variant="outline"
            type="reset"
            isDisabled={history.length < 2}
            onClick={resetGame}
          >
            Reset
          </Button>
        </Stack>
      </Stack>
    </Center>
  );
};

export default Game;
