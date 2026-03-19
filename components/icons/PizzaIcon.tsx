import React from 'react';

export const PizzaIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 12.17l4.59-4.58L17 9l-6 6z"></path>
        <path d="M12 22c-3.79 0-7.17-2.13-8.89-5.22.8-1.07 1.88-1.88 3.12-2.33 1.25-.45 2.6-.61 3.99-.42.9.12 1.76.43 2.53.88l-1.75 1.75c-.39.39-.39 1.02 0 1.41l3.54 3.54c.39.39 1.02.39 1.41 0l1.75-1.75c.45.77.76 1.63.88 2.53.19 1.39.03 2.74-.42 3.99-.45 1.24-1.26 2.32-2.33 3.12C19.17 19.87 15.79 22 12 22z"></path>
    </svg>
);
