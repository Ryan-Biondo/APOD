import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PictureCard from './PictureCard';
import apiClient from '../services/api-client';
import { API_KEY } from '../services/api-client';
import { ApodItem } from '../hooks/useApod';
import NavBar from './NavBar';

const DetailsPage = () => {
  const { date } = useParams<{ date: string }>();

  const [apodItem, setApodItem] = useState<ApodItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApodForDate = async () => {
      try {
        const response = await apiClient.get<ApodItem>(
          `apod?api_key=${API_KEY}&date=${date}`
        );
        setApodItem(response.data);
        setIsLoading(false);
      } catch (err) {
        setError((err as Error).message);
        setIsLoading(false);
      }
    };

    fetchApodForDate();
  }, [date]);

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
