import { useInfiniteQuery } from 'react-query';
import axios from '../services/api-client';

const formatDate = (date: Date): string => 
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

const useApod = () => {
    return useInfiniteQuery(
    'apod',
    async ({ pageParam = new Date() }) => {
      const endDate = new Date(pageParam);
      const startDate = new Date(endDate.getTime() - (19 * 24 * 60 * 60 * 1000)); // 19 days ago

      // Use the new forwarding endpoint
      const url = `https://apod-server.onrender.com/forward-to-nasa/apod?start_date=${formatDate(startDate)}&end_date=${formatDate(endDate)}`;

      const { data } = await axios.get(url);
      return data;
    },
    {
      getNextPageParam: (_lastPage, allPages) => {
        const allDates = new Date(allPages[allPages.length - 1][0]?.date);
        
        if (allDates <= new Date('1995-06-16')) {
          return undefined; 
        }
        
        return new Date(allDates.getTime());
      },
    }
  );
};

export default useApod;
