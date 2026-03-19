import React from 'react';

export const TrophyIcon: React.FC<{ className?: string }> = ({ className = "h-7 w-7" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V18"/>
        <path d="M8 22h8"/>
        <path d="M12 18c-3.31 0-6-2.69-6-6V7h12v5c0 3.31-2.69 6-6 6z"/>
        <path d="M6 7h12"/>
        <path d="M6 7a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h0"/>
        <path d="M18 7a2 2 0 0 1 2 2v1c0 1.1-.9 2-2 2h0"/>
    </svg>
);
