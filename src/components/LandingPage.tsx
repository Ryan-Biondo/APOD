import {
  Grid,
  Heading,
  VStack,
  theme,
  useBreakpointValue,
  useColorMode,
} from '@chakra-ui/react';
import LandingCard from './LandingCard';
import useApod from '../hooks/useApod';
import ThemeToggleButton from './ThemeToggleButton';

const LandingPage = () => {
  const { data, error, isLoading } = useApod();
  const { colorMode } = useColorMode();

  const gridTemplateColumns = useBreakpointValue({
    base: '1fr',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
    xl: 'repeat(5, 1fr)',
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  const reversedData = [...data].reverse();

  return (
    <>
      <VStack spacing={4} alignItems="start" mb="6">
        <Heading
          p={2}
          borderRadius={'lg'}
          bg={
            colorMode === 'dark'
              ? theme.colors.gray[900]
              : theme.colors.gray[100]
          }
          color={
            colorMode === 'dark'
              ? theme.colors.gray[100]
              : theme.colors.gray[900]
          }
          _hover={{
            bg:
              colorMode === 'dark'
                ? theme.colors.gray[800]
                : theme.colors.gray[200],
          }}>
          Astronomy Picture of the Day Gallery
        </Heading>
        <ThemeToggleButton />
      </VStack>
      <Grid templateColumns={gridTemplateColumns} gap={6}>
        {reversedData.map((item) => (
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
