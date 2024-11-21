import React from "react";
import DepartmentComplaints from "./table"; 

const fetchDivyangData = async () => {
  return {
    records: [
      {
        id: 1,
        title: "Wheelchair not provided on time.",
        dept: "Divyang",
        subDept: "Assistance",
        severity: "HIGH",
        status: "IN PROGRESS",
        issuedDate: "2024-03-10",
        days: 190,
      },
      {
        id: 2,
        title: "Ramp access not available at platform.",
        dept: "Divyang",
        subDept: "Infrastructure",
        severity: "MEDIUM",
        status: "PENDING",
        issuedDate: "2024-06-01",
        days: 107,
      },
      {
        id: 3,
        title: "Coach assistance staff unavailable.",
        dept: "Divyang",
        subDept: "Staff Support",
        severity: "LOW",
        status: "RESOLVED",
        issuedDate: "2024-09-05",
        days: 11,
      },
    ],
    activeCount: 4,
    closedCount: 12,
  };
};

const Divyang = () => {
  return (
    <DepartmentComplaints
      department="Divyang"
      fetchDepartmentData={fetchDivyangData}
    />
  );
};

export default Divyang;
