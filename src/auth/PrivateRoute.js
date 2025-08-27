import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/user-login" />;
}
