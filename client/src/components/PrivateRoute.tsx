import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const isAuthenticated = Boolean(localStorage.getItem('authToken')); // Replace with your actual authentication check

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
