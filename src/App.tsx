import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import DetailPage from './components/DetailPage';
import { Box, ChakraProvider, useColorMode } from '@chakra-ui/react';
import StarryNight from './components/StarryNight';
import './App.css';
import theme from './theme';
import { useState } from 'react';

const App = () => {
  const { colorMode } = useColorMode();
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <ChakraProvider theme={theme}>
      <div className="app-container">
        <StarryNight />
        <Box padding={'10px 10px 0'} bg={theme.colors.background[colorMode]}>
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
      </div>
    </ChakraProvider>
  );
};

export default App;
