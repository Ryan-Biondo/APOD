import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { API_KEY } from '../services/api-client';
import { ApodItem } from '../hooks/useApod';

const useApodForDate = (date: string) => {
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

  return { apodItem, isLoading, error };
};

export default useApodForDate;
