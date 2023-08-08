import {
  Grid,
  Heading,
  Link,
  Text,
  VStack,
  useBreakpointValue,
  useColorMode,
  useTheme,
} from '@chakra-ui/react';
import LandingCard from './LandingCard';
import useApod from '../hooks/useApod';
import ThemeToggleButton from './ThemeToggleButton';
import Calendar from './Calendar';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
import Footer from './Footer';

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
    navigate(`/details/${adjustedDate.toISOString().split('T')[0]}`); // Navigate to details page
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
        <Heading
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
          Astronomy Picture of the Day Gallery
        </Heading>
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
          <br />
          Created by{' '}
          <Link
            fontWeight={'bold'}
            href="https://www.ryanbiondo.com/"
            target="_blank">
            Ryan Biondo
          </Link>
          .
        </Text>
        <ThemeToggleButton />
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
      <Footer />
    </>
  );
};

export default LandingPage;
