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
      width="100vw"
      position="relative"
      right="50px">
      <BiPlanet className="rotate-icon" size="200px" fill="#D4B0FF" />
    </Box>
  );
};

export default LoadingSpinner;
