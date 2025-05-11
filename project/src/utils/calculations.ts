import { CalculationInput, CalculationResult } from '../types/types';
import { drugs, getConcentrationUnit } from '../data/drugs';

export const calculateInfusionRate = (input: CalculationInput): CalculationResult => {
  const { drugId, weight, dose, syringeVolume, concentration } = input;
  const drug = drugs.find(d => d.id === drugId);
  
  if (!drug) {
    throw new Error('Drug not found');
  }
  
  const concentrationUnit = getConcentrationUnit(drugId);
  let infusionRate = 0;
  let formula = '';
  
  if (drug.isWeightBased) {
    // For weight-based medications (mcg/kg/min)
    // Infusion rate (ml/hr) = (Dose × Weight × 60 × Dilution volume) / (Concentration × 1000)
    infusionRate = (dose * weight * 60 * syringeVolume) / (concentration * 1000);
    formula = `(${dose} × ${weight} × 60 × ${syringeVolume}) ÷ (${concentration} × 1000)`;
  } else if (drug.id === 'vasopressin') {
    // For vasopressin (units/min)
    // Infusion rate (ml/hr) = (Dose × 60 × Dilution volume) / Concentration
    infusionRate = (dose * 60 * syringeVolume) / concentration;
    formula = `(${dose} × 60 × ${syringeVolume}) ÷ ${concentration}`;
  } else {
    // For non-weight-based medications (mcg/min)
    // Infusion rate (ml/hr) = (Dose × 60 × Dilution volume) / (Concentration × 1000)
    infusionRate = (dose * 60 * syringeVolume) / (concentration * 1000);
    formula = `(${dose} × 60 × ${syringeVolume}) ÷ (${concentration} × 1000)`;
  }
  
  // Round to 1 decimal place
  infusionRate = Math.round(infusionRate * 10) / 10;
  
  // Check if outside recommended range
  const isOutsideRange = dose < drug.doseRangeMin || dose > drug.doseRangeMax;
  
  // Build concentration text
  const concentrationText = `${concentration} ${concentrationUnit} in ${syringeVolume}ml`;
  
  return {
    infusionRate,
    isOutsideRange,
    formula,
    concentrationText
  };
};

export const validateInputs = (input: Partial<CalculationInput>): string | null => {
  const { drugId, weight, dose, syringeVolume, concentration } = input;
  
  if (!drugId) {
    return 'Please select a drug';
  }
  
  const drug = drugs.find(d => d.id === drugId);
  if (!drug) {
    return 'Invalid drug selected';
  }
  
  if (drug.isWeightBased && (!weight || weight <= 0)) {
    return 'Please enter a valid patient weight';
  }
  
  if (!dose || dose <= 0) {
    return 'Please enter a valid dose';
  }
  
  if (!syringeVolume || syringeVolume <= 0) {
    return 'Please enter a valid syringe volume';
  }
  
  if (!concentration || concentration <= 0) {
    return 'Please enter a valid concentration';
  }
  
  return null;
};