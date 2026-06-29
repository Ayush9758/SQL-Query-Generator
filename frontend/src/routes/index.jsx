import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/index.jsx';

import Landing from '../pages/Landing/index.jsx';
import Login from '../pages/Login/index.jsx';
import Register from '../pages/Register/index.jsx';
import Dashboard from '../pages/Dashboard/index.jsx';
import Playground from '../pages/Playground/index.jsx';
import History from '../pages/History/index.jsx';
import Analytics from '../pages/Analytics/index.jsx';
import Profile from '../pages/Profile/index.jsx';
import Settings from '../pages/Settings/index.jsx';
import NotFound from '../pages/NotFound/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'playground', element: <Playground /> },
      { path: 'history', element: <History /> },
      { path: 'analytics', element: <Analytics /> },
      { path: 'profile', element: <Profile /> },
      { path: 'settings', element: <Settings /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
