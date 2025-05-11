import React from 'react';
import { X } from 'lucide-react';
import { Drug } from '../types/types';
import { getIconComponent } from '../data/drugs';

interface DrugInfoModalProps {
  drug: Drug | null;
  onClose: () => void;
}

const DrugInfoModal: React.FC<DrugInfoModalProps> = ({ drug, onClose }) => {
  if (!drug) return null;

  const IconComponent = getIconComponent(drug.icon);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div 
        className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-full bg-${drug.color}-100`}>
              <IconComponent className={`h-6 w-6 text-${drug.color}-600`} />
            </div>
            <h3 className="text-lg font-bold text-gray-900">{drug.name}</h3>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-5">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-1">Standard Dosing</h4>
              <p className="text-base font-semibold text-blue-800">{drug.standardDosing} {drug.doseUnit}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-1">Available Concentrations</h4>
              <ul className="list-disc pl-5 space-y-1">
                {drug.concentrationAvailable.map((concentration, index) => (
                  <li key={index} className="text-sm">{concentration}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-1">Formulation</h4>
              <p className="text-sm">{drug.formulation}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-1">Available Brands</h4>
              <p className="text-sm">{drug.brands.join(', ')}</p>
            </div>
            
            <div className="bg-blue-50 p-3 rounded-md">
              <h4 className="text-sm font-medium text-blue-800 mb-1">Calculation Information</h4>
              <p className="text-sm">
                {drug.isWeightBased 
                  ? 'This medication requires patient weight for calculation.' 
                  : 'This medication is dosed independently of patient weight.'}
              </p>
              <p className="text-sm mt-1">
                Dose unit: <span className="font-medium">{drug.doseUnit}</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 px-5 py-3 rounded-b-lg">
          <button
            onClick={onClose}
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrugInfoModal;