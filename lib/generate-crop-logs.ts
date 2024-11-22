import { Crop } from "@/app/analytics/crops-table/columns";

export const generateCropData = (): Crop[] => {
  const cropTypes = ["Blé", "Maïs fourrager", "Maïs", "Légumineuse"];
  const statuses = ["Planté", "Récolté", "En croissance"];
  const maladies = [
    "Brûlure",
    "Rouille",
    "Flétrissure",
    "Virus de la mosaïque",
  ];

  const getRandomDate = (start: string, end: string): string => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const randomDate = new Date(
      startDate.getTime() +
        Math.random() * (endDate.getTime() - startDate.getTime())
    );
    return randomDate.toISOString().split("T")[0];
  };

  const crops: Crop[] = [];

  for (let i = 0; i < 20; i++) {
    const id = `crop-${i + 1}`;
    const type = cropTypes[Math.floor(Math.random() * cropTypes.length)];
    const startDate = getRandomDate("2023-01-01", "2024-01-01");
    const endDate = getRandomDate("2024-01-01", "2025-01-01");
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const amount = Math.floor(Math.random() * 1000) + 1; // Amount between 1 and 1000

    // Assign either a random disease or `null`
    const maladie =
      Math.random() < 0.5 // 50% chance of having a disease
        ? maladies[Math.floor(Math.random() * maladies.length)]
        : null;

    crops.push({ id, type, startDate, endDate, status, amount, maladie });
  }

  return crops;
};
