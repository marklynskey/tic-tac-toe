import { Button, Text } from '@chakra-ui/react';

const Square = ({ colors, onClick, value }) => (
  <Button
    height="150px"
    width="100%"
    onClick={onClick}
    colorScheme={value === 'O' ? colors.o : value === 'X' ? colors.x : 'gray'}
  >
    <Text fontSize="5xl">
      {value === 'O' ? '⭘' : value === 'X' ? '✕' : value }
    </Text>
  </Button>
);

export default Square;
