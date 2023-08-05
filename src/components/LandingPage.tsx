import { Grid } from '@chakra-ui/react';
import LandingCard from './LandingCard';
import useApod from '../hooks/useApod';
import ThemeToggleButton from './ThemeToggleButton';

const LandingPage = () => {
  const { data, error, isLoading } = useApod();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <ThemeToggleButton />
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {data.map((item) => (
          <LandingCard
            key={item.date}
            date={item.date}
            imageUrl={item.url}
            title={item.title}
          />
        ))}
      </Grid>
    </>
  );
};

export default LandingPage;
