import { Crop } from "@/constants/crops";

// Algorithme pour déterminer la prochaine culture
function selectNextCrop(
  CROPS: Crop[],
  environment: { temp: number; humidity: number },
  soil: {
    salinity: number;
    moisture: number;
    nutrientLevels: { nitrogen: number; phosphorus: number; potassium: number };
    recentDiseases: string[];
  },
  currentCrop: string,
  MonthsToEndOfCycle: number,
  currentMonth: number,
  overrideSowingMonth: boolean
) {
  const explanations: any[] = [];
  let qualifiedCrops: any[] = []; // Suivi des cultures répondant aux critères de base
  let currentCropSelected = false; // Indicateur si la culture actuelle reste sélectionnée

  CROPS.forEach((crop: any) => {
    crop.score = 0; // Réinitialisation du score pour chaque évaluation
    let positives: string[] = []; // Facteurs positifs pour cette culture
    let negatives: string[] = []; // Facteurs négatifs pour cette culture

    // === 1. Cycle de croissance (Priorité maximale) ===
    if (currentCrop === crop.name && MonthsToEndOfCycle > 0) {
      positives.push(
        `La culture actuelle (${crop.name}) a encore ${MonthsToEndOfCycle} mois dans son cycle de croissance et restera dans le champ jusqu'à la récolte.`
      );
      currentCropSelected = true; // Marquer la culture actuelle comme sélectionnée
      crop.score += 100; // Bonus élevé pour maintenir la culture actuelle
    }

    // === 2. Adéquation du mois de semis (Priorité très élevée) ===
    if (!crop.sowingMonths.includes(currentMonth)) {
      negatives.push(
        `Le mois actuel (${currentMonth}) n'est pas adapté pour semer ${crop.name}.`
      );
      if (!overrideSowingMonth) {
        crop.score -= 50; // Pénalité importante pour un mois de semis inadapté
      }
    } else {
      positives.push(
        `Le mois actuel (${currentMonth}) est adapté pour semer ${crop.name}.`
      );
      crop.score += 20; // Bonus significatif pour un mois de semis adapté
    }

    // === 3. Besoins en eau (Priorité élevée) ===
    if (
      soil.moisture >= crop.waterNeed[0] &&
      soil.moisture <= crop.waterNeed[1]
    ) {
      positives.push(
        `L'humidité du sol (${soil.moisture} mm) est dans la plage adaptée (${crop.waterNeed[0]}-${crop.waterNeed[1]} mm) pour ${crop.name}.`
      );
      crop.score += 15; // Bonus élevé pour une humidité adaptée
    } else {
      negatives.push(
        `L'humidité du sol (${soil.moisture} mm) est en dehors de la plage adaptée (${crop.waterNeed[0]}-${crop.waterNeed[1]} mm) pour ${crop.name}.`
      );
      crop.score -= 15; // Pénalité importante pour une humidité inadaptée
    }

    // === 4. Adéquation environnementale ===
    if (
      crop.optimalTemp &&
      environment.temp >= crop.optimalTemp[0] &&
      environment.temp <= crop.optimalTemp[1]
    ) {
      positives.push(
        `La température actuelle (${environment.temp}°C) est dans la plage optimale (${crop.optimalTemp[0]}°C-${crop.optimalTemp[1]}°C) pour ${crop.name}.`
      );
      crop.score += 15; // Bonus modéré pour une compatibilité avec la température
    } else {
      negatives.push(
        `La température actuelle (${environment.temp}°C) est en dehors de la plage optimale (${crop.optimalTemp?.[0]}°C-${crop.optimalTemp?.[1]}°C) pour ${crop.name}.`
      );
      crop.score -= 10; // Pénalité pour une incompatibilité avec la température
    }

    if (
      crop.humidityTolerance &&
      environment.humidity <= crop.humidityTolerance
    ) {
      positives.push(
        `L'humidité actuelle (${environment.humidity}%) est adaptée pour ${crop.name}.`
      );
      crop.score += 10; // Bonus pour une humidité adaptée
    } else {
      negatives.push(
        `L'humidité actuelle (${environment.humidity}%) n'est pas idéale pour ${crop.name}.`
      );
      crop.score -= 5; // Pénalité pour une humidité inadaptée
    }

    // === 5. Compatibilité des nutriments (Priorité élevée) ===
    // Azote
    if (
      soil.nutrientLevels.nitrogen >= crop.nutrientNeed.nitrogen[0] &&
      soil.nutrientLevels.nitrogen <= crop.nutrientNeed.nitrogen[1]
    ) {
      positives.push(
        `Le niveau d'azote dans le sol (${soil.nutrientLevels.nitrogen}) est adapté pour ${crop.name}.`
      );
      crop.score += 10; // Bonus modéré pour une compatibilité avec l'azote
    } else {
      negatives.push(
        `Le niveau d'azote dans le sol (${soil.nutrientLevels.nitrogen}) n'est pas adapté pour ${crop.name}.`
      );
      crop.score -= 10; // Pénalité pour une incompatibilité avec l'azote
    }

    // Phosphore
    if (
      soil.nutrientLevels.phosphorus >= crop.nutrientNeed.phosphorus[0] &&
      soil.nutrientLevels.phosphorus <= crop.nutrientNeed.phosphorus[1]
    ) {
      positives.push(
        `Le niveau de phosphore dans le sol (${soil.nutrientLevels.phosphorus}) est adapté pour ${crop.name}.`
      );
      crop.score += 10; // Bonus modéré pour une compatibilité avec le phosphore
    } else {
      negatives.push(
        `Le niveau de phosphore dans le sol (${soil.nutrientLevels.phosphorus}) n'est pas adapté pour ${crop.name}.`
      );
      crop.score -= 10; // Pénalité pour une incompatibilité avec le phosphore
    }

    // Potassium
    if (
      soil.nutrientLevels.potassium >= crop.nutrientNeed.potassium[0] &&
      soil.nutrientLevels.potassium <= crop.nutrientNeed.potassium[1]
    ) {
      positives.push(
        `Le niveau de potassium dans le sol (${soil.nutrientLevels.potassium}) est adapté pour ${crop.name}.`
      );
      crop.score += 10; // Bonus modéré pour une compatibilité avec le potassium
    } else {
      negatives.push(
        `Le niveau de potassium dans le sol (${soil.nutrientLevels.potassium}) n'est pas adapté pour ${crop.name}.`
      );
      crop.score -= 10; // Pénalité pour une incompatibilité avec le potassium
    }

    // Bonus pour une compatibilité globale avec les NPK
    if (
      soil.nutrientLevels.nitrogen >= crop.nutrientNeed.nitrogen[0] &&
      soil.nutrientLevels.nitrogen <= crop.nutrientNeed.nitrogen[1] &&
      soil.nutrientLevels.phosphorus >= crop.nutrientNeed.phosphorus[0] &&
      soil.nutrientLevels.phosphorus <= crop.nutrientNeed.phosphorus[1] &&
      soil.nutrientLevels.potassium >= crop.nutrientNeed.potassium[0] &&
      soil.nutrientLevels.potassium <= crop.nutrientNeed.potassium[1]
    ) {
      positives.push(
        `Les niveaux globaux de NPK dans le sol sont idéaux pour ${crop.name}.`
      );
      crop.score += 10; // Bonus supplémentaire pour une compatibilité totale
    } else {
      negatives.push(
        `Les niveaux globaux de NPK dans le sol ne sont pas entièrement adaptés pour ${crop.name}.`
      );
      crop.score -= 20; // Pénalité pour une incompatibilité multiple
    }

    explanations.push({
      crop: crop.name,
      positives,
      negatives,
      score: crop.score,
    });

    qualifiedCrops.push({ crop, score: crop.score, positives, negatives });
  });

  // Sélection des cultures en fonction du score
  if (currentCropSelected) {
    return {
      selectedCrops: [
        {
          name: currentCrop,
          reason:
            "La culture actuelle est encore dans son cycle de croissance et restera dans le champ.",
        },
      ],
      explanations: explanations.sort((a: any, b: any) => b.score - a.score),
    };
  }

  const positiveScoringCrops = qualifiedCrops.filter((c: any) => c.score > 0);
  positiveScoringCrops.sort((a: any, b: any) => b.score - a.score);

  return {
    selectedCrops: positiveScoringCrops.map((c: any) => ({
      name: c.crop.name,
      score: c.score,
    })),
    explanations: explanations.sort((a: any, b: any) => b.score - a.score),
  };
}

export default selectNextCrop;
