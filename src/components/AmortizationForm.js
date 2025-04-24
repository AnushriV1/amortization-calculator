import React, { useState } from 'react';

function AmortizationForm({ onCalculate }) {
  const [formData, setFormData] = useState({
    principal: '',
    annualRate: '',
    years: ''
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.principal || isNaN(formData.principal) || parseFloat(formData.principal) <= 0) {
      newErrors.principal = 'Please enter a valid loan amount';
    }
    
    if (!formData.annualRate || isNaN(formData.annualRate) || parseFloat(formData.annualRate) <= 0) {
      newErrors.annualRate = 'Please enter a valid interest rate';
    }
    
    if (!formData.years || isNaN(formData.years) || parseInt(formData.years) <= 0) {
      newErrors.years = 'Please enter a valid loan term';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onCalculate(formData);
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Loan Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Principal Amount ($)</label>
            <input
              type="number"
              name="principal"
              value={formData.principal}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter loan amount"
              step="0.01"
              min="0"
            />
            {errors.principal && <p className="text-red-500 text-sm mt-1">{errors.principal}</p>}
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Annual Interest Rate (%)</label>
            <input
              type="number"
              name="annualRate"
              value={formData.annualRate}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter interest rate"
              step="0.01"
              min="0"
            />
            {errors.annualRate && <p className="text-red-500 text-sm mt-1">{errors.annualRate}</p>}
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Loan Term (Years)</label>
            <input
              type="number"
              name="years"
              value={formData.years}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter loan term"
              min="1"
            />
            {errors.years && <p className="text-red-500 text-sm mt-1">{errors.years}</p>}
          </div>
        </div>
        
        <div className="flex justify-center">
          <button 
            type="submit" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow transition-colors"
          >
            Calculate
          </button>
        </div>
      </form>
    </div>
  );
}

export default AmortizationForm;