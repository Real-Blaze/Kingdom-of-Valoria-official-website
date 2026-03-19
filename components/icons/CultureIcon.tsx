import React from 'react';

export const CultureIcon: React.FC<{ className?: string }> = ({ className = "h-10 w-10" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
        <path d="M9 9h.01"></path>
        <path d="M15 9h.01"></path>
        <path d="M18.5 4.5c-1.67 0-3.18.83-4.1 2.1"></path>
        <path d="M5.5 4.5c1.67 0 3.18.83 4.1 2.1"></path>
    </svg>
);
