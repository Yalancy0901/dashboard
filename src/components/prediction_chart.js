import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TestChart = () => {
  const [chartUrl, setChartUrl] = useState("");
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchChart = async () => {
      try {
        console.log("Fetching chart...");
        const response = await axios.get('http://127.0.0.1:5000/chart', {
          responseType: 'blob',
        });
        if (response.status === 200) {
          const imageUrl = URL.createObjectURL(response.data);
          console.log("Generated Image URL:", imageUrl);
          setChartUrl(imageUrl);
        } else {
          console.error("Unexpected response status:", response.status);
          setError("Failed to fetch the chart. Please try again.");
        }
      } catch (error) {
        console.error("Error fetching the chart:", error);
        setError("Error fetching the chart. Please check the server.");
      }
    };

    fetchChart();
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Chart Test</h1>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : chartUrl ? (
        <img
          src={chartUrl}
          alt="Chart"
          style={{
            maxWidth: '100%',
            height: 'auto',
            border: '1px solid #ccc',
            borderRadius: '8px',
            marginTop: '20px',
          }}
        />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
};

export default TestChart;
