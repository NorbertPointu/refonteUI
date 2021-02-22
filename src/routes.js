import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import DashboardView from 'src/views/reports/DashboardView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import RegisterView from 'src/views/auth/RegisterView';
import SettingsView from 'src/views/settings/SettingsView';
import ContractListView from './views/contracts/ContractListView';
import ExemplesView from './views/exemples';
import Table1 from './components/table/Table1';
import TicketDetailV2 from './components/tickets/TicketDetailV2';

const routes = [
  {
    path: '',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'contracts', element: <ContractListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'tickets', element: <TicketDetailV2 /> },
      { path: 'products', element: <Table1 /> },
      { path: 'settings', element: <SettingsView /> },
      { path: 'exemples', element: <ExemplesView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
