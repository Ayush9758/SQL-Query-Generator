import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing/index.jsx';
import MainLayout from './layouts/index.jsx';
import Dashboard from './pages/Dashboard/index.jsx';
import Playground from './pages/Playground/index.jsx';
import History from './pages/History/index.jsx';
import Analytics from './pages/Analytics/index.jsx';
import Profile from './pages/Profile/index.jsx';
import Settings from './pages/Settings/index.jsx';
import NotFound from './pages/NotFound/index.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="playground" element={<Playground />} />
          <Route path="history" element={<History />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
