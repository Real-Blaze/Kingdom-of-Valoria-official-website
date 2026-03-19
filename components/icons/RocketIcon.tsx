import React from 'react';

export const RocketIcon: React.FC<{ className?: string }> = ({ className = "h-10 w-10" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.5-3 1.5-4.5 0-1.5-1.5-1.5-3 0-4.5 1.5-1.5 3-1.5 4.5 0"></path>
        <path d="M12.5 11.5L9 8s3-4 7-4 7 4 4 7-4 7-4 7l-3.5-3.5"></path>
        <path d="M15 12l-3.5 3.5"></path>
    </svg>
);
