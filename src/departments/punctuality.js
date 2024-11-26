import React from "react";
import DepartmentComplaints from "./table"; 
const fetchPunctualityData = async () => {
  return {
    records: [
      {
        id: 1,
        title: "Train delayed due to signal issues, which we were not even informed",
        dept: "Punctuality",
        subDept: "Signal Management",
        severity: "HIGH",
        status: "IN PROGRESS",
        issuedDate: "2024-03-10",
        days: 200,
      },
      {
        id: 2,
        title: "Late arrival due to engine failure.",
        dept: "Punctuality",
        subDept: "Engine Maintenance",
        severity: "CRITICAL",
        status: "PENDING",
        issuedDate: "2024-05-22",
        days: 127,
      },
      {
        id: 3,
        title: "Train skipped scheduled stops.",
        dept: "Punctuality",
        subDept: "Schedule Management",
        severity: "MEDIUM",
        status: "RESOLVED",
        issuedDate: "2024-09-01",
        days: 30,
      },
    ],
    activeCount: 5,
    closedCount: 15,
  };
};

const Punctuality = () => {
  return (
    <DepartmentComplaints
      department="Punctuality"
      fetchDepartmentData={fetchPunctualityData}
    />
  );
};

export default Punctuality;
