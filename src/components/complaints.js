import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  TablePagination,
} from "@mui/material";

const fetchAllComplaints = async () => {
  // Mock API call combining data from all departments
  return [
    {
      id: 1,
      title: "Certainly mean black.",
      dept: "Coach Cleanliness",
      subDept: "Washbasin",
      severity: "HIGH",
      status: "IN PROGRESS",
      issuedDate: "2024-01-08",
      days: 247,
    },
    {
      id: 2,
      title: "Missing water bottle.",
      dept: "Water Availability",
      subDept: "Coach Interior",
      severity: "MEDIUM",
      status: "PENDING",
      issuedDate: "2024-08-10",
      days: 28,
    },
    {
      id: 3,
      title: "Delayed train arrival.",
      dept: "Punctuality",
      subDept: "Schedule",
      severity: "HIGH",
      status: "RESOLVED",
      issuedDate: "2024-03-22",
      days: 180,
    },
    {
      id: 4,
      title: "Staff misbehavior reported.",
      dept: "Staff Behavior",
      subDept: "Train Staff",
      severity: "HIGH",
      status: "IN PROGRESS",
      issuedDate: "2024-07-15",
      days: 60,
    },
  ];
};

const AllComplaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAllComplaints();
      setComplaints(data);
    };
    fetchData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const displayedComplaints = complaints.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box sx={{ bgcolor: "#333", color: "#fff", p: 3, minHeight: "100vh" }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
        All Complaints
      </Typography>

      <TableContainer
        component={Paper}
        sx={{
          bgcolor: "#444",
          border: "2px solid #555",
          borderRadius: 1,
        }}
      >
        <Table
          sx={{
            "& td, & th": { border: "1px solid #555" },
            "& th": { bgcolor: "#333", color: "#fff", fontWeight: "bold" },
            "& td": { color: "#fff" },
          }}
        >
          <TableHead>
            <TableRow>
              {["S.No", "Title", "Dept", "Sub-Dept", "Severity", "Status", "Issued Date"].map(
                (header, index) => (
                  <TableCell
                    key={index}
                    align={index === 0 || index > 3 ? "center" : "left"}
                  >
                    {header}
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedComplaints.map((complaint, index) => (
              <TableRow key={complaint.id}>
                <TableCell align="center">{page * rowsPerPage + index + 1}</TableCell>
                <TableCell>{complaint.title}</TableCell>
                <TableCell>{complaint.dept}</TableCell>
                <TableCell>{complaint.subDept}</TableCell>
                <TableCell align="center">
                  <Chip
                    label={complaint.severity}
                    sx={{
                      bgcolor: complaint.severity === "HIGH" ? "red" : complaint.severity === "MEDIUM" ? "orange" : "green",
                      color: "#fff",
                    }}
                    size="small"
                  />
                </TableCell>
                <TableCell align="center">
                  <Chip
                    label={complaint.status}
                    sx={{
                      bgcolor: complaint.status === "IN PROGRESS" ? "blue" : complaint.status === "PENDING" ? "yellow" : "green",
                      color: complaint.status === "PENDING" ? "#000" : "#fff",
                    }}
                    size="small"
                  />
                </TableCell>
                <TableCell align="center">
                  {complaint.issuedDate} ({complaint.days} Days)
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={complaints.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ color: "#fff" }}
      />
    </Box>
  );
};

export default AllComplaints;
