import React from 'react';

export const WaveIcon: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6c.9.8 1.8 1.6 2.8 2.2 1.4 1 2.9 1 4.2 0 .9-.8 1.8-1.6 2.8-2.2 1.4-1 2.9-1 4.2 0 .9.8 1.8 1.6 2.8 2.2"></path>
        <path d="M3 12c.9.8 1.8 1.6 2.8 2.2 1.4 1 2.9 1 4.2 0 .9-.8 1.8-1.6 2.8-2.2 1.4-1 2.9-1 4.2 0 .9.8 1.8 1.6 2.8 2.2"></path>
        <path d="M3 18c.9.8 1.8 1.6 2.8 2.2 1.4 1 2.9 1 4.2 0 .9-.8 1.8-1.6 2.8-2.2 1.4-1 2.9-1 4.2 0 .9.8 1.8 1.6 2.8 2.2"></path>
    </svg>
);