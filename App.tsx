
import React from 'react';
import Header from './components/Header';
import PaymentForm from './components/PaymentForm';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800" style={{ fontFamily: 'Arial, sans-serif' }}>
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center text-sm text-gray-500 mb-4" aria-label="breadcrumb">
          <a href="#" className="hover:underline">דואר ישראל</a>
          <svg className="h-5 w-5 text-gray-400 mx-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="font-medium text-gray-700">שירותי עמילות מכס</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          שירותי עמילות מכס
        </h1>
        <PaymentForm />
      </main>
    </div>
  );
};

export default App;
