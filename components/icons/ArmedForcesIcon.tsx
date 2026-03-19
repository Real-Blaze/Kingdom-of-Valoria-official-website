import React from 'react';

export const ArmedForcesIcon: React.FC<{ className?: string }> = ({ className = "h-10 w-10" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 17.5l-5-5"></path>
        <path d="M20 9.5L9.5 20"></path>
        <path d="M4 14.5l5.5-5.5"></path>
        <path d="M9.5 4L4 9.5"></path>
        <path d="M14.5 4l5.5 5.5"></path>
    </svg>
);
