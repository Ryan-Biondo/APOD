import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Button, Flex, HStack } from '@chakra-ui/react';
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
    }
  };

  const handleNextClick = () => {
    const newDate = navigateToNextDate();
    if (newDate) {
      setStartDate(newDate);
    }
  };

  return (
    <>
      <Flex
        direction={['column', 'column', 'row']} // Switch direction based on breakpoints
        justifyContent={'space-between'}
        alignItems={'center'} // Adjust alignment for column layout
        gap={3}
        mt={12}>
        <HStack spacing={3}>
          <Button
            onClick={handlePreviousClick}
            leftIcon={<ChevronLeftIcon />}
            isDisabled={isAtStartDate}
            colorScheme="blue"
            size={{ base: 'md', sm: 'lg' }}>
            Previous
          </Button>
          <Button
            onClick={handleNextClick}
            rightIcon={<ChevronRightIcon />}
            isDisabled={isAtEndDate}
            colorScheme="blue"
            size={{ base: 'md', sm: 'lg' }}>
            Next
          </Button>
        </HStack>
        <Calendar startDate={startDate} setStartDate={setStartDate} />
      </Flex>
    </>
  );
};

export default NavBar;
