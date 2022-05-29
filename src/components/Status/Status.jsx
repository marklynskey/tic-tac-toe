import { Alert, AlertTitle, AlertIcon } from "@chakra-ui/react";

const Status = ({ colors, winner, xIsNext }) => (
  <Alert
    status={winner ? "success" : "info"}
    variant={winner ? "solid" : "subtle"}
    colorScheme={
      winner === "O"
        ? colors.o
        : winner === "X"
        ? colors.x
        : xIsNext
        ? colors.x
        : colors.o
    }
    borderRadius="md"
  >
    <AlertIcon />
    <AlertTitle>
      {winner ? "Winner: " + winner : "Next player: " + (xIsNext ? "X" : "O")}
    </AlertTitle>
  </Alert>
);

export default Status;
