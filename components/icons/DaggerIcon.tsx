import React from 'react';

export const DaggerIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 17.5l-5-5"></path>
        <path d="M21 3l-5.5 5.5"></path>
        <path d="M3 21l5.5-5.5"></path>
        <path d="M12 12L10 14"></path>
    </svg>
);