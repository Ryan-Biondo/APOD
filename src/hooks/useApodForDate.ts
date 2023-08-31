import { useQuery } from 'react-query';
import { ApodItem } from '../entities/Data';
import axios, { API_KEY } from '../services/api-client';

const useApodForDate = (date: string) => {
  return useQuery<ApodItem, Error>(
    ['apodForDate', API_KEY, date],
    async () => {
      const response = await axios.get<ApodItem>(`apod`, {
        params: {
          api_key: API_KEY,
          date: date,
        },
      });
      return response.data;
    },
    {
      enabled: Boolean(date),
    }
  );
};

export default useApodForDate;
