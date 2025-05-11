import React, { useState, useEffect } from 'react';
import { CalculationInput } from '../types/types';
import { getDefaultConcentration, getConcentrationUnit, drugs } from '../data/drugs';
import { Info } from 'lucide-react';

interface CalculatorFormProps {
  selectedDrugId: string;
  onCalculate: (input: CalculationInput) => void;
}

const CalculatorForm: React.FC<CalculatorFormProps> = ({ 
  selectedDrugId,
  onCalculate
}) => {
  const [weight, setWeight] = useState<number>(70);
  const [dose, setDose] = useState<number>(0);
  const [syringeVolume, setSyringeVolume] = useState<number>(50);
  const [concentration, setConcentration] = useState<number>(0);
  const [error, setError] = useState<string>('');
  
  const selectedDrug = drugs.find(d => d.id === selectedDrugId);
  const concentrationUnit = getConcentrationUnit(selectedDrugId);
  
  // Update concentration when drug changes
  useEffect(() => {
    if (selectedDrugId) {
      const defaultConc = getDefaultConcentration(selectedDrugId);
      setConcentration(defaultConc);
      
      // Reset dose to middle of range when drug changes
      if (selectedDrug) {
        const middleDose = (selectedDrug.doseRangeMin + selectedDrug.doseRangeMax) / 2;
        setDose(parseFloat(middleDose.toFixed(2)));
      }
    }
  }, [selectedDrugId, selectedDrug]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDrugId) {
      setError('Please select a drug first');
      return;
    }
    
    if (selectedDrug?.isWeightBased && (!weight || weight <= 0)) {
      setError('Please enter a valid weight');
      return;
    }
    
    if (!dose || dose <= 0) {
      setError('Please enter a valid dose');
      return;
    }
    
    if (!syringeVolume || syringeVolume <= 0) {
      setError('Please enter a valid syringe volume');
      return;
    }
    
    if (!concentration || concentration <= 0) {
      setError('Please enter a valid concentration');
      return;
    }
    
    setError('');
    onCalculate({
      drugId: selectedDrugId,
      weight,
      dose,
      syringeVolume,
      concentration,
      concentrationUnit
    });
  };
  
  if (!selectedDrug) {
    return (
      <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg text-center">
        <p className="text-gray-500">Please select a drug to continue</p>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
        {selectedDrug.name}
        <span className="ml-2 text-sm font-normal text-gray-500">
          ({selectedDrug.doseUnit})
        </span>
      </h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700">
          <p className="text-sm">{error}</p>
        </div>
      )}
      
      <div className="space-y-4">
        {selectedDrug.isWeightBased && (
          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
              Patient Weight (kg)
            </label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              step="0.1"
              min="0.1"
              required
            />
          </div>
        )}
        
        <div>
          <label htmlFor="dose" className="block text-sm font-medium text-gray-700 mb-1 flex items-center justify-between">
            <span>Dose ({selectedDrug.doseUnit})</span>
            <span className="text-xs text-gray-500">Range: {selectedDrug.standardDosing}</span>
          </label>
          <input
            type="number"
            id="dose"
            value={dose}
            onChange={(e) => setDose(parseFloat(e.target.value) || 0)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            step="0.01"
            min="0.01"
            required
          />
          <input 
            type="range"
            min={selectedDrug.doseRangeMin}
            max={selectedDrug.doseRangeMax}
            step={(selectedDrug.doseRangeMax - selectedDrug.doseRangeMin) / 100}
            value={dose}
            onChange={(e) => setDose(parseFloat(e.target.value))}
            className="w-full mt-2"
          />
        </div>
        
        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center mb-2">
            <h3 className="text-sm font-semibold text-gray-700">Advanced Options</h3>
            <span className="ml-2 bg-gray-100 rounded-full p-1">
              <Info className="w-4 h-4 text-gray-500" />
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="syringeVolume" className="block text-sm font-medium text-gray-700 mb-1">
                Syringe Volume (ml)
              </label>
              <input
                type="number"
                id="syringeVolume"
                value={syringeVolume}
                onChange={(e) => setSyringeVolume(parseFloat(e.target.value) || 0)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                min="1"
                required
              />
            </div>
            
            <div>
              <label htmlFor="concentration" className="block text-sm font-medium text-gray-700 mb-1">
                Concentration ({concentrationUnit})
              </label>
              <input
                type="number"
                id="concentration"
                value={concentration}
                onChange={(e) => setConcentration(parseFloat(e.target.value) || 0)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                min="0.1"
                step="0.1"
                required
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Calculate Infusion Rate
        </button>
      </div>
    </form>
  );
};

export default CalculatorForm;