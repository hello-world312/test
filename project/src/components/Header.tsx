import React from 'react';
import { ActivitySquare } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <ActivitySquare className="h-8 w-8 text-blue-200" />
          <div>
            <h1 className="text-xl font-bold tracking-tight">ICU Infusion Calculator</h1>
            <p className="text-sm text-blue-200">Vasopressor & Inotrope Dosing</p>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="text-xs text-blue-200 text-right">
            <p>For clinical use by medical professionals</p>
            <p>Verify all calculations before use</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;