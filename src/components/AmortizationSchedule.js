import React, { useState } from 'react';

function AmortizationSchedule({ schedule }) {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 12;
  
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  };
  
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = schedule.slice(indexOfFirstRow, indexOfLastRow);
  
  const totalPages = Math.ceil(schedule.length / rowsPerPage);
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Amortization Schedule</h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left">Month</th>
              <th className="py-3 px-4 text-right">Payment</th>
              <th className="py-3 px-4 text-right">Principal</th>
              <th className="py-3 px-4 text-right">Interest</th>
              <th className="py-3 px-4 text-right">Total Interest</th>
              <th className="py-3 px-4 text-right">Remaining Balance</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row) => (
              <tr key={row.month} className="border-t border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4">{row.month}</td>
                <td className="py-3 px-4 text-right">{formatCurrency(row.payment)}</td>
                <td className="py-3 px-4 text-right">{formatCurrency(row.principalPayment)}</td>
                <td className="py-3 px-4 text-right">{formatCurrency(row.interestPayment)}</td>
                <td className="py-3 px-4 text-right">{formatCurrency(row.totalInterest)}</td>
                <td className="py-3 px-4 text-right">{formatCurrency(row.balance)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {totalPages > 1 && (
        <div className="flex justify-center mt-6">
          <nav>
            <ul className="flex list-none">
              <li>
                <button 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`mx-1 px-3 py-1 rounded ${
                    currentPage === 1 
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Previous
                </button>
              </li>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter(page => page === 1 || page === totalPages || Math.abs(page - currentPage) <= 2)
                .map((page, index, array) => {
                  // Add ellipsis
                  if (index > 0 && page - array[index - 1] > 1) {
                    return (
                      <React.Fragment key={`ellipsis-${page}`}>
                        <li>
                          <span className="mx-1 px-3 py-1">...</span>
                        </li>
                        <li>
                          <button 
                            onClick={() => handlePageChange(page)}
                            className={`mx-1 px-3 py-1 rounded ${
                              currentPage === page 
                                ? 'bg-blue-600 text-white' 
                                : 'bg-gray-200 hover:bg-gray-300'
                            }`}
                          >
                            {page}
                          </button>
                        </li>
                      </React.Fragment>
                    );
                  }
                  
                  return (
                    <li key={page}>
                      <button 
                        onClick={() => handlePageChange(page)}
                        className={`mx-1 px-3 py-1 rounded ${
                          currentPage === page 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                      >
                        {page}
                      </button>
                    </li>
                  );
                })}
              
              <li>
                <button 
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`mx-1 px-3 py-1 rounded ${
                    currentPage === totalPages
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default AmortizationSchedule;
