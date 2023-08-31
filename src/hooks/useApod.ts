import { useQuery } from 'react-query';
import { ApodResponse } from '../entities/Data';
import axios, { API_KEY } from '../services/api-client';

const formatDate = (date: Date): string => 
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

const useApod = () => {
  const currentDate = new Date();
  const endDate = new Date(Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate() + 1));
  const startDate = new Date(endDate.getTime() - (20 * 24 * 60 * 60 * 1000)); // 20 days ago in milliseconds

  const url = `apod?start_date=${formatDate(startDate)}&end_date=${formatDate(endDate)}`;

  return useQuery<ApodResponse>(
    ['apod', API_KEY, startDate, endDate],
    async () => {
      const { data } = await axios.get(url);
      return data;
    }
  );
};

export default useApod;
