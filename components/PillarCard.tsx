
import React from 'react';

interface PillarCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const PillarCard: React.FC<PillarCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-100 ease-in-out border-t-4 border-valoria-gold-400">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-valoria-purple-100 text-valoria-purple-700 mx-auto mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-center text-valoria-purple-900 mb-2 font-serif">{title}</h3>
      <p className="text-center text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};
