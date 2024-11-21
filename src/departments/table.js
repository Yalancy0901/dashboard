import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  TablePagination,
  Grid,
  LinearProgress,
} from "@mui/material";

const DepartmentComplaints = ({ department, fetchDepartmentData }) => {
  const [complaints, setComplaints] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [summary, setSummary] = useState({ active: 0, closed: 0 });

  useEffect(() => {
    // Fetch data for the current department when it changes
    const fetchData = async () => {
      const { records, activeCount, closedCount } = await fetchDepartmentData(department);
      setComplaints(records);
      setSummary({ active: activeCount, closed: closedCount });
    };

    fetchData();
  }, [department, fetchDepartmentData]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const displayedComplaints = complaints.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Box sx={{ bgcolor: "#333", color: "#fff", p: 3, minHeight: "100vh" }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
        {department} Complaints
      </Typography>

      {/* Summary Cards */}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card sx={{ bgcolor: "#1E90FF", color: "#fff" }}>
            <CardContent>
              <Typography variant="h6">{summary.active} Active</Typography>
              <Typography sx={{ color: "#ddd" }}>Complaints</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ bgcolor: "#808080", color: "#fff" }}>
            <CardContent>
              <Typography variant="h6">{summary.closed} Closed</Typography>
              <Typography sx={{ color: "#ddd" }}>Complaints</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Complaints Table */}
      <TableContainer
        component={Paper}
        sx={{ bgcolor: "#444", border: "2px solid #555", borderRadius: 1, mt: 3 }}
      >
        <Table
          sx={{
            "& th": { bgcolor: "#333", color: "#fff", fontWeight: "bold" },
            "& td": { color: "#fff" },
            "& td, & th": { border: "1px solid #555" },
          }}
        >
          <TableHead>
            <TableRow>
              {["S.No", "Title", "Dept", "Sub-Dept", "Severity", "Status", "Issued Date"].map((header, index) => (
                <TableCell key={index} align="center">
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedComplaints.map((complaint, index) => (
              <TableRow key={complaint.id}>
                <TableCell align="center">{index + 1 + page * rowsPerPage}</TableCell>
                <TableCell>{complaint.title}</TableCell>
                <TableCell>{complaint.dept}</TableCell>
                <TableCell>{complaint.subDept}</TableCell>
                <TableCell align="center">
                  <Chip
                    label={complaint.severity}
                    sx={{
                      bgcolor: complaint.severity === "HIGH" ? "red" : "green",
                      color: "#fff",
                    }}
                    size="small"
                  />
                </TableCell>
                <TableCell align="center">
                  <Chip
                    label={complaint.status}
                    sx={{
                      bgcolor: complaint.status === "IN PROGRESS" ? "#FFD700" : "gray",
                      color: "#000",
                    }}
                    size="small"
                  />
                </TableCell>
                <TableCell align="center">{complaint.issuedDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        component="div"
        count={complaints.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ color: "#fff" }}
      />
    </Box>
  );
};

export default DepartmentComplaints;
