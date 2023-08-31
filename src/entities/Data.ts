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
  
  export type ApodResponse = ApodItem[];