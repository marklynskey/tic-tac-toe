import { Button, Text } from '@chakra-ui/react';

const Square = ({ onClick, value }) => (
  <Button
    height="150px"
    width="100%"
    onClick={onClick}
    colorScheme={value === 'O' ? 'blue' : value === 'X' ? 'pink' : 'gray'}
  >
    <Text fontSize="5xl">
      {value === 'O' ? '⭘' : value === 'X' ? '✕' : value }
    </Text>
  </Button>
);

export default Square;
