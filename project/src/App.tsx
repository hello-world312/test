import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import DrugSelector from './components/DrugSelector';
import CalculatorForm from './components/CalculatorForm';
import ResultDisplay from './components/ResultDisplay';
import DrugInfoModal from './components/DrugInfoModal';
import ReferenceTable from './components/ReferenceTable';
import { drugs } from './data/drugs';
import { calculateInfusionRate } from './utils/calculations';
import { CalculationInput, CalculationResult, Drug } from './types/types';

function App() {
  const [selectedDrugId, setSelectedDrugId] = useState<string>('');
  const [calculationResult, setCalculationResult] = useState<CalculationResult | null>(null);
  const [showDrugInfo, setShowDrugInfo] = useState<Drug | null>(null);
  
  const handleDrugSelect = (drugId: string) => {
    setSelectedDrugId(drugId);
    setCalculationResult(null);
  };
  
  const handleCalculate = (input: CalculationInput) => {
    try {
      const result = calculateInfusionRate(input);
      setCalculationResult(result);
      
      // Scroll to result smoothly
      setTimeout(() => {
        const resultElement = document.getElementById('result-section');
        if (resultElement) {
          resultElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } catch (error) {
      console.error('Calculation error:', error);
    }
  };
  
  const handleInfoClick = (drugId: string) => {
    const drug = drugs.find(d => d.id === drugId);
    if (drug) {
      setShowDrugInfo(drug);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="max-w-7xl mx-auto">
          <section className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">ICU Infusion Calculator</h1>
            <p className="text-gray-600">
              Calculate infusion rates for critical care medications using standard concentrations and patient-specific parameters.
            </p>
          </section>
          
          <section>
            <DrugSelector 
              selectedDrugId={selectedDrugId} 
              onDrugSelect={handleDrugSelect}
              onInfoClick={handleInfoClick}
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <CalculatorForm 
                  selectedDrugId={selectedDrugId}
                  onCalculate={handleCalculate}
                />
              </div>
              
              <div id="result-section">
                <ResultDisplay result={calculationResult} />
              </div>
            </div>
          </section>

          <ReferenceTable />
        </div>
      </main>
      
      <Footer />
      
      {showDrugInfo && (
        <DrugInfoModal 
          drug={showDrugInfo} 
          onClose={() => setShowDrugInfo(null)} 
        />
      )}
    </div>
  );
}

export default App;