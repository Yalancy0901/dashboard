// import React, { useState } from "react";
// import {
//   Box,
//   Grid,
//   Typography,
//   Card,
//   CardContent,
//   LinearProgress,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Chip,
//   TablePagination,
// } from "@mui/material";

// const complaints = [
//   { id: 1, title: "Certainly mean black.", dept: "Coach Cleanliness", subDept: "Washbasin", severity: "HIGH", status: "IN PROGRESS", issuedDate: "2024-01-08", days: 247 },
//   { id: 2, title: "Wrong south already against law choice.", dept: "Coach Cleanliness", subDept: "Coach Exterior", severity: "HIGH", status: "IN PROGRESS", issuedDate: "2024-08-04", days: 37 },
//   { id: 3, title: "Safe over report often before.", dept: "Coach Cleanliness", subDept: "Others", severity: "LOW", status: "IN PROGRESS", issuedDate: "2024-04-09", days: 155 },
// ];

// const CoachCleanliness = () => {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const displayedComplaints = complaints.slice(
//     page * rowsPerPage,
//     page * rowsPerPage + rowsPerPage
//   );

//   return (
//     <Box sx={{ bgcolor: "#333", color: "#fff", p: 3, minHeight: "100vh" }}>
//       <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
//         Coach Cleanliness
//       </Typography>
//       <Grid container spacing={2}>
//         <Grid item xs={6}>
//           <Card sx={{ bgcolor: "#1E90FF", color: "#fff" }}>
//             <CardContent>
//               <Typography variant="h6">8 Active</Typography>
//               <Typography sx={{ color: "#ddd" }}>Complaints</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={6}>
//           <Card sx={{ bgcolor: "#808080", color: "#fff" }}>
//             <CardContent>
//               <Typography variant="h6">18 Closed</Typography>
//               <Typography sx={{ color: "#ddd" }}>Complaints</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>

//       <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         {["Washbasin", "Cockroach/Rodents", "Coach Interior", "Coach Exterior", "Others"].map((subDept, index) => (
//           <Box key={index} sx={{ textAlign: "center", mx: 1 }}>
//             <Typography variant="caption" sx={{ color: "#ddd" }}>
//               {subDept}
//             </Typography>
//             <LinearProgress
//               variant="determinate"
//               value={Math.random() * 100}
//               sx={{ bgcolor: "#444", my: 1, height: 8 }}
//             />
//             <Typography variant="caption" sx={{ color: "#ddd" }}>
//               0 complaints
//             </Typography>
//           </Box>
//         ))}
//       </Box>

//       <Typography variant="h6" sx={{ mt: 3, mb: 2, color: "#fff" }}>
//         All Complaints
//       </Typography>
//       <TableContainer
//   component={Paper}
//   sx={{
//     bgcolor: "#444",
//     border: "2px solid #555",
//     borderRadius: 1,
//   }}
// >
//   <Table
//     sx={{
//       borderCollapse: "collapse", // Prevents double borders
//       tableLayout: "fixed",
//       "& td, & th": {
//         border: "1px solid #555", // Consistent border for all cells
//       },
//       "& th": {
//         color: "#fff", // Header text color
//         fontWeight: "bold",
//       },
//       "& td": {
//         color: "#fff", // Body text color
//       },
//     }}
//   >
//     <TableHead>
//   <TableRow>
//     {["S.No", "Title", "Dept", "Sub-Dept", "Severity", "Status", "Issued Date"].map(
//       (header, index) => (
//         <TableCell
//           key={index}
//           align={index === 0 || index > 3 ? "center" : "left"}
//           sx={{
//             bgcolor: "#333", 
//             color: "#fff", 
//             fontWeight: "bold",
//             border: "1px solid #555",
//           }}
//         >
//           {header}
//         </TableCell>
//       )
//     )}
//   </TableRow>
// </TableHead>

//     <TableBody>
//       {displayedComplaints.map((complaint) => (
//         <TableRow
//           key={complaint.id}
//           sx={{
//             "&:last-child td": { borderBottom: "none" }, // Optional: No border for last row
//           }}
//         >
//           <TableCell align="center">{complaint.id}</TableCell>
//           <TableCell>{complaint.title}</TableCell>
//           <TableCell>{complaint.dept}</TableCell>
//           <TableCell>{complaint.subDept}</TableCell>
//           <TableCell align="center">
//             <Chip
//               label={complaint.severity}
//               sx={{
//                 bgcolor: complaint.severity === "HIGH" ? "red" : "green",
//                 color: "#fff",
//               }}
//               size="small"
//             />
//           </TableCell>
//           <TableCell align="center">
//             <Chip
//               label={complaint.status}
//               sx={{
//                 bgcolor: "#FFD700",
//                 color: "#000",
//               }}
//               size="small"
//             />
//           </TableCell>
//           <TableCell align="center">
//             {complaint.issuedDate} ({complaint.days} Days)
//           </TableCell>
//         </TableRow>
//       ))}
//     </TableBody>
//   </Table>
// </TableContainer>

//     </Box>
//   );
// };

// export default CoachCleanliness;
import React from "react";
import DepartmentComplaints from "./table"; 

const fetchCoachCleanlinessData = async () => {

  return {
    records: [
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
        title: "Wrong south already against law choice.",
        dept: "Coach Cleanliness",
        subDept: "Coach Exterior",
        severity: "HIGH",
        status: "IN PROGRESS",
        issuedDate: "2024-08-04",
        days: 37,
      },
      {
        id: 3,
        title: "Safe over report often before.",
        dept: "Coach Cleanliness",
        subDept: "Others",
        severity: "LOW",
        status: "IN PROGRESS",
        issuedDate: "2024-04-09",
        days: 155,
      },
    ],
    activeCount: 8,
    closedCount: 18,
  };
};

const CoachCleanliness = () => {
  return (
    <DepartmentComplaints
      department="Coach Cleanliness"
      fetchDepartmentData={fetchCoachCleanlinessData}
    />
  );
};

export default CoachCleanliness;
