import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import {
  Home as HomeIcon,
  Report as ReportIcon,
  Assignment as AssignmentIcon,
  MedicalServices as MedicalIcon,
  Security as SecurityIcon,
  Accessible as AccessibleIcon,
  WatchLater as PunctualityIcon,
  Water as WaterIcon,
  Restaurant as CateringIcon,
  Group as BehaviorIcon,
  Gavel as CorruptionIcon,
  Category as MiscellaneousIcon,
  Train as TrainIcon,

} from '@mui/icons-material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Sidebar = () => {
  const navigate = useNavigate();

  const mainMenuItems = [
    { label: 'Reports', icon: <ReportIcon />, path: '/reports' },
    { label: 'All Complaints', icon: <AssignmentIcon />, path: '/complaints' },
    { label: 'System Works', icon: <HomeIcon />, path: '/system-works' },
    { label: 'Trains', icon: <TrainIcon />, path: '/trains' },
    { label: 'Stations', icon: <LocationOnIcon />, path: '/stations' },
  ];

  const departmentItems = [
    { label: 'Coach Cleanliness', icon: <HomeIcon /> },
    { label: 'Medical Assistance', icon: <MedicalIcon /> },
    { label: 'Security', icon: <SecurityIcon /> },
    { label: 'Divyangjan Facilities', icon: <AccessibleIcon /> },
    { label: 'Punctuality', icon: <PunctualityIcon /> },
    { label: 'Water Availability', icon: <WaterIcon /> },
    { label: 'Catering & Vending Services', icon: <CateringIcon /> },
    { label: 'Staff Behaviour', icon: <BehaviorIcon /> },
    { label: 'Corruption/Bribery', icon: <CorruptionIcon /> },
    { label: 'Miscellaneous', icon: <MiscellaneousIcon /> },
  ];

  return (
    <Box
      sx={{
        flex: 1,
        bgcolor: '#333',
        color: '#fff',
        minHeight: '100vh',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
      }}
    > 

      <List>
        {mainMenuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={() => navigate(item.path)}
            sx={{
              color: '#fff',
              '&:hover': { backgroundColor: '#444' },
            }}
          >
            <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 2, bgcolor: '#555' }} />

      <Typography variant="caption" sx={{ color: '#888', mb: 1 }}>DEPARTMENTS</Typography>

      <List>
        {departmentItems.map((item, index) => (
          <ListItem
            button
            key={index}
            sx={{
              color: '#fff',
              '&:hover': { backgroundColor: '#444' },
            }}
          >
            <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
