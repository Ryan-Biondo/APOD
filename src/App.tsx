import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import DetailPage from './components/DetailPage';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import theme from './theme';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/details/:date" element={<DetailPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
