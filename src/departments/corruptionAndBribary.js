import React from "react";
import DepartmentComplaints from "./table"; 

const fetchCorruptionAndBriberyData = async () => {
  return {
    records: [
      {
        id: 1,
        title: "Bribery request for ticket clearance.",
        dept: "Corruption and Bribery",
        subDept: "Ticketing",
        severity: "HIGH",
        status: "IN PROGRESS",
        issuedDate: "2024-01-10",
        days: 275,
      },
      {
        id: 2,
        title: "Corruption charges against station officials.",
        dept: "Corruption and Bribery",
        subDept: "Station Officials",
        severity: "HIGH",
        status: "PENDING",
        issuedDate: "2024-03-22",
        days: 188,
      },
      {
        id: 3,
        title: "Bribery attempt at ticket counter.",
        dept: "Corruption and Bribery",
        subDept: "Ticket Counter",
        severity: "MEDIUM",
        status: "RESOLVED",
        issuedDate: "2024-07-14",
        days: 40,
      },
    ],
    activeCount: 7,
    closedCount: 20,
  };
};

const CorruptionAndBribery = () => {
  return (
    <DepartmentComplaints
      department="Corruption and Bribery"
      fetchDepartmentData={fetchCorruptionAndBriberyData}
    />
  );
};

export default CorruptionAndBribery;
