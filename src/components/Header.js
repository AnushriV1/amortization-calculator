import React from 'react';

function Header() {
  return (
    <header className="bg-blue-600 text-white py-6">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center">Loan Amortization Calculator</h1>
        <p className="text-center mt-2">Calculate your monthly payments and view your complete amortization schedule</p>
      </div>
    </header>
  );
}

export default Header;