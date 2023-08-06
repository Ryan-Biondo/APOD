import { Button, HStack, useColorMode, useTheme } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ThemeToggleButton from './ThemeToggleButton';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import useDateNavigation from '../hooks/useDateNavigation';
import Calendar from './Calendar';

interface NavProps {
  startDate: Date | null;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

const NavBar = ({ startDate, setStartDate }: NavProps) => {
  const { colorMode } = useColorMode();
  const theme = useTheme();
  const {
    navigateToPreviousDate,
    navigateToNextDate,
    isAtStartDate,
    isAtEndDate,
  } = useDateNavigation();

  const handlePreviousClick = () => {
    const newDate = navigateToPreviousDate();
    if (newDate) {
      setStartDate(newDate);
      console.log('Navigated to:', newDate);
    }
  };

  const handleNextClick = () => {
    const newDate = navigateToNextDate();
    if (newDate) {
      setStartDate(newDate);
      console.log('Navigated to:', newDate);
    }
  };

  return (
    <>
      <HStack justifyContent={'space-between'} mb={3}>
        <Link to="/">
          <Button
            onClick={() => setStartDate(new Date())}
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
          onClick={handlePreviousClick}
          leftIcon={<ChevronLeftIcon />}
          isDisabled={isAtStartDate}
          colorScheme="blue">
          Previous
        </Button>
        <Calendar startDate={startDate} setStartDate={setStartDate} />
        <Button
          onClick={handleNextClick}
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
