import { Button, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ThemeToggleButton from './ThemeToggleButton';

const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'}>
      <Link to="/">
        <Button colorScheme="blue" size="lg">
          Home
        </Button>
      </Link>
      <ThemeToggleButton />
    </HStack>
  );
};

export default NavBar;
