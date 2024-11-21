import React from "react";
import DepartmentComplaints from "./table"; 
const fetchStaffBehaviourData = async () => {
  return {
    records: [
      {
        id: 1,
        title: "Rude behavior by ticket collector.",
        dept: "Staff Behaviour",
        subDept: "Ticket Collector",
        severity: "HIGH",
        status: "IN PROGRESS",
        issuedDate: "2024-03-05",
        days: 210,
      },
      {
        id: 2,
        title: "Unprofessional conduct by train attendant.",
        dept: "Staff Behaviour",
        subDept: "Train Attendant",
        severity: "MEDIUM",
        status: "PENDING",
        issuedDate: "2024-07-12",
        days: 60,
      },
      {
        id: 3,
        title: "Improper response from customer service.",
        dept: "Staff Behaviour",
        subDept: "Customer Service",
        severity: "LOW",
        status: "RESOLVED",
        issuedDate: "2024-09-01",
        days: 20,
      },
    ],
    activeCount: 15,
    closedCount: 30,
  };
};

const StaffBehaviour = () => {
  return (
    <DepartmentComplaints
      department="Staff Behaviour"
      fetchDepartmentData={fetchStaffBehaviourData}
    />
  );
};

export default StaffBehaviour;
