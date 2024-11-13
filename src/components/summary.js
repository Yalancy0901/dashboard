import React from 'react';
import { Box, Grid, Typography, Card, CardContent } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const data = {
    labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    datasets: [
      { label: 'Website', data: [200, 150, 180, 120, 160, 180, 220], borderColor: '#42a5f5', fill: false },
      { label: 'Mobile App', data: [100, 130, 110, 140, 130, 170, 190], borderColor: '#66bb6a', fill: false },
      { label: 'IVR', data: [50, 90, 70, 100, 90, 110, 130], borderColor: '#ffca28', fill: false },
      { label: 'Twitter', data: [60, 70, 90, 80, 100, 130, 160], borderColor: '#ef5350', fill: false },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

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

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>Complaint Platforms</Typography>
        <Card sx={{ bgcolor: '#333' }}>
          <CardContent>
            <Line data={data} options={options} />
          </CardContent>
        </Card>
      </Box>

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
