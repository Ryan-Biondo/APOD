import { useParams } from 'react-router-dom';
import PictureCard from './PictureCard';
import NavBar from './NavBar';
import useApodForDate from '../hooks/useApodForDate';
import { Box } from '@chakra-ui/react';
import LoadingSpinner from './LoadingSpinner';
import HomeButton from './HomeButton';

interface DetailProps {
  startDate: Date | null;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

const DetailsPage = ({ startDate, setStartDate }: DetailProps) => {
  const { date } = useParams<{ date: string }>();
  if (!date) return <p>Date not provided!</p>;
  const { apodItem, isLoading, error } = useApodForDate(date);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <p>Error: {error}</p>;

  return (
    <Box>
      <HomeButton setStartDate={setStartDate} />
      <NavBar startDate={startDate} setStartDate={setStartDate} />
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
    </Box>
  );
};

export default DetailsPage;
