import React, { useState, useEffect } from 'react';
import { CrownIcon } from './icons/CrownIcon';

const legendaryQuotes = [
  { text: "Dep khat lo chuan ka phal lo", author: "Father Zephyrus" },
  { text: "Lusei hnap ngah ho!", author: "Father Zephyrus" },
  { text: "Lawng pi kha ka va ngai em", author: "Father Zephyrus" },
  { text: "Len lai a rual lo hi a pawi em mai", author: "Father Zephyrus" },
  { text: "Mesak zawnga!", author: "Father Zephyrus" },
  { text: "He committee hi mipui sang tam tak zingah ka hawng e", author: "Father Zephyrus" },
  { text: "Kan lungtat a par hma loh chuan", author: "Father Zephyrus" },
  { text: "Min hmusit a nih kha", author: "Admiral Ruatdika" },
  { text: "Polite manner te hi hriat tur a nia", author: "Pi Marova" },
  { text: "Ka tum hi in tum aiin a ruh a nia", author: "Rinawmi" },
  { text: "A hmingin tual upa te chu kan ni ve a", author: "TPa" },
];

export const Header: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % legendaryQuotes.length);
    }, 6000); // Rotate every 6 seconds
    return () => clearInterval(interval);
  }, []);

  const navLinks: {name: string, page: string}[] = [
    { name: 'Home', page: 'home' },
    { name: 'News', page: 'news' },
    { name: 'History', page: 'history' },
    { name: 'Government', page: 'government' },
    { name: 'Military', page: 'military' },
    { name: 'Culture', page: 'culture' },
    { name: 'Projects', page: 'projects' },
    { name: 'Citizenship', page: 'citizenship' },
  ];
  
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    onNavigate(page);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };


  return (
    <header className="bg-red-600 text-white shadow-lg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center relative">
        {/* Hamburger Menu */}
        <div className="absolute top-0 left-0 h-full flex items-center pl-4 sm:pl-6">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-white">
              <span className="sr-only">Open menu</span>
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
        </div>
        
        <CrownIcon className="h-12 w-12 text-yellow-300 mx-auto mb-2 animate-subtle-shine" />
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight font-serif cursor-pointer" onClick={() => onNavigate('home')}>
          Kingdom of Valoria
        </h1>
        <p className="mt-1 text-lg italic">
          "In Stick and Stone We Trust"
        </p>

        {/* Rotating Legendary Quotes */}
        <div className="mt-6 h-12 flex items-center justify-center overflow-hidden">
            <div 
                key={currentQuoteIndex} 
                className="animate-fade-in-up bg-red-800/50 px-6 py-2 rounded-full border border-red-400/30 shadow-inner"
            >
                <p className="text-sm sm:text-base font-medium text-yellow-100">
                    <span className="text-yellow-400 mr-2">★</span>
                    "{legendaryQuotes[currentQuoteIndex].text}" 
                    <span className="opacity-75 ml-2 text-xs sm:text-sm">— {legendaryQuotes[currentQuoteIndex].author}</span>
                </p>
            </div>
        </div>

      </div>
      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 z-50 transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)}></div>
        <div className="absolute top-0 left-0 w-64 h-full bg-red-700 shadow-2xl flex flex-col">
          <div className="p-4 flex justify-end border-b border-red-600">
            <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2 rounded-md hover:bg-red-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col py-4 overflow-y-auto">
            {navLinks.map((link) => (
              <a key={link.name} href={`#${link.page}`} onClick={(e) => handleNav(e, link.page)} className="text-white hover:bg-red-600 transition-colors duration-150 font-medium text-lg px-6 py-3 border-b border-red-600/50">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
