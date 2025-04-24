import React from 'react';

function AmortizationSummary({ loanDetails }) {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Loan Summary</h2>
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-gray-600">Principal Amount</p>
            <p className="text-2xl font-bold text-blue-600">{formatCurrency(loanDetails.principal)}</p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">Monthly Payment</p>
            <p className="text-2xl font-bold text-blue-600">{formatCurrency(loanDetails.monthlyPayment)}</p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">Loan Term</p>
            <p className="text-2xl font-bold text-blue-600">{loanDetails.years} years</p>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-gray-600">Interest Rate</p>
            <p className="text-2xl font-bold text-blue-600">{loanDetails.annualRate}%</p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">Total Interest</p>
            <p className="text-2xl font-bold text-blue-600">{formatCurrency(loanDetails.totalInterest)}</p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">Total Loan Cost</p>
            <p className="text-2xl font-bold text-blue-600">{formatCurrency(loanDetails.totalPaid)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AmortizationSummary;