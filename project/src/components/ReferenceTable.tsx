import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ReferenceTable: React.FC = () => {
  const [showTable, setShowTable] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Vasopressors and Inotropes Reference Guide
        </h2>
      </div>
      
      <button
        onClick={() => setShowTable(!showTable)}
        className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors mb-4"
      >
        <span className="font-medium text-gray-700">Dosing Reference Table</span>
        {showTable ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </button>
      
      {showTable && (
        <div className="overflow-x-auto mb-6 animate-fadeIn">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Agent</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trade Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Initial Dose</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Maintenance Dose Range</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Maximum Doses in Refractory Shock</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Norepinephrine (noradrenaline)</td>
                <td className="px-4 py-3 text-sm text-gray-500">Levophed</td>
                <td className="px-4 py-3 text-sm text-gray-500">
                  5 to 15 mcg/minute (0.05 to 0.15 mcg/kg/minute)<br/>
                  Cardiogenic shock: 0.05 mcg/kg/minute
                </td>
                <td className="px-4 py-3 text-sm text-gray-500">
                  2 to 80 mcg/minute (0.025 to 1 mcg/kg/minute)<br/>
                  Cardiogenic shock: 0.05 to 0.4 mcg/kg/minute
                </td>
                <td className="px-4 py-3 text-sm text-gray-500">80 to 250 mcg/minute (1 to 3.3 mcg/kg/minute)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Epinephrine (adrenaline)</td>
                <td className="px-4 py-3 text-sm text-gray-500">Adrenalin</td>
                <td className="px-4 py-3 text-sm text-gray-500">1 to 15 mcg/minute (0.01 to 0.2 mcg/kg/minute)</td>
                <td className="px-4 py-3 text-sm text-gray-500">1 to 40 mcg/minute (0.01 to 0.5 mcg/kg/minute)</td>
                <td className="px-4 py-3 text-sm text-gray-500">40 to 160 mcg/minute (0.5 to 2 mcg/kg/minute)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Dopamine</td>
                <td className="px-4 py-3 text-sm text-gray-500">Intropin</td>
                <td className="px-4 py-3 text-sm text-gray-500">2 to 5 mcg/kg/minute</td>
                <td className="px-4 py-3 text-sm text-gray-500">2 to 20 mcg/kg/minute</td>
                <td className="px-4 py-3 text-sm text-gray-500">20 mcg/kg/minute</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Vasopressin</td>
                <td className="px-4 py-3 text-sm text-gray-500">Pitressin, Vasostrict</td>
                <td className="px-4 py-3 text-sm text-gray-500">0.03 units/minute</td>
                <td className="px-4 py-3 text-sm text-gray-500">0.01 to 0.04 units/minute (not titrated)</td>
                <td className="px-4 py-3 text-sm text-gray-500">{'>'} 0.04 units/minute reserved for salvage therapy</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Dobutamine</td>
                <td className="px-4 py-3 text-sm text-gray-500">Dobutrex</td>
                <td className="px-4 py-3 text-sm text-gray-500">2 to 5 mcg/kg/minute (range: 0.5 to 5)</td>
                <td className="px-4 py-3 text-sm text-gray-500">2 to 10 mcg/kg/minute</td>
                <td className="px-4 py-3 text-sm text-gray-500">20 mcg/kg/minute</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Milrinone</td>
                <td className="px-4 py-3 text-sm text-gray-500">Primacor</td>
                <td className="px-4 py-3 text-sm text-gray-500">0.125 to 0.25 mcg/kg/minute</td>
                <td className="px-4 py-3 text-sm text-gray-500">0.125 to 0.75 mcg/kg/minute</td>
                <td className="px-4 py-3 text-sm text-gray-500">0.75 mcg/kg/minute</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      
      <button
        onClick={() => setShowNotes(!showNotes)}
        className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
      >
        <span className="font-medium text-gray-700">Important Clinical Notes</span>
        {showNotes ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </button>
      
      {showNotes && (
        <div className="mt-4 p-4 bg-blue-50 rounded-md animate-fadeIn">
          <ul className="list-disc pl-5 space-y-1 text-sm text-blue-700">
            <li>All doses shown are for intravenous (IV) administration in adult patients.</li>
            <li>Vasopressors can cause life-threatening hypotension and hypertension, dysrhythmias, and myocardial ischemia.</li>
            <li>Administration requires an infusion pump and continuous monitoring.</li>
            <li>Correct hypovolemia before starting vasopressor therapy.</li>
            <li>Reduce infusion rate gradually; avoid sudden discontinuation.</li>
            <li>Central line administration is preferred due to risk of tissue ischemia.</li>
            <li>These are high-risk medications requiring careful monitoring.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ReferenceTable;