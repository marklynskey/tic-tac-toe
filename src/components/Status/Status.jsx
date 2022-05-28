import { Alert, AlertTitle, AlertIcon } from '@chakra-ui/react';

const Status = ({ winner, xIsNext }) => (
  <Alert
    status={winner ? 'success' : 'info'}
    variant="left-accent"
  >
    <AlertIcon />
    <AlertTitle>
      {winner
        ? 'Winner: ' + winner
        : 'Next player: ' + (xIsNext ? 'X' : 'O')
      }
    </AlertTitle>
  </Alert>
);

export default Status;
