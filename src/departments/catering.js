import React from "react";
import DepartmentComplaints from "./table"; 

const fetchCateringData = async () => {
  return {
    records: [
      {
        id: 1,
        title: "Poor food quality reported.",
        dept: "Catering",
        subDept: "Food Quality",
        severity: "HIGH",
        status: "IN PROGRESS",
        issuedDate: "2024-02-14",
        days: 215,
      },
      {
        id: 2,
        title: "Delay in food delivery.",
        dept: "Catering",
        subDept: "Service Delay",
        severity: "MEDIUM",
        status: "RESOLVED",
        issuedDate: "2024-05-23",
        days: 116,
      },
      {
        id: 3,
        title: "Unhygienic packaging reported.",
        dept: "Catering",
        subDept: "Packaging",
        severity: "LOW",
        status: "IN PROGRESS",
        issuedDate: "2024-07-15",
        days: 63,
      },
    ],
    activeCount: 5,
    closedCount: 10,
  };
};

const Catering = () => {
  return (
    <DepartmentComplaints
      department="Catering"
      fetchDepartmentData={fetchCateringData}
    />
  );
};

export default Catering;
