import { Button, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ThemeToggleButton from './ThemeToggleButton';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import useDateNavigation from '../hooks/useDateNavigation';

const NavBar = () => {
  const {
    navigateToPreviousDate,
    navigateToNextDate,
    isAtStartDate,
    isAtEndDate,
  } = useDateNavigation();

  return (
    <>
      <HStack justifyContent={'space-between'} mb={3}>
        <Link to="/">
          <Button colorScheme="blue">Home</Button>
        </Link>
        <ThemeToggleButton />
      </HStack>
      <HStack justifyContent={'space-between'}>
        <Button
          onClick={navigateToPreviousDate}
          leftIcon={<ChevronLeftIcon />}
          variant="outline"
          isDisabled={isAtStartDate}>
          Previous
        </Button>
        <Button
          onClick={navigateToNextDate}
          rightIcon={<ChevronRightIcon />}
          variant="outline"
          isDisabled={isAtEndDate}>
          Next
        </Button>
      </HStack>
    </>
  );
};

export default NavBar;
