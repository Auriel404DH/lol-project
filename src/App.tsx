import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainLayout from './components/mainLayout/MainLayout';
import MainPage from './pages/mainP/MainPage';
import TestPage from './pages/testP/TestPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
