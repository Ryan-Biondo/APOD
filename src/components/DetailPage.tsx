import { useParams } from 'react-router-dom';
import PictureCard from './PictureCard';
import NavBar from './NavBar';
import useApodForDate from '../hooks/useApodForDate';
import { Box } from '@chakra-ui/react';

const DetailsPage = () => {
  const { date } = useParams<{ date: string }>();

  if (!date) return <p>Date not provided!</p>;
  const { apodItem, isLoading, error } = useApodForDate(date);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Box maxW="900px" mx="auto">
      <NavBar />
      <PictureCard
        title={apodItem!.title}
        imageUrl={apodItem!.url}
        date={apodItem!.date}
        explanation={apodItem!.explanation}
        hdUrl={apodItem!.hdurl}
        copyright={apodItem!.copyright}
      />
    </Box>
  );
};

export default DetailsPage;
