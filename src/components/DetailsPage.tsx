import React from 'react';
import { useParams } from 'react-router-dom';
import useApodForDate from '../hooks/useApodForDate';
import { Box, Text } from '@chakra-ui/react';
import HomeButton from './HomeButton';
import NavBar from './NavBar';
import PictureCard from './PictureCard';
import Footer from './Footer';
import LoadingSpinner from './LoadingSpinner';

interface DetailProps {
  startDate: Date | null;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

const DetailsPage = ({ startDate, setStartDate }: DetailProps) => {
  const { date } = useParams<{ date: string }>();
  if (!date) return <p>Date not provided!</p>;

  const { data: apodItem, isLoading, error } = useApodForDate(date);

  if (isLoading) {
    return (
      <>
        <HomeButton setStartDate={setStartDate} />
        <NavBar startDate={startDate} setStartDate={setStartDate} />
        <LoadingSpinner />;
      </>
    );
  }

  if (error) {
    return (
      <Box>
        <HomeButton setStartDate={setStartDate} />
        <NavBar startDate={startDate} setStartDate={setStartDate} />
        <Text fontWeight="bold" mt={18} h={'100%'} textAlign="center">
          Oops! An error occurred! 🤷‍♂️
        </Text>
      </Box>
    );
  }

  if (!apodItem) {
    return (
      <Box>
        <HomeButton setStartDate={setStartDate} />
        <NavBar startDate={startDate} setStartDate={setStartDate} />
        <Text fontWeight="bold" mt={18} h={'100%'} textAlign="center">
          Oops! This page is missing! 🤷‍♂️
        </Text>
      </Box>
    );
  }

  return (
    <Box>
      <HomeButton setStartDate={setStartDate} />
      <NavBar startDate={startDate} setStartDate={setStartDate} />
      <PictureCard
        title={apodItem.title}
        imageUrl={apodItem.url}
        date={apodItem.date}
        explanation={apodItem.explanation}
        hdUrl={apodItem.hdurl}
        copyright={apodItem.copyright}
      />
      <Box mt={2}>
        <NavBar startDate={startDate} setStartDate={setStartDate} />
        <Footer />
      </Box>
    </Box>
  );
};

export default DetailsPage;
