import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import CustomTheme from './utils/Theme';
import Footer from './components/Footer';
import TopBar from './components/TopBar';
import HomePage from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PredictionPage from './pages/Prediction';

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={CustomTheme}>
        <TopBar />
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/prediction" element={<PredictionPage/>} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </ThemeProvider>
    </Box>
  )
}

export default App;
