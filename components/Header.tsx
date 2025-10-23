
import React from 'react';
import { ISRAEL_POST_LOGO_BASE64 } from '../constants';

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const ChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const EditIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" />
    </svg>
);

const DownArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
);

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top bar */}
                <div className="flex justify-end items-center h-10 border-b border-gray-200 text-xs text-gray-600">
                    <a href="#" className="flex items-center hover:text-red-600">
                        <EditIcon />
                        סוכני דואר/סניפים
                    </a>
                    <span className="mx-3 text-gray-300">|</span>
                    <a href="#" className="flex items-center hover:text-red-600">
                        <DownArrowIcon />
                        עברית
                    </a>
                </div>

                {/* Main header */}
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center space-x-6">
                        <a href="#">
                            <img src={ISRAEL_POST_LOGO_BASE64} alt="דואר ישראל" className="h-16" />
                        </a>
                        <button className="flex items-center space-x-2 text-lg font-bold">
                            <MenuIcon />
                            <span>תפריט</span>
                        </button>
                    </div>

                    <div className="flex items-center space-x-4">
                        <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-red-600">
                            <ChatIcon />
                            <span>יצירת קשר</span>
                        </a>
                        <button className="p-2 rounded-full hover:bg-gray-100">
                            <SearchIcon />
                        </button>
                        <a href="#" className="bg-red-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-red-700 transition-colors">
                            כניסה לאיזור אישי
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
