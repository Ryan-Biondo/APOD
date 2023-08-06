import { Box } from '@chakra-ui/react';
import { BiPlanet } from 'react-icons/bi';
import '../App.css';

const LoadingSpinner = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100vw">
      <BiPlanet className="rotate-icon" size="10em" fill="#D4B0FF" />
    </Box>
  );
};

export default LoadingSpinner;
