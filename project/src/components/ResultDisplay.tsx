import React from 'react';
import { CalculationResult } from '../types/types';
import { AlertCircle } from 'lucide-react';

interface ResultDisplayProps {
  result: CalculationResult | null;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  if (!result) return null;
  
  return (
    <div className="mt-6 bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600 animate-fadeIn">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Calculation Result</h2>
      
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 pb-6 border-b border-gray-200">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm text-gray-500 mb-1">Infusion Rate</p>
          <div className="flex items-center">
            <p className="text-4xl font-bold text-blue-800">{result.infusionRate}</p>
            <p className="ml-2 text-xl text-gray-600">ml/hr</p>
          </div>
        </div>
        
        <div className="text-center md:text-right">
          <p className="text-sm text-gray-500 mb-1">Based on</p>
          <p className="text-lg font-medium text-gray-700">{result.concentrationText}</p>
        </div>
      </div>
      
      {result.isOutsideRange && (
        <div className="mb-4 p-3 bg-amber-50 border-l-4 border-amber-500 text-amber-700 flex items-start">
          <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 text-amber-500" />
          <p className="text-sm">
            The requested dose is outside the standard dosing range. Please verify with a physician before administration.
          </p>
        </div>
      )}
      
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Calculation Formula</h3>
        <div className="bg-gray-50 p-3 rounded-md">
          <p className="text-sm font-mono text-gray-600">
            Infusion Rate = {result.formula} = {result.infusionRate} ml/hr
          </p>
        </div>
      </div>
      
      <div className="mt-6 text-xs text-gray-500">
        <p>Verify all calculations before administration. This calculator is a clinical aid only.</p>
      </div>
    </div>
  );
};

export default ResultDisplay;