import ReactDOM from 'react-dom/client';
import Game from './Game';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider>
    <Game />
  </ChakraProvider>
);
