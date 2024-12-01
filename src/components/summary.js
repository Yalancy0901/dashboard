import React from 'react';
import { Box, Grid, Typography, Card, CardContent } from '@mui/material';
import TestChart from './prediction'

const Dashboard = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Rail Madad 2.0</Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card sx={{ bgcolor: '#1e88e5', color: '#fff' }}>
            <CardContent>
              <Typography variant="h5">34 Total</Typography>
              <Typography>Complaints</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ bgcolor: '#e53935', color: '#fff' }}>
            <CardContent>
              <Typography variant="h5">8 (New)</Typography>
              <Typography>Complaints</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ bgcolor: '#43a047', color: '#fff' }}>
            <CardContent>
              <Typography variant="h5">8 Active</Typography>
              <Typography>Complaints</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ bgcolor: '#9e9e9e', color: '#fff' }}>
            <CardContent>
              <Typography variant="h5">18 Closed</Typography>
              <Typography>Complaints</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <TestChart></TestChart>
      <Grid container spacing={2} sx={{ mt: 4 }}>
        {['Website', 'Mobile App', 'IVR', 'Twitter'].map((platform, index) => (
          <Grid item xs={3} key={index}>
            <Card sx={{ bgcolor: index === 0 ? '#42a5f5' : index === 1 ? '#66bb6a' : index === 2 ? '#ffca28' : '#ef5350', color: '#fff' }}>
              <CardContent>
                <Typography variant="h6">{platform}</Typography>
                <Typography>29 Complaints (36%)</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
