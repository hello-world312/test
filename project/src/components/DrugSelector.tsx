import React from 'react';
import { drugs, getIconComponent } from '../data/drugs';
import { Info } from 'lucide-react';

interface DrugSelectorProps {
  selectedDrugId: string;
  onDrugSelect: (drugId: string) => void;
  onInfoClick: (drugId: string) => void;
}

const DrugSelector: React.FC<DrugSelectorProps> = ({ 
  selectedDrugId, 
  onDrugSelect,
  onInfoClick
}) => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-3 text-gray-800">Select Medication</h2>
      <div className="relative">
        <select
          value={selectedDrugId}
          onChange={(e) => onDrugSelect(e.target.value)}
          className="w-full p-3 pr-12 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Choose a medication...</option>
          {drugs.map(drug => (
            <option key={drug.id} value={drug.id}>
              {drug.name} ({drug.doseUnit})
            </option>
          ))}
        </select>
        
        {selectedDrugId && (
          <button
            onClick={() => onInfoClick(selectedDrugId)}
            className="absolute right-12 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700"
            title="View medication information"
          >
            <Info className="w-5 h-5" />
          </button>
        )}
        
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DrugSelector;