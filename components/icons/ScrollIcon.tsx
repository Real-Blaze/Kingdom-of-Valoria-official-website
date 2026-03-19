import React from 'react';

export const ScrollIcon: React.FC<{ className?: string }> = ({ className = "h-10 w-10" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2v0a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1"></path>
    <path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2v0a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1"></path>
    <rect x="8" y="3" width="8" height="18" rx="1"></rect>
  </svg>
);
