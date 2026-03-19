import React from 'react';

export const PaletteIcon: React.FC<{ className?: string }> = ({ className = "h-7 w-7" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 2a10 10 0 0 0-4.68 1.41"></path>
        <path d="M16.68 3.82A10 10 0 0 1 22 12"></path>
        <path d="M7.32 20.18A10 10 0 0 0 12 22"></path>
        <path d="M2 12a10 10 0 0 1 5.32-8.59"></path>
        <circle cx="12" cy="12" r="2"></circle>
        <circle cx="7" cy="7" r="1"></circle>
        <circle cx="17" cy="7" r="1"></circle>
        <circle cx="7" cy="17" r="1"></circle>
        <circle cx="17" cy="17" r="1"></circle>
    </svg>
);
