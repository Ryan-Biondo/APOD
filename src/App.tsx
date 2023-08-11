import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';
import DetailPage from './components/DetailPage';
import LandingPage from './components/LandingPage';
import StarryNight from './components/StarryNight';
import theme from './theme';
import './App.css';

const App = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
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
  );
};

export default App;
