import React from 'react';
import { RocketIcon } from './icons/RocketIcon';

interface ProjectsPageProps {
  onNavigate: (page: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-gray-100 min-h-screen animate-fade-in-up">
      <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-left mb-4">
            <button onClick={() => onNavigate('home')} className="text-blue-600 hover:text-blue-800 font-bold transition-colors">
                &larr; Back to Kingdom Home
            </button>
        </div>

        <div className="flex items-center justify-center text-center border-b-2 border-gray-300 pb-4 mb-8">
            <RocketIcon className="h-10 w-10 text-sky-800 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800 font-serif">Royal Projects</h2>
        </div>

        <section className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">The King Callistus Supercarrier</h3>
                    <p className="text-sm font-bold text-sky-600 uppercase tracking-wider mb-4">Department of Defense</p>
                    <p className="text-gray-700 mb-4">
                        Our most ambitious theoretical engineering project. The Supercarrier is envisioned as a massive, self-sustaining vessel capable of projecting Valorian presence across any digital or physical ocean.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                        <li><strong>Status:</strong> Theoretical Design Phase</li>
                        <li><strong>Lead Architect:</strong> Lord Aegis</li>
                        <li><strong>Key Features:</strong> Integrated AI defense, modular flight deck, sustainable energy core.</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/3 bg-sky-50 p-6 rounded-xl border border-sky-100 flex items-center justify-center min-h-[200px]">
                    <span className="text-sky-800 font-bold uppercase tracking-widest text-center opacity-50">Classified<br/>Blueprints</span>
                </div>
            </div>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3 bg-emerald-50 p-6 rounded-xl border border-emerald-100 flex items-center justify-center min-h-[200px] order-2 md:order-1">
                    <span className="text-emerald-800 font-bold uppercase tracking-widest text-center opacity-50">Environmental<br/>Data</span>
                </div>
                <div className="flex-1 order-1 md:order-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">The Green Nation Initiative</h3>
                    <p className="text-sm font-bold text-emerald-600 uppercase tracking-wider mb-4">Dept. of National Advancement</p>
                    <p className="text-gray-700 mb-4">
                        Valoria is committed to being a leader in environmental stewardship. The Green Nation Initiative focuses on sustainable practices within our borders and promoting ecological awareness among our citizens.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                        <li><strong>Status:</strong> Active Implementation</li>
                        <li><strong>Lead Department:</strong> National Advancement</li>
                        <li><strong>Goals:</strong> Zero-waste digital infrastructure, promoting green tech.</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">The Celestial Nexus</h3>
                    <p className="text-sm font-bold text-indigo-600 uppercase tracking-wider mb-4">Valorian Space & Robotics Agency</p>
                    <p className="text-gray-700 mb-4">
                        The central hub for all Valorian technological advancement. The Nexus is where we develop our AI systems, manage our digital infrastructure, and plan our future robotics programs.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                        <li><strong>Status:</strong> Online & Expanding</li>
                        <li><strong>Lead Agency:</strong> Space & Robotics Agency</li>
                        <li><strong>Access:</strong> Restricted to Nexus Engineers and High Command.</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/3 bg-indigo-50 p-6 rounded-xl border border-indigo-100 flex items-center justify-center min-h-[200px]">
                    <span className="text-indigo-800 font-bold uppercase tracking-widest text-center opacity-50">Nexus<br/>Terminal</span>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
};
