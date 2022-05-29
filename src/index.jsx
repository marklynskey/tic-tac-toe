import ReactDOM from "react-dom/client";
import Footer from "./components/Footer/Footer";
import Game from "./Game";
import { Center, ChakraProvider, Heading, Stack } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider>
    <Center>
      <Stack w={454} spacing={8} mt={8} mb={8}>
        <Heading as="h1">Tic tac toe</Heading>
        <Game as="main" />
        <Footer />
      </Stack>
    </Center>
  </ChakraProvider>
);
