import React from 'react';

export const CrystalBallIcon: React.FC<{ className?: string }> = ({ className = "h-10 w-10" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="10" r="8"></circle>
        <line x1="12" y1="22" x2="12" y2="18"></line>
        <line x1="7" y1="22" x2="17" y2="22"></line>
    </svg>
);
