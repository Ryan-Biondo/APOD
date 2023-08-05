import useData from "./useData";
import { API_KEY } from '../services/api-client'; 

export interface Apod {
    date: string;
    explanation: string;
    title: string;
    hdurl: string;
    url: string;
    concepts?: string[];
    concept_tags: boolean;
    copyright?: string;
}

const useApod = () => {
  const url = `apod?api_key=${API_KEY}&date=2014-10-01`; 
  
  return useData<Apod>(url);
};

export default useApod;
