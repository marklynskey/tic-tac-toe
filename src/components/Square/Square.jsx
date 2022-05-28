import { Button, Text } from '@chakra-ui/react';

const Square = ({ onClick, value }) => (
  <Button
    variant="outline"
    height="150px"
    width="100%"
    onClick={onClick}
  >
    <Text fontSize="5xl">
      {value === 'O' ? '⭘' : value === 'X' ? '✕' : value }
    </Text>
  </Button>
);

export default Square;
