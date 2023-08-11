import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useApodForDate from '../hooks/useApodForDate';
import { Box, Text } from '@chakra-ui/react';
import LoadingSpinner from './LoadingSpinner';
import HomeButton from './HomeButton';
import NavBar from './NavBar';
import PictureCard from './PictureCard';
import Footer from './Footer';

interface DetailProps {
  startDate: Date | null;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

const DetailsPage = ({ startDate, setStartDate }: DetailProps) => {
  const { date } = useParams<{ date: string }>();
  if (!date) return <p>Date not provided!</p>;

  // Fetch data using the useApodForDate hook
  const { apodItem, isLoading, error } = useApodForDate(date);

  // State to handle the error
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (error) {
      setHasError(true);
    } else {
      setHasError(false);
    }
  }, [error]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <HomeButton setStartDate={setStartDate} />
      <NavBar startDate={startDate} setStartDate={setStartDate} />
      {hasError ? (
        <Text mt={10} h={'100%'} textAlign="center">
          Oops! This page is missing! 🤷‍♂️
        </Text>
      ) : (
        <>
          <PictureCard
            title={apodItem!.title}
            imageUrl={apodItem!.url}
            date={apodItem!.date}
            explanation={apodItem!.explanation}
            hdUrl={apodItem!.hdurl}
            copyright={apodItem!.copyright}
          />
          <Box mt={2}>
            <NavBar startDate={startDate} setStartDate={setStartDate} />
          </Box>
          <Footer />
        </>
      )}
    </>
  );
};

export default DetailsPage;
