export type Crop = {
  name: string;
  sowingMonths: number[]; // Array of months (1-12)
  harvestMonths: number[]; // Array of months (1-12)
  waterNeed: [number, number]; // Tuple representing the range of water needs in mm
  nutrientNeed: {
    nitrogen: [number, number]; // Range of nitrogen needs in kg/ha
    phosphorus: [number, number]; // Range of phosphorus needs in kg/ha
    potassium: [number, number]; // Range of potassium needs in kg/ha
  };
  diseases: string[]; // Array of common disease names
  tolerance: {
    salinity: "low" | "medium" | "high"; // Salinity tolerance level
    drought: "low" | "medium" | "high"; // Drought tolerance level
  };
  nitrogenFixation: boolean; // Indicates if the crop fixes nitrogen
  optimalTemp: [number, number]; // Tuple representing the optimal temperature range in Celsius
  humidityTolerance: number; // Maximum humidity percentage the crop can tolerate
  score: number; // Default score for ranking
};

const CROPS: Crop[] = [
  {
    name: "blé",
    sowingMonths: [11, 12], // November, December
    harvestMonths: [5, 6], // May, June
    waterNeed: [400, 600], // mm
    nutrientNeed: {
      nitrogen: [40, 70],
      phosphorus: [20, 40],
      potassium: [30, 50],
    }, // Nutrient needs (kg/ha)
    diseases: ["septoriose", "rouille jaune", "oïdium"], // Common diseases
    tolerance: { salinity: "low", drought: "low" }, // Tolerance to salinity and drought
    nitrogenFixation: false,
    optimalTemp: [15, 25], // Optimal temperature range
    humidityTolerance: 80, // Humidity tolerance
    score: 0, // Default score
  },
  {
    name: "maïs fourrager",
    sowingMonths: [2, 3, 4], // February to April
    harvestMonths: [8, 9], // August, September
    waterNeed: [600, 800], // mm
    nutrientNeed: {
      nitrogen: [70, 120],
      phosphorus: [40, 60],
      potassium: [50, 80],
    },
    diseases: ["fusariose", "charbon"],
    tolerance: { salinity: "medium", drought: "low" },
    nitrogenFixation: false,
    optimalTemp: [15, 25], // Optimal temperature range
    humidityTolerance: 80, // Humidity tolerance
    score: 0,
  },
  {
    name: "maïs grain",
    sowingMonths: [3, 4, 5], // March to May
    harvestMonths: [9, 10], // September, October
    waterNeed: [500, 700], // mm
    nutrientNeed: {
      nitrogen: [60, 100],
      phosphorus: [30, 50],
      potassium: [40, 70],
    },
    diseases: ["fusariose", "helminthosporiose", "charbon"],
    tolerance: { salinity: "medium", drought: "low" },
    nitrogenFixation: false,
    optimalTemp: [15, 30], // Optimal temperature range
    humidityTolerance: 80, // Humidity tolerance
    score: 0,
  },
  {
    name: "pois chiche",
    sowingMonths: [3, 4], // March, April
    harvestMonths: [8, 9], // August, September
    waterNeed: [250, 400], // mm
    nutrientNeed: {
      nitrogen: [20, 40],
      phosphorus: [30, 50],
      potassium: [30, 50],
    },
    diseases: [], // Highly disease-resistant
    tolerance: { salinity: "high", drought: "high" },
    nitrogenFixation: true, // Fixes nitrogen
    optimalTemp: [15, 25], // Optimal temperature range
    humidityTolerance: 80, // Humidity tolerance
    score: 0,
  },
  {
    name: "légumineuses fourragères",
    sowingMonths: [3, 4], // March, April
    harvestMonths: [6, 7, 8], // June to August
    waterNeed: [250, 500], // mm
    nutrientNeed: {
      nitrogen: [20, 40],
      phosphorus: [20, 40],
      potassium: [20, 40],
    },
    diseases: ["anthracnose", "various fungal diseases"], // General sensitivity to fungal diseases
    tolerance: { salinity: "medium", drought: "medium" },
    nitrogenFixation: true, // Fixes nitrogen
    optimalTemp: [15, 25], // Optimal temperature range
    humidityTolerance: 80, // Humidity tolerance
    score: 0,
  },
  {
    name: "soja",
    sowingMonths: [4, 5], // April, May
    harvestMonths: [9, 10], // September, October
    waterNeed: [500, 600], // mm
    nutrientNeed: {
      nitrogen: [30, 50],
      phosphorus: [40, 60],
      potassium: [40, 60],
    },
    diseases: ["fusariose", "anthracnose", "charbon"],
    tolerance: { salinity: "low", drought: "medium" },
    nitrogenFixation: true, // Fixes nitrogen
    optimalTemp: [15, 25], // Optimal temperature range
    humidityTolerance: 80, // Humidity tolerance
    score: 0,
  },
];

export default CROPS;
