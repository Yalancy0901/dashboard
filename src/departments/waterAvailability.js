import React from "react";
import DepartmentComplaints from "./table"; 

const fetchWaterAvailabilityData = async () => {
  return {
    records: [
      {
        id: 1,
        title: "No water supply in washrooms.",
        dept: "Water Availability",
        subDept: "Washrooms",
        severity: "HIGH",
        status: "IN PROGRESS",
        issuedDate: "2024-02-15",
        days: 240,
      },
      {
        id: 2,
        title: "Low water pressure in pantry.",
        dept: "Water Availability",
        subDept: "Pantry",
        severity: "MEDIUM",
        status: "PENDING",
        issuedDate: "2024-06-10",
        days: 85,
      },
      {
        id: 3,
        title: "No drinking water available in stations.",
        dept: "Water Availability",
        subDept: "Stations",
        severity: "HIGH",
        status: "RESOLVED",
        issuedDate: "2024-07-18",
        days: 40,
      },
    ],
    activeCount: 5,
    closedCount: 12,
  };
};

const WaterAvailability = () => {
  return (
    <DepartmentComplaints
      department="Water Availability"
      fetchDepartmentData={fetchWaterAvailabilityData}
    />
  );
};

export default WaterAvailability;
