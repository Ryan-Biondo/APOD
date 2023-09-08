import { useQuery } from 'react-query';
import { ApodItem } from '../entities/Data';
import apiClient from '../services/api-client';

const useApodForDate = (date: string) => {
  return useQuery<ApodItem, Error>(
    ['apodForDate', date],
    async () => {
      // Make a request to your proxy server with the new specific date endpoint
      const apiResponse = await apiClient.get<ApodItem>(`/forward-to-nasa/apod/${date}`);

      return apiResponse.data;
    },
    {
      enabled: Boolean(date),
    }
  );
};

export default useApodForDate;
