import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Dashboard from './components/summary';
import CoachCleanliness from './departments/coachclean';
import Catering from './departments/catering';
import Header from './components/header';
import WaterAvailability from './departments/waterAvailability';
import Security from './departments/security';
import Medical from './departments/medical';
import StaffBehaviour from './departments/staffBehaviour';
import Punctuality from './departments/punctuality';
import Divyang from './departments/divyang';
import Miscellaneous from './departments/micellaneous';
import CorruptionAndBribery from './departments/corruptionAndBribary';
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
              <Route path="/coach-cleanliness" element={<CoachCleanliness />} />
              <Route path="/catering-services" element={<Catering />} />
              <Route path="/water-availability" element={<WaterAvailability />} />
              <Route path="/security" element={<Security />} />
              <Route path="/medical-assistance" element={<Medical/>} />
              <Route path="/divyangjan-facilities" element={<Divyang/>} />
              <Route path="/punctuality" element={<Punctuality/>} />
              <Route path="/staff-behaviour" element={<StaffBehaviour/>} />
              <Route path="/corruption-bribery" element={<CorruptionAndBribery/>} />
              <Route path="/miscellaneous" element={<Miscellaneous/>} />

            </Routes>
          </Box>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
