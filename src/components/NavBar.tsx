import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ThemeToggleButton from './ThemeToggleButton';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <Button colorScheme="blue" size="md">
          Home
        </Button>
      </Link>
      <ThemeToggleButton />
    </nav>
  );
};

export default NavBar;
