import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import DetailPage from './components/DetailPage';
import { Box, ChakraProvider, useColorMode } from '@chakra-ui/react';
import StarryNight from './components/StarryNight';
import './App.css';
import theme from './theme';

const App = () => {
  const { colorMode } = useColorMode();

  return (
    <ChakraProvider theme={theme}>
      <div className="app-container">
        <StarryNight />
        <Box padding={5} bg={theme.colors.background[colorMode]}>
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/details/:date" element={<DetailPage />} />
            </Routes>
          </Router>
        </Box>
      </div>
    </ChakraProvider>
  );
};

export default App;
