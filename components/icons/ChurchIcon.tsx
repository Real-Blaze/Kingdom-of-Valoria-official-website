import React from 'react';

export const ChurchIcon: React.FC<{ className?: string }> = ({ className = "h-10 w-10" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L12 6"></path>
    <path d="M10 6L14 6"></path>
    <path d="M12 15L12 22"></path>
    <path d="M8 22L16 22"></path>
    <path d="M18 9.6L12 4.8L6 9.6V20H18V9.6Z"></path>
  </svg>
);
