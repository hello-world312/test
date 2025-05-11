import { Drug } from '../types/types';
import { Heart, Activity, Droplet, Dna, Syringe, BarChart3, CrosshairIcon } from 'lucide-react';

export const drugs: Drug[] = [
  {
    id: 'norepinephrine',
    name: 'Norepinephrine (Noradrenaline)',
    concentrationAvailable: ['4 mg/4 mL ampoule (1 mg/mL)'],
    formulation: 'Ampoule for IV infusion',
    brands: ['Noradrenaline', 'Levophed'],
    standardDosing: '0.05–1 mcg/kg/min',
    doseUnit: 'mcg/kg/min',
    doseRangeMin: 0.05,
    doseRangeMax: 1,
    isWeightBased: true,
    icon: 'Activity',
    color: 'blue'
  },
  {
    id: 'epinephrine',
    name: 'Epinephrine (Adrenaline)',
    concentrationAvailable: ['1 mg/mL (1:1000)', '0.1 mg/mL (1:10,000)'],
    formulation: 'Ampoule for IV/IM injection, Pre-filled syringes',
    brands: ['Adrenaline 1:1000 INJ', 'Dilute Adrenaline 1:10,000'],
    standardDosing: '0.01–0.5 mcg/kg/min',
    doseUnit: 'mcg/kg/min',
    doseRangeMin: 0.01,
    doseRangeMax: 0.5,
    isWeightBased: true,
    icon: 'Zap',
    color: 'yellow'
  },
  {
    id: 'dopamine',
    name: 'Dopamine',
    concentrationAvailable: ['200 mg/5 mL ampoule (40 mg/mL)'],
    formulation: 'Concentrate for IV infusion',
    brands: ['Dopamine Fresenius'],
    standardDosing: '2–20 mcg/kg/min',
    doseUnit: 'mcg/kg/min',
    doseRangeMin: 2,
    doseRangeMax: 20,
    isWeightBased: true,
    icon: 'Syringe',
    color: 'purple'
  },
  {
    id: 'dobutamine',
    name: 'Dobutamine',
    concentrationAvailable: ['12.5 mg/mL in 20 mL ampoule (250 mg total)', '250 mg/vial'],
    formulation: 'Ampoule for IV infusion',
    brands: ['Dobutamine HCl', 'Dobutrex'],
    standardDosing: '2–20 mcg/kg/min',
    doseUnit: 'mcg/kg/min',
    doseRangeMin: 2,
    doseRangeMax: 20,
    isWeightBased: true,
    icon: 'Heart',
    color: 'red'
  },
  {
    id: 'vasopressin',
    name: 'Vasopressin',
    concentrationAvailable: ['20 units/mL in 1 mL ampoule'],
    formulation: 'Ampoule for IV infusion',
    brands: ['Vasopressin Injection'],
    standardDosing: '0.01–0.04 units/min',
    doseUnit: 'units/min',
    doseRangeMin: 0.01,
    doseRangeMax: 0.04,
    isWeightBased: false,
    icon: 'Dna',
    color: 'teal'
  },
  {
    id: 'milrinone',
    name: 'Milrinone',
    concentrationAvailable: ['1 mg/mL in 10 mL ampoule (10 mg total)'],
    formulation: 'Ampoule for IV infusion',
    brands: ['Milrinone Lactate Injection'],
    standardDosing: '0.25–0.75 mcg/kg/min',
    doseUnit: 'mcg/kg/min',
    doseRangeMin: 0.25,
    doseRangeMax: 0.75,
    isWeightBased: true,
    icon: 'BarChart3',
    color: 'indigo'
  },
  {
    id: 'nitroglycerin',
    name: 'Nitroglycerin (Glyceryl Trinitrate)',
    concentrationAvailable: ['1 mg/mL in 50 mL ampoule (50 mg total)'],
    formulation: 'Ampoule for IV infusion',
    brands: ['Nitronal', 'Tridil'],
    standardDosing: '5–200 mcg/min',
    doseUnit: 'mcg/min',
    doseRangeMin: 5,
    doseRangeMax: 200,
    isWeightBased: false,
    icon: 'Droplet',
    color: 'green'
  }
];

export const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Heart':
      return Heart;
    case 'Activity':
      return Activity;
    case 'Droplet':
      return Droplet;
    case 'Dna':
      return Dna;
    case 'Syringe':
      return Syringe;
    case 'BarChart3':
      return BarChart3;
    case 'Zap':
      return Activity; // Using Activity as a substitute for Zap
    default:
      return CrosshairIcon;
  }
};

export const getDefaultConcentration = (drugId: string): number => {
  switch (drugId) {
    case 'norepinephrine':
      return 4; // 4mg in 50ml
    case 'epinephrine':
      return 4; // 4mg in 50ml
    case 'dopamine':
      return 200; // 200mg in 50ml
    case 'dobutamine':
      return 250; // 250mg in 50ml
    case 'vasopressin':
      return 20; // 20 units in 50ml
    case 'milrinone':
      return 10; // 10mg in 50ml
    case 'nitroglycerin':
      return 50; // 50mg in 50ml
    default:
      return 0;
  }
};

export const getConcentrationUnit = (drugId: string): string => {
  return drugId === 'vasopressin' ? 'units' : 'mg';
};