import React from 'react';

export const TornadoIcon: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 4H3"></path>
        <path d="M18 8H6"></path>
        <path d="M20 12H4"></path>
        <path d="M16 16H8"></path>
        <path d="M18 20H6"></path>
    </svg>
);