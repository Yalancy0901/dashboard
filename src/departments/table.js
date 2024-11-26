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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const DepartmentComplaints = ({ department, fetchDepartmentData }) => {
  const [complaints, setComplaints] = useState([]);
  const [selectedComplaint, setSelectedComplaint] = useState(null); // State for selected complaint
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [summary, setSummary] = useState({ active: 0, closed: 0 });

  useEffect(() => {
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

  const handleRowClick = (complaint) => {
    setSelectedComplaint(complaint); // Set the clicked complaint
  };

  const handleCloseDialog = () => {
    setSelectedComplaint(null); // Close the popup
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
              <TableRow
                key={complaint.id}
                onClick={() => handleRowClick(complaint)} // Handle row click
                sx={{ cursor: "pointer", "&:hover": { bgcolor: "#555" } }}
              >
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

      {/* Dialog for Complaint Details */}
{selectedComplaint && (
  <Dialog open={Boolean(selectedComplaint)} onClose={handleCloseDialog} fullWidth maxWidth="md">
    <DialogTitle>
      Complaint Details: {selectedComplaint.title}
    </DialogTitle>
    <DialogContent>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>Complainant Details</Typography>
          <Typography variant="body1"><strong>Name:</strong> {selectedComplaint.complainant?.name || "N/A"}</Typography>
          <Typography variant="body1"><strong>Contact:</strong> {selectedComplaint.complainant?.contact || "N/A"}</Typography>
          <Typography variant="body1"><strong>Reference No:</strong> {selectedComplaint.referenceNumber || "N/A"}</Typography>
          <Typography variant="body1"><strong>Incident Date:</strong> {selectedComplaint.incidentDate || "N/A"}</Typography>
          <Typography variant="body1"><strong>Complaint Mode:</strong> {selectedComplaint.mode || "N/A"}</Typography>
          <Typography variant="body1"><strong>Complaint Description:</strong> {selectedComplaint.description || "N/A"}</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>Train and Staff Details</Typography>
          <Typography variant="body1"><strong>Train No:</strong> {selectedComplaint.train?.number || "N/A"}</Typography>
          <Typography variant="body1"><strong>Coach No:</strong> {selectedComplaint.coach?.number || "N/A"}</Typography>
          <Typography variant="body1"><strong>Berth No:</strong> {selectedComplaint.coach?.berth || "N/A"}</Typography>
          <Typography variant="body1"><strong>From Station:</strong> {selectedComplaint.train?.fromStation || "N/A"}</Typography>
          <Typography variant="body1"><strong>To Station:</strong> {selectedComplaint.train?.toStation || "N/A"}</Typography>
          
          {/* Staff Details Section */}
          <Typography variant="h6" sx={{ mt: 2 }}>Onboard Staff</Typography>
          <Box sx={{ bgcolor: "#555", p: 2, borderRadius: 2, mt: 1 }}>
            <Typography variant="body2"><strong>Name:</strong> {selectedComplaint.staff?.name || "N/A"}</Typography>
            <Typography variant="body2"><strong>Mobile:</strong> {selectedComplaint.staff?.contact || "N/A"}</Typography>
            <Typography variant="body2"><strong>Remarks:</strong> {selectedComplaint.staff?.remarks || "Pending"}</Typography>
          </Box>
        </Grid>

        {/* Registration and History Details */}
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ mt: 3 }}>Registration Details</Typography>
          <Typography variant="body1"><strong>Registered On:</strong> {selectedComplaint.registrationDetails?.date || "N/A"} at {selectedComplaint.registrationDetails?.time || "N/A"}</Typography>
          <Typography variant="body1"><strong>Train Depot:</strong> {selectedComplaint.registrationDetails?.trainDepot || "N/A"}</Typography>
          <Typography variant="body1"><strong>Upcoming Station:</strong> {selectedComplaint.registrationDetails?.upcomingStation || "N/A"}</Typography>
          <Typography variant="body1"><strong>OBHS:</strong> {selectedComplaint.registrationDetails?.obhs || "N/A"}</Typography>

          {/* History Section */}
          <Typography variant="h6" sx={{ mt: 3 }}>History</Typography>
          <Typography variant="body1"><strong>Action By:</strong> {selectedComplaint.history?.actionBy || "N/A"}</Typography>
          <Typography variant="body1"><strong>Action Date:</strong> {selectedComplaint.history?.actionDate || "N/A"}</Typography>
          <Typography variant="body1"><strong>Status:</strong> {selectedComplaint.history?.status || "N/A"}</Typography>
        </Grid>
      </Grid>
    </DialogContent>

    <DialogActions>
      <Button onClick={handleCloseDialog} color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
)}

    </Box>
  );
};

export default DepartmentComplaints;
