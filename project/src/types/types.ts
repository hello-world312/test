export interface Drug {
  id: string;
  name: string;
  concentrationAvailable: string[];
  formulation: string;
  brands: string[];
  standardDosing: string;
  doseUnit: string;
  doseRangeMin: number;
  doseRangeMax: number;
  isWeightBased: boolean;
  icon: string;
  color: string;
}

export interface CalculationInput {
  drugId: string;
  weight: number;
  dose: number;
  syringeVolume: number;
  concentration: number;
  concentrationUnit: string;
}

export interface CalculationResult {
  infusionRate: number;
  isOutsideRange: boolean;
  formula: string;
  concentrationText: string;
}