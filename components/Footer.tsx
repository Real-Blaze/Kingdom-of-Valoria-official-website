
import React from 'react';
import { CrownIcon } from './icons/CrownIcon';
import { VisitorCounter } from './VisitorCounter';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
            <a href="#" className="flex items-center space-x-2 mb-4">
                <CrownIcon className="h-8 w-8 text-emerald-400" />
                <span className="text-2xl font-bold text-white font-serif">Valoria</span>
            </a>
          <p className="text-slate-400 max-w-md mx-auto">
            A kingdom of our own making. Built from dreams, friendship, and the pursuit of excellence.
          </p>
          
          <div className="mt-10 w-full max-w-xs">
            <VisitorCounter />
          </div>

          <div className="mt-8 flex justify-center space-x-6">
            {/* Social media icons can go here */}
          </div>
          <p className="mt-8 text-center text-xs text-slate-500 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Kingdom of Valoria. All rights reserved. Long live the King!
          </p>
        </div>
      </div>
    </footer>
  );
};