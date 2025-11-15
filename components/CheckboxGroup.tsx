
import React from 'react';

interface CheckboxGroupProps {
  legend: string;
  name: string;
  options: { value: string; label: string }[];
  selectedValues: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ legend, name, options, selectedValues, onChange }) => {
  return (
    <fieldset className="mb-4">
      <legend className="block text-sm font-medium text-gray-300 mb-2">{legend}</legend>
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              id={`${name}-${option.value}`}
              name={name}
              type="checkbox"
              value={option.value}
              checked={selectedValues.includes(option.value)}
              onChange={onChange}
              className="h-4 w-4 rounded border-gray-500 bg-gray-700 text-cyan-500 focus:ring-cyan-600"
            />
            <label htmlFor={`${name}-${option.value}`} className="ml-3 text-sm text-gray-300">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default CheckboxGroup;
