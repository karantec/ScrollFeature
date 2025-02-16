import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import SignIn from "./components/Sign";
import Dashboards from "./components/Dashboards";
import { AuthProvider, useAuth } from "./AuthContext";

const PrivateRoute = ({ element }) => {
  const { user } = useAuth();
  return user ? element : <Navigate to="/" replace />;
};

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboards />} />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
