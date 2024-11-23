import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Ensure Navigate is imported
import PrivateRoute from './components/PrivateRoute'; // Adjust import based on your file structure
import Home from './components/HomePage'; // Adjust import based on your file structure
import Login from './components/LoginPage'; // Adjust import based on your file structure
import Register from './components/RegisterPage'; // Adjust import based on your file structure

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
