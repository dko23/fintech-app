import React from 'react';
import { Navigate, Route } from 'react-router-dom';

function PrivateRoute({ element, isAuthenticated, ...rest }) {
  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/SignIn" replace />
  );
}

export default PrivateRoute;
