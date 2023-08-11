import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import apiClient, { API_KEY } from '../services/api-client';
import { ApodItem } from '../hooks/useApod';

function isAxiosError(error: unknown): error is AxiosError {
  return (error as AxiosError).response !== undefined;
}

const useApodForDate = (date: string) => {
  const [apodItem, setApodItem] = useState<ApodItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApodForDate = async () => {
      try {
        if (apodItem && apodItem.date === date) {
          setIsLoading(false);
          return;
        }
        setError(null);
        setIsLoading(true);

        const response = await axios.get<ApodItem>(`${apiClient.defaults.baseURL}apod`, {
          params: {
            api_key: API_KEY,
            date: date
          }
        });
        setApodItem(response.data);
        setIsLoading(false);
      } catch (err) {
        if (isAxiosError(err)) {
          setError(err.message);
        } else {
          setError('An error occurred');
        }
        setIsLoading(false);
      }
    };

    fetchApodForDate();
  }, [date, apodItem]);

  return { apodItem, isLoading, error };
};

export default useApodForDate;
