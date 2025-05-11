import React from 'react';
import { AlertCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 flex items-center">
            <AlertCircle className="h-5 w-5 text-amber-400 mr-2" />
            <p className="text-sm text-amber-100">
              This tool is an aid; final verification required by physician
            </p>
          </div>
          <div className="text-sm text-gray-400">
            © {currentYear} ICU Infusion Calculator
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-700 text-xs text-gray-400">
          <p>Reference to standard Egyptian market formulations. Do not use in emergency situations without verification.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;