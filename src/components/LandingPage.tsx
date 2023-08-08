import {
  Grid,
  HStack,
  Link,
  Text,
  VStack,
  useBreakpointValue,
  useColorMode,
  useTheme,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import useApod from '../hooks/useApod';
import LoadingSpinner from './LoadingSpinner';
import ApodHeading from './ApodHeading';
import ThemeToggleButton from './ThemeToggleButton';
import Calendar from './Calendar';
import LandingCard from './LandingCard';

interface LandingPageProps {
  startDate: Date | null;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

const LandingPage = ({ startDate, setStartDate }: LandingPageProps) => {
  const { data, error, isLoading } = useApod();
  const { colorMode } = useColorMode();
  const theme = useTheme();
  const navigate = useNavigate();

  const handleDateClick = (selectedDate: Date) => {
    const adjustedDate = new Date(selectedDate);
    adjustedDate.setMinutes(
      adjustedDate.getMinutes() + adjustedDate.getTimezoneOffset()
    );

    setStartDate(adjustedDate); // Set the shared state
    navigate(`/details/${adjustedDate.toISOString().split('T')[0]}`);
  };

  const gridTemplateColumns = useBreakpointValue({
    base: '1fr',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
    xl: 'repeat(5, 1fr)',
  });

  if (isLoading) return <LoadingSpinner />;
  if (error) return <p>Error: {error}</p>;
  const reversedData = [...data].reverse();

  return (
    <>
      <VStack spacing={4} alignItems="start" mb="6">
        <HStack justifyContent={'space-between'} w="100%">
          <ApodHeading />
          <ThemeToggleButton />
        </HStack>
        <Text
          width="100%"
          p={2}
          borderRadius={'lg'}
          bg={
            colorMode === 'dark'
              ? theme.colors.gray[900]
              : theme.colors.gray[100]
          }
          color={
            colorMode === 'dark'
              ? theme.colors.gray[100]
              : theme.colors.gray[900]
          }>
          Explore the collection of astronomy pictures sourced from{' '}
          <Link
            href="https://apod.nasa.gov/apod/"
            target="_blank"
            textDecoration="underline"
            color="teal.500">
            NASA
          </Link>
          , with updates at 12:00 AM UTC every day! Use the date picker below to
          navigate to a specific date as far back as June 16, 1995.
        </Text>

        <Calendar startDate={startDate} setStartDate={setStartDate} />
      </VStack>
      <Grid templateColumns={gridTemplateColumns} gap={6}>
        {reversedData.map((item) => (
          <LandingCard
            key={item.date}
            date={item.date}
            imageUrl={item.url}
            title={item.title}
            onClick={() => handleDateClick(new Date(item.date))}
          />
        ))}
      </Grid>
    </>
  );
};

export default LandingPage;
