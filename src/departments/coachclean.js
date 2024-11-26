
import React from "react";
import DepartmentComplaints from "./table"; 

const fetchCoachCleanlinessData = async () => {

  return {
    records: [
      {
        id: 1,
        title: "The floor is dirty, and the leak from the AC makes it damp",
        dept: "Coach Cleanliness",
        subDept: "Floor",
        severity: "HIGH",
        status: "IN PROGRESS",
        issuedDate: "21-11-2024",
        days:4,
      },
      {
        id: 2,
        title: "The coach number plate was broken making it tough to locate",
        dept: "Coach Cleanliness",
        subDept: "Coach Exterior",
        severity: "HIGH",
        status: "IN PROGRESS",
        issuedDate: "20-11-2024",
        days: 5,
      },
      {
        id: 3,
        title: "There are too much of cockroaches in the comaprtment and it was not cleaned before the journey",
        dept: "Coach Cleanliness",
        subDept: "Others",
        severity: "LOW",
        status: "IN PROGRESS",
        issuedDate: "01-11-2024",
        days: 25,
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
