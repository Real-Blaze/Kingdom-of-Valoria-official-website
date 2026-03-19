import React from 'react';

export const CityHallIcon: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22h20"></path>
        <path d="M18 10l-6-4-6 4"></path>
        <path d="M12 22V10"></path>
        <path d="M4 22V10"></path>
        <path d="M20 22V10"></path>
        <path d="M6 14h12"></path>
        <path d="M6 18h12"></path>
        <path d="M15 6h-1a2 2 0 1 0-4 0H9"></path>
    </svg>
);