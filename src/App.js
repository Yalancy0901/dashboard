// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Dashboard from './components/summary';
import { Box } from '@mui/material';

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Box sx={{ width: '20%', bgcolor: '#333' }}>
          <Sidebar />
        </Box>
        <Box sx={{ width: '80%', bgcolor: '#333', color: '#fff', padding: '16px' }}>
          <Routes>
            <Route path="/" element={<Navigate to="/reports" replace />} />
            <Route path="/reports" element={<Dashboard />} />
            {/* Add other routes here if needed */}
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;

