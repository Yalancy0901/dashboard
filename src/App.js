import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Dashboard from './components/summary';
import Header from './components/header'; // Import the Header component
import { Box } from '@mui/material';

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
       
        <Box sx={{ bgcolor: '#888', borderBottom: '1px solid #555' }}>
          <Header />
        </Box>
        <Box sx={{ display: 'flex', flex: 1 }}>
          <Box sx={{ width: '20%', bgcolor: '#333', borderRight: '1px solid #555' }}>
            <Sidebar />
          </Box>
          <Box sx={{ width: '80%', bgcolor: '#333', color: '#fff', padding: '16px' }}>
            <Routes>
              <Route path="/" element={<Navigate to="/reports" replace />} />
              <Route path="/reports" element={<Dashboard />} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
