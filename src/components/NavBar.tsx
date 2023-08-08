import { Button, Flex, HStack } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import useDateNavigation from '../hooks/useDateNavigation';
import Calendar from './Calendar';

interface NavProps {
  startDate: Date | null;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

const NavBar = ({ startDate, setStartDate }: NavProps) => {
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
      <Flex
        direction={['column', 'column', 'row']} // Switch direction based on breakpoints
        justifyContent={'space-between'}
        alignItems={['start', 'start', 'center']} // Adjust alignment for column layout
        gap={3}>
        <HStack spacing={3}>
          <Button
            onClick={handlePreviousClick}
            leftIcon={<ChevronLeftIcon />}
            isDisabled={isAtStartDate}
            colorScheme="blue">
            Previous
          </Button>
          <Button
            onClick={handleNextClick}
            rightIcon={<ChevronRightIcon />}
            isDisabled={isAtEndDate}
            colorScheme="blue">
            Next
          </Button>
        </HStack>
        <Calendar startDate={startDate} setStartDate={setStartDate} />
      </Flex>
    </>
  );
};

export default NavBar;
