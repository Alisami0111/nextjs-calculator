// pages/calculator.tsx
'use client'
import { useState } from 'react';

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleClick = (value: string) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-4 bg-green-600 rounded-lg shadow-md">
      <div className="mb-4">
        <input
          type="text"
          value={input}
          readOnly
          className="w-full p-2 text-xl bg-black border border-gray-300 rounded"
        />
        <div className="text-right mt-2 text-2xl">{result}</div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '.', '0', 'C', '←', '/', '='].map((value) => (
          <button
            key={value}
            onClick={() => {
              if (value === 'C') handleClear();
              else if (value === '←') handleBackspace();
              else if (value === '=') handleCalculate();
              else handleClick(value);
            }}
            className="p-4 text-xl bg-gray-900 rounded hover:bg-gray-700"
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
