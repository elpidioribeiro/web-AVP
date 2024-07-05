import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} /> {/* Caminho em minúsculas */}
        <Route path="/register" element={<Register />} /> {/* Caminho em minúsculas */}
      </Routes>
    </Router>
  );
}

export default App;
