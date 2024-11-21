import React, { useState } from "react";
import DepartmentComplaints from "./DepartmentComplaints";

const fetchDepartmentData = async (department) => {

  const data = {
    "Coach Cleanliness": {
      records: [
        { id: 1, title: "Washbasin issue", dept: "Coach Cleanliness", subDept: "Washbasin", severity: "HIGH", status: "IN PROGRESS", issuedDate: "2024-01-08" },
        { id: 2, title: "Exterior cleaning required", dept: "Coach Cleanliness", subDept: "Coach Exterior", severity: "LOW", status: "COMPLETED", issuedDate: "2024-08-04" },
      ],
      activeCount: 8,
      closedCount: 18,
    },
    "Train Safety": {
      records: [
        { id: 1, title: "Fire extinguisher inspection", dept: "Train Safety", subDept: "Safety Equipment", severity: "HIGH", status: "IN PROGRESS", issuedDate: "2024-10-15" },
        { id: 2, title: "Emergency alarm check", dept: "Train Safety", subDept: "Emergency Systems", severity: "MEDIUM", status: "PENDING", issuedDate: "2024-09-25" },
      ],
      activeCount: 5,
      closedCount: 12,
    },
  };

  return new Promise((resolve) => {
    setTimeout(() => resolve(data[department] || { records: [], activeCount: 0, closedCount: 0 }), 1000);
  });
};

const ComplaintManagementSystem = () => {
  const [department, setDepartment] = useState("Coach Cleanliness");

  return (
    <div>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <button onClick={() => setDepartment("Coach Cleanliness")}>Coach Cleanliness</button>
        <button onClick={() => setDepartment("Train Safety")}>Train Safety</button>
        {/* Add more departments as needed */}
      </div>

      <DepartmentComplaints department={department} fetchDepartmentData={fetchDepartmentData} />
    </div>
  );
};

export default ComplaintManagementSystem;
