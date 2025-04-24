import React, { useState } from 'react';
import Header from './components/Header';
import AmortizationForm from './components/AmortizationForm';
import AmortizationSummary from './components/AmortizationSummary';
import AmortizationSchedule from './components/AmortizationSchedule';
import './App.css';

function App() {
  const [loanDetails, setLoanDetails] = useState(null);
  const [schedule, setSchedule] = useState([]);

  const handleCalculate = (formData) => {
    // Calculate monthly payment and generate amortization schedule
    const principal = parseFloat(formData.principal);
    const annualRate = parseFloat(formData.annualRate) / 100;
    const years = parseInt(formData.years);
    
    const monthlyRate = annualRate / 12;
    const totalPayments = years * 12;
    
    // Calculate monthly payment using the formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
    const monthlyPayment = principal * monthlyRate * Math.pow(1 + monthlyRate, totalPayments) / 
                          (Math.pow(1 + monthlyRate, totalPayments) - 1);
    
    // Generate amortization schedule
    let balance = principal;
    let totalInterest = 0;
    const newSchedule = [];
    
    for (let month = 1; month <= totalPayments; month++) {
      const interestPayment = balance * monthlyRate;
      const principalPayment = monthlyPayment - interestPayment;
      
      totalInterest += interestPayment;
      balance -= principalPayment;
      
      newSchedule.push({
        month,
        payment: monthlyPayment,
        principalPayment,
        interestPayment,
        totalInterest,
        balance: balance > 0 ? balance : 0
      });
    }
    
    setLoanDetails({
      principal,
      annualRate: formData.annualRate,
      years,
      monthlyPayment,
      totalInterest,
      totalPaid: principal + totalInterest
    });
    
    setSchedule(newSchedule);
  };

  return (
    <div className="App">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <AmortizationForm onCalculate={handleCalculate} />
            
            {loanDetails && (
              <>
                <AmortizationSummary loanDetails={loanDetails} />
                <AmortizationSchedule schedule={schedule} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;