import { useInfiniteQuery } from 'react-query';
import axios, { API_KEY } from '../services/api-client';

const formatDate = (date: Date): string => 
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

  const useApod = () => {
    return useInfiniteQuery(
      'apod',
      async ({ pageParam = new Date() }) => {
        const endDate = new Date(pageParam);
        const startDate = new Date(endDate.getTime() - (19 * 24 * 60 * 60 * 1000)); // 19 days ago
        const url = `apod?start_date=${formatDate(startDate)}&end_date=${formatDate(endDate)}&api_key=${API_KEY}`;
        const { data } = await axios.get(url);
        return data;
      },
      {
        getNextPageParam: (lastPage, allPages) => {
          const lastDate = new Date(allPages[allPages.length - 1][0]?.date);
          
          if (lastDate <= new Date('1995-06-16')) {
            return undefined; 
          }
          
          return new Date(lastDate.getTime());
        },
      }
    );
  };
  


export default useApod;
