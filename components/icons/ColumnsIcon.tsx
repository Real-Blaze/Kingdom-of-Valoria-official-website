import React from 'react';

export const ColumnsIcon: React.FC<{ className?: string }> = ({ className = "h-10 w-10" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22h20"></path>
        <path d="M6 22V7"></path>
        <path d="M12 22V7"></path>
        <path d="M18 22V7"></path>
        <path d="M4 7h16"></path>
        <path d="M3 7l9-4 9 4"></path>
    </svg>
);
