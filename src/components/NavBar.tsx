import { Button, HStack, theme, useColorMode } from '@chakra-ui/react';
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
  const { colorMode } = useColorMode();

  return (
    <>
      <HStack justifyContent={'space-between'} mb={3}>
        <Link to="/">
          <Button
            borderWidth={1}
            bg={
              colorMode === 'dark'
                ? theme.colors.gray[900]
                : theme.colors.gray[100]
            }
            color={
              colorMode === 'dark'
                ? theme.colors.gray[100]
                : theme.colors.gray[900]
            }
            _hover={{
              bg:
                colorMode === 'dark'
                  ? theme.colors.gray[800]
                  : theme.colors.gray[200],
            }}>
            Home
          </Button>
        </Link>
        <ThemeToggleButton />
      </HStack>
      <HStack justifyContent={'space-between'}>
        <Button
          onClick={navigateToPreviousDate}
          leftIcon={<ChevronLeftIcon />}
          isDisabled={isAtStartDate}
          colorScheme="blue">
          Previous
        </Button>
        <Button
          onClick={navigateToNextDate}
          rightIcon={<ChevronRightIcon />}
          isDisabled={isAtEndDate}
          colorScheme="blue">
          Next
        </Button>
      </HStack>
    </>
  );
};

export default NavBar;
