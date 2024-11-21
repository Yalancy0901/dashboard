import React from "react";
import DepartmentComplaints from "./table"; 

const fetchMedicalData = async () => {
  return {
    records: [
      {
        id: 1,
        title: "First aid kit unavailable in coach.",
        dept: "Medical",
        subDept: "First Aid",
        severity: "HIGH",
        status: "IN PROGRESS",
        issuedDate: "2024-02-15",
        days: 220,
      },
      {
        id: 2,
        title: "Delayed response to medical emergency.",
        dept: "Medical",
        subDept: "Emergency Assistance",
        severity: "CRITICAL",
        status: "PENDING",
        issuedDate: "2024-07-12",
        days: 66,
      },
      {
        id: 3,
        title: "Improper handling of medical equipment.",
        dept: "Medical",
        subDept: "Equipment Management",
        severity: "MEDIUM",
        status: "RESOLVED",
        issuedDate: "2024-09-18",
        days: 6,
      },
    ],
    activeCount: 6,
    closedCount: 10,
  };
};

const Medical = () => {
  return (
    <DepartmentComplaints
      department="Medical"
      fetchDepartmentData={fetchMedicalData}
    />
  );
};

export default Medical;
