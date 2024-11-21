import React from "react";
import DepartmentComplaints from "./table"; 

const fetchSecurityData = async () => {
  return {
    records: [
      {
        id: 1,
        title: "Unauthorized entry at station premises.",
        dept: "Security",
        subDept: "Station Security",
        severity: "HIGH",
        status: "IN PROGRESS",
        issuedDate: "2024-02-15",
        days: 250,
      },
      {
        id: 2,
        title: "Theft reported on Train No. 12345.",
        dept: "Security",
        subDept: "Train Security",
        severity: "CRITICAL",
        status: "PENDING",
        issuedDate: "2024-06-10",
        days: 100,
      },
      {
        id: 3,
        title: "Luggage left unattended at platform.",
        dept: "Security",
        subDept: "Platform Security",
        severity: "MEDIUM",
        status: "RESOLVED",
        issuedDate: "2024-08-25",
        days: 45,
      },
    ],
    activeCount: 10,
    closedCount: 25,
  };
};

const Security = () => {
  return (
    <DepartmentComplaints
      department="Security"
      fetchDepartmentData={fetchSecurityData}
    />
  );
};

export default Security;
