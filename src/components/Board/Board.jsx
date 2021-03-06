import Square from "../Square/Square";
import { Grid, GridItem } from "@chakra-ui/react";

const Board = ({ colors, onClick, squares }) => {
  const GameSquare = ({ index }) => (
    <GridItem>
      <Square
        value={squares[index]}
        onClick={() => onClick(index)}
        colors={colors}
      />
    </GridItem>
  );

  return (
    <Grid
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(3, 1fr)"
      gap={2}
    >
      <GameSquare index={0} />
      <GameSquare index={1} />
      <GameSquare index={2} />
      <GameSquare index={3} />
      <GameSquare index={4} />
      <GameSquare index={5} />
      <GameSquare index={6} />
      <GameSquare index={7} />
      <GameSquare index={8} />
    </Grid>
  );
};

export default Board;
