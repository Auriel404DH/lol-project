import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainLayout from './components/mainLayout/MainLayout';
import { MainPage, TestPage, StoryPage } from './pages';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/story" element={<StoryPage />} />
          </Routes>
        </MainLayout>
      </HashRouter>
    </Provider>
  );
};

export default App;
