import useData from "./useData";
import { API_KEY } from '../services/api-client'; 

export interface ApodItem {
  date: string;
  explanation: string;
  title: string;
  hdurl: string;
  url: string;
  concepts?: string[];
  concept_tags: boolean;
  copyright?: string;
}

export interface ApodResponse {
  count?: number; 
  results: ApodItem[];
}


const formatDate = (date: Date): string => 
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

const useApod = () => {
  const endDate = new Date();
  const startDate = new Date(endDate.getTime() - (19 * 24 * 60 * 60 * 1000)); // 19 days ago in milliseconds

  const url = `apod?api_key=${API_KEY}&start_date=${formatDate(startDate)}&end_date=${formatDate(endDate)}`; 
  
  return useData<ApodItem>(url);
};


export default useApod;
