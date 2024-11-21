import React from "react";
import DepartmentComplaints from "./table"; 

const fetchMiscellaneousData = async () => {
  
  return {
    records: [
      {
        id: 1,
        title: "Unusual maintenance issue reported.",
        dept: "Miscellaneous",
        subDept: "Maintenance",
        severity: "MEDIUM",
        status: "IN PROGRESS",
        issuedDate: "2024-02-11",
        days: 230,
      },
      {
        id: 2,
        title: "Strange behavior of train staff.",
        dept: "Miscellaneous",
        subDept: "Staff Behavior",
        severity: "LOW",
        status: "RESOLVED",
        issuedDate: "2024-05-15",
        days: 170,
      },
      {
        id: 3,
        title: "Vandalism in the public area.",
        dept: "Miscellaneous",
        subDept: "Public Area",
        severity: "HIGH",
        status: "PENDING",
        issuedDate: "2024-08-05",
        days: 100,
      },
    ],
    activeCount: 5,
    closedCount: 12,
  };
};

const Miscellaneous = () => {
  return (
    <DepartmentComplaints
      department="Miscellaneous"
      fetchDepartmentData={fetchMiscellaneousData}
    />
  );
};

export default Miscellaneous;
