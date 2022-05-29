import { Center, Link } from "@chakra-ui/react";

const Footer = () => (
  <Center as="footer">
    <Link
      href="https://github.com/marklynskey/tic-tac-toe"
      target="_blank"
      mt={6}
      mb={6}
      color="gray"
    >
      View on Github ❤️
    </Link>
  </Center>
);

export default Footer;
