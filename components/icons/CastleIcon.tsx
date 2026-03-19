import React from 'react';

export const CastleIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 22H2v-8h1V9s0-4 5-4 5 4 5 4v5h1v-1.1L22 12V2z"></path>
        <path d="M15 9V4"></path>
        <path d="M8 9V4"></path>
        <path d="M2 14h20"></path>
    </svg>
);
