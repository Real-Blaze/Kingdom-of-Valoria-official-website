import React from 'react';
import { ArmedForcesIcon } from './icons/ArmedForcesIcon';

interface MilitaryPageProps {
  onNavigate: (page: string) => void;
}

export const MilitaryPage: React.FC<MilitaryPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-gray-100 min-h-screen animate-fade-in-up">
      <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-left mb-4">
            <button onClick={() => onNavigate('home')} className="text-blue-600 hover:text-blue-800 font-bold transition-colors">
                &larr; Back to Kingdom Home
            </button>
        </div>

        <div className="flex items-center justify-center text-center border-b-2 border-gray-300 pb-4 mb-8">
            <ArmedForcesIcon className="h-10 w-10 text-red-800 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800 font-serif">Royal Armed Forces</h2>
        </div>

        <section className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif border-b pb-2">The Valorian Defense Doctrine</h3>
            <div className="space-y-4 text-gray-700">
                <p>
                    The Royal Armed Forces of Valoria are dedicated to the protection of our citizens, our ideals, and our digital borders. We believe in defense through innovation, strategy, and unwavering loyalty to the Crown.
                </p>
                <p>
                    While our origins lie in the legendary "Stick Wars" of the schoolyard, our modern military focuses on strategic gaming, cybersecurity, and the development of advanced theoretical defense systems like the King Callistus Supercarrier.
                </p>
            </div>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif border-b pb-2">Branches of Service</h3>
            <div className="grid md:grid-cols-2 gap-6">
                <BranchCard 
                    title="The Royal Guard" 
                    commander="Field Marshal Kaldor"
                    description="The elite infantry and personal protectors of the Valotrinity. They are the first line of defense and the masters of ground strategy." 
                />
                <BranchCard 
                    title="The Naval Fleet" 
                    commander="Lord Aegis & Admiral Ruatdika"
                    description="Commanders of the seas (and puddles). Currently overseeing the ambitious King Callistus Supercarrier project." 
                />
                <BranchCard 
                    title="The Caelumbra Rangers" 
                    commander="Lord Elion"
                    description="Scouts, explorers, and rapid response units. They specialize in charting new territories and gathering intelligence." 
                />
                <BranchCard 
                    title="Cyber Command" 
                    commander="Minister of Technology"
                    description="The digital shield of Valoria. Responsible for protecting our online infrastructure, communications, and the Celestial Nexus." 
                />
            </div>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif border-b pb-2">Active Projects & Operations</h3>
            <div className="space-y-6">
                <OperationEvent 
                    status="In Development" 
                    title="Project: Leviathan (The Supercarrier)" 
                    description="The design and theoretical construction of the King Callistus Supercarrier, a massive vessel intended to project Valorian power across the digital oceans." 
                />
                <OperationEvent 
                    status="Ongoing" 
                    title="Operation: Aegis Shield" 
                    description="Continuous upgrading of our cybersecurity protocols to protect the Kingdom Hub and citizen data from external threats." 
                />
                <OperationEvent 
                    status="Planning Phase" 
                    title="The Grand Strategy Tournament" 
                    description="An upcoming kingdom-wide event to test the tactical acumen of our citizens in various strategy games." 
                />
            </div>
        </section>
      </main>
    </div>
  );
};

const BranchCard: React.FC<{title: string, commander: string, description: string}> = ({ title, commander, description }) => (
    <div className="bg-red-50 p-6 rounded-xl border border-red-100">
        <h4 className="text-xl font-bold text-red-900 mb-1">{title}</h4>
        <p className="text-sm font-bold text-red-700 uppercase tracking-wider mb-3">Commanded by: {commander}</p>
        <p className="text-gray-700">{description}</p>
    </div>
);

const OperationEvent: React.FC<{status: string, title: string, description: string}> = ({ status, title, description }) => (
    <div className="border-l-4 border-red-500 pl-4 py-2">
        <span className="inline-block px-2 py-1 bg-red-100 text-red-800 text-xs font-bold uppercase tracking-wider rounded mb-2">{status}</span>
        <h4 className="text-lg font-bold text-gray-900 mb-1">{title}</h4>
        <p className="text-gray-700">{description}</p>
    </div>
);
