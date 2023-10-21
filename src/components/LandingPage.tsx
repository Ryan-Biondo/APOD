import {
  Box,
  Grid,
  HStack,
  Link,
  Spinner,
  Text,
  VStack,
  useBreakpointValue,
  useColorMode,
  useTheme,
} from '@chakra-ui/react';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import useApod from '../hooks/useApod';
import ApodHeading from './ApodHeading';
import Calendar from './Calendar';
import Footer from './Footer';
import LandingCard from './LandingCard';
import LoadingSpinner from './LoadingSpinner';
import ThemeToggleButton from './ThemeToggleButton';
import TypingLoader from './TypingLoader';

interface LandingPageProps {
  startDate: Date | null;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

const LandingPage = ({ startDate, setStartDate }: LandingPageProps) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useApod();
  const { colorMode } = useColorMode();
  const theme = useTheme();
  const navigate = useNavigate();
  const allData = React.useMemo(() => {
    return (
      data?.pages
        .flatMap((page) => page)
        .sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        ) || []
    );
  }, [data]);

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

  if (isLoading) {
    return (
      <div className="loader-container">
        <TypingLoader />
        <LoadingSpinner />
      </div>
    );
  }

  if (error instanceof Error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>No data available.</p>;
  }

  return (
    <>
      <VStack spacing={4} alignItems="start" mb="6">
        <HStack justifyContent={'space-between'} w="100%">
          <ApodHeading />
          <ThemeToggleButton />
        </HStack>
        <Text
          width="fit-content"
          p={2}
          borderRadius={'lg'}
          bg={
            colorMode === 'dark'
              ? theme.colors.gray[800]
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
            fontStyle="italic"
            href="https://www.ryanbiondo.com/"
            target="_blank">
            Ryan Biondo.{' '}
          </Link>
        </Text>

        <Calendar startDate={startDate} setStartDate={setStartDate} />
      </VStack>
      <InfiniteScroll
        dataLength={allData.length}
        next={fetchNextPage}
        hasMore={hasNextPage ?? false}
        loader={
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            my={5}>
            <Spinner />
          </Box>
        }>
        <Grid templateColumns={gridTemplateColumns} gap={6}>
          {allData.map((item) => (
            <LandingCard
              key={item.date}
              date={item.date}
              imageUrl={item.url}
              title={item.title}
              onClick={() => handleDateClick(new Date(item.date))}
            />
          ))}
        </Grid>
      </InfiniteScroll>
      <Footer />
    </>
  );
};

export default LandingPage;
