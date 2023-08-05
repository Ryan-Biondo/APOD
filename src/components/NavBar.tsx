import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <Button colorScheme="blue" size="md">
          Home
        </Button>
      </Link>
    </nav>
  );
};

export default NavBar;
