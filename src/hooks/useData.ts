import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

const useData = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await apiClient.get<T>(url);
        setData(response.data);
        setIsLoading(false);
      } catch (err) {
        setError(new Error((err as Error).message || "An unknown error occurred"));
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useData;
