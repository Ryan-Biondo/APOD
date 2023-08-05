import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import DetailPage from './components/DetailPage';
import { Box, ChakraProvider } from '@chakra-ui/react';
import './App.css';
import theme from './theme';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box padding={5}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/details/:date" element={<DetailPage />} />
          </Routes>
        </Router>
      </Box>
    </ChakraProvider>
  );
};

export default App;
