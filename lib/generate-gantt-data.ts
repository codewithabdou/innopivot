// First row defines the columns
const columns = [
  { type: "string", label: "Task ID" },
  { type: "string", label: "Task Name" },
  { type: "date", label: "Start Date" },
  { type: "date", label: "End Date" },
  { type: "number", label: "Duration" },
  { type: "number", label: "Percent Complete" },
  { type: "string", label: "Dependencies" },
];

// Helper function to calculate duration in milliseconds
const daysToMilliseconds = (days: any) => days * 24 * 60 * 60 * 1000;

// Generate random crop data
export const generateGantCropData = () => {
  const crops = ["Blé", "Maïs fourrager", "Maïs", "Légumineuse"];

  const data = crops.map((crop, index) => {
    const startDate = new Date(
      2024,
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1
    );
    const duration = Math.floor(Math.random() * 60) + 10; // Duration between 10 and 60 days
    const endDate = new Date(
      startDate.getTime() + daysToMilliseconds(duration)
    );
    const percentComplete = Math.floor(Math.random() * 101); // Completion between 0% and 100%

    return [
      `Task-${index + 1}`, // Task ID
      crop, // Task Name
      startDate, // Start Date
      endDate, // End Date
      duration, // Duration
      percentComplete, // Percent Complete
      null, // No dependencies for simplicity
    ];
  });

  return [columns, ...data];
};
