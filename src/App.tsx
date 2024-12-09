import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import AnalyticsDashboard from './components/AnalyticsDashboard.tsx';
import UserManagementDashboard from './components/UserManagementDashboard.tsx';
import LoginPage from './pages/LoginPage.tsx';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token') !== null;
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const DashboardLayout: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<'users' | 'analytics'>('users');

  const buttonClass = (isActive: boolean) => `
    px-4 py-2 mx-2 rounded transition-colors duration-200 
    ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}
  `;

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex justify-between items-center mb-4 p-4 bg-white shadow">
        <div className="flex justify-center">
          <button 
            className={buttonClass(activeComponent === 'users')}
            onClick={() => setActiveComponent('users')}
          >
            User Management
          </button>
          <button 
            className={buttonClass(activeComponent === 'analytics')}
            onClick={() => setActiveComponent('analytics')}
          >
            Analytics
          </button>
        </div>
        <button 
          onClick={handleLogout} 
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
      
      <div className="container mx-auto flex-grow p-4">
        {activeComponent === 'users' ? (
          <UserManagementDashboard />
        ) : (
          <AnalyticsDashboard />
        )}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route 
          path="/" 
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;