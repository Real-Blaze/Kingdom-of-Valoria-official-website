import React from 'react';

export const GovernmentIcon: React.FC<{ className?: string }> = ({ className = "h-10 w-10" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22h20"></path>
        <path d="M5.5 22V12.5"></path>
        <path d="M9.5 22V12.5"></path>
        <path d="M14.5 22V12.5"></path>
        <path d="M18.5 22V12.5"></path>
        <path d="M3.5 12.5L12 6l8.5 6.5"></path>
        <path d="M2 12.5h20"></path>
    </svg>
);
