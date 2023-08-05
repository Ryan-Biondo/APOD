import { useParams } from 'react-router-dom';
import PictureCard from './PictureCard';
import NavBar from './NavBar';
import useApodForDate from '../hooks/useApodForDate';

const DetailsPage = () => {
  const { date } = useParams<{ date: string }>();

  if (!date) return <p>Date not provided!</p>;
  const { apodItem, isLoading, error } = useApodForDate(date);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <NavBar />
      <PictureCard
        title={apodItem!.title}
        imageUrl={apodItem!.url}
        date={apodItem!.date}
        explanation={apodItem!.explanation}
        hdUrl={apodItem!.hdurl}
        copyright={apodItem!.copyright}
      />
    </>
  );
};

export default DetailsPage;
