import { Box, ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import DetailPage from './components/DetailsPage';
import LandingPage from './components/LandingPage';
import StarryNight from './components/StarryNight';
import theme from './theme';

const queryClient = new QueryClient();

const App = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Box className="app-container">
          <StarryNight />
          <Box padding={'15px 30px 0'}>
            <Router>
              <Routes>
                <Route
                  path="/"
                  element={
                    <LandingPage
                      startDate={startDate}
                      setStartDate={setStartDate}
                    />
                  }
                />
                <Route
                  path="/details/:date"
                  element={
                    <DetailPage
                      startDate={startDate}
                      setStartDate={setStartDate}
                    />
                  }
                />
              </Routes>
            </Router>
          </Box>
        </Box>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
