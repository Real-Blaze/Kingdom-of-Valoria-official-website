import React from 'react';
import { GovernmentIcon } from './icons/GovernmentIcon';
import { CrownIcon } from './icons/CrownIcon';
import { ShieldIcon } from './icons/ShieldIcon';
import { UsersIcon } from './icons/UsersIcon';
import { ScrollIcon } from './icons/ScrollIcon';

interface GovernmentPageProps {
  onNavigate: (page: string) => void;
}

export const GovernmentPage: React.FC<GovernmentPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-gray-100 animate-fade-in-up">
      <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-left mb-4">
            <button onClick={() => onNavigate('home')} className="text-blue-600 hover:text-blue-800 font-bold transition-colors">
                &larr; Back to Kingdom Home
            </button>
        </div>
        <div className="flex items-center justify-center text-center border-b-2 border-gray-300 pb-4 mb-8">
            <GovernmentIcon className="h-10 w-10 text-indigo-800 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800 font-serif">Royal Government</h2>
        </div>

        <section className="bg-gradient-to-br from-indigo-900 to-purple-900 p-8 rounded-2xl text-white shadow-2xl border border-indigo-700/50">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 flex items-center">
              <span className="text-3xl mr-3">🌐</span> Unified Valorian Account
            </h3>
            <p className="text-indigo-100 text-lg leading-relaxed mb-8 font-serif">
              To ensure seamless integration across all our national digital assets, we have implemented a Single Sign-On (SSO) system. Your Valorian account grants you access to:
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                <h4 className="font-bold text-emerald-400 mb-1">Kingdom Hub</h4>
                <p className="text-[10px] text-indigo-200 uppercase font-bold tracking-widest">Citizenship & Visas</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                <h4 className="font-bold text-blue-400 mb-1">Aetheron University</h4>
                <p className="text-[10px] text-indigo-200 uppercase font-bold tracking-widest">Academic Records</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                <h4 className="font-bold text-purple-400 mb-1">State Agencies</h4>
                <p className="text-[10px] text-indigo-200 uppercase font-bold tracking-widest">Aerospace & AI Data</p>
              </div>
            </div>
            <p className="mt-6 text-[10px] text-indigo-300 italic uppercase tracking-widest font-bold">
              * Access to sensitive data in the State Agencies requires specific permissions.
            </p>
          </div>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-indigo-600">
            <h3 className="text-2xl font-bold font-serif mb-6 text-center text-indigo-900 border-b pb-4">
                🏛️ Royal Departments
            </h3>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 text-yellow-800 italic text-center">
                "The Prime Minister will control the departments until a minister is appointed."
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <DepartmentCard name="Department of National Advancement" icon="🌳" description="Oversees the 'Green Nation' initiative, scientific progress, technology, health, and infrastructure." />
                <DepartmentCard name="Department of Defense" icon="🛡️" description="Protects the realm and develops the King Callistus Supercarrier." />
                <DepartmentCard name="Department of Treasury" icon="💰" description="Manages the kingdom's finances and resources." />
                <DepartmentCard name="Department of Education" icon="📚" description="Nurturing the minds of future Valorians." />
                <DepartmentCard name="Department of Foreign Affairs" icon="🤝" description="Building bridges with other micronations and the world." />
                <DepartmentCard name="Department of Justice" icon="⚖️" description="Upholding the Book of Valor and ensuring fairness." />
                <DepartmentCard name="Department of Culture & Arts" icon="🎨" description="Preserving our traditions, fostering creativity, and ensuring joy for everyone." />
            </div>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-purple-600">
            <h3 className="text-2xl font-bold font-serif mb-6 text-center text-purple-900 border-b pb-4">
                🏢 State Agencies
            </h3>
            <p className="text-center text-gray-600 mb-8 italic">All headquartered in Aetheron City</p>
            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 text-center shadow-sm">
                    <div className="text-4xl mb-3">🚀</div>
                    <h4 className="font-bold text-purple-900 mb-2">Valorian Space and Robotics Agency</h4>
                    <p className="text-sm text-gray-700">Leading AI integration and robotics development.</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 text-center shadow-sm">
                    <div className="text-4xl mb-3">🌌</div>
                    <h4 className="font-bold text-purple-900 mb-2">Celestial Nexus</h4>
                    <p className="text-sm text-gray-700">The kingdom's premier AI and aerospace research division.</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 text-center shadow-sm">
                    <div className="text-4xl mb-3">👁️</div>
                    <h4 className="font-bold text-purple-900 mb-2">Valorian Intelligence Agency</h4>
                    <p className="text-sm text-gray-700">Gathering information and ensuring the security of the realm.</p>
                </div>
            </div>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-indigo-600">
            <h3 className="text-2xl font-bold font-serif mb-6 text-center text-indigo-900 border-b pb-4">
                📜 The Constitution of Valoria (Draft)
            </h3>

            <div className="space-y-8 font-serif text-gray-700">
                {/* I. The Crown */}
                <div>
                    <h4 className="text-xl font-bold text-indigo-800 flex items-center mb-2">
                        <CrownIcon className="h-6 w-6 mr-2" /> I. The Crown
                    </h4>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        <li><strong className="text-gray-900">King Callistus</strong> – Supreme Ruler, Balancer of Power, Keeper of the Throne.</li>
                        <li>Holds final authority over laws, wars, and alliances.</li>
                        <li>Cannot act against the will of the Valotrinity.</li>
                    </ul>
                </div>

                {/* II. The Valotrinity */}
                <div>
                    <h4 className="text-xl font-bold text-indigo-800 flex items-center mb-2">
                        <span className="text-2xl mr-2">✨</span> II. The Valotrinity
                    </h4>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        <li><strong className="text-gray-900">Father Zephyrus</strong> – Lord of Air & Blessings, Priest and Father of the Nation.</li>
                        <li><strong className="text-gray-900">King Callistus</strong> – The Son, Neutral and Calm Ruler.</li>
                        <li><strong className="text-gray-900">Field Marshal Kaldor</strong> – The Holy Spirit, Lord of Land & Protector of the Nation.</li>
                        <li className="italic mt-2">The three together hold the Sacred Veto – no law, war, or decree can stand if one rejects it.</li>
                    </ul>
                </div>

                {/* III. The Lords of Valoria */}
                <div>
                    <h4 className="text-xl font-bold text-indigo-800 flex items-center mb-2">
                        <ShieldIcon className="h-6 w-6 mr-2" /> III. The Lords of Valoria
                    </h4>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        <li><strong className="text-gray-900">Lord Aegis</strong> – Lord of Sea & Naval Command.</li>
                        <li><strong className="text-gray-900">Lord Aldric</strong> – Prime Minister and Political Lord.</li>
                        <li><strong className="text-gray-900">Lord Elion</strong> – Lord of Caelumbra, builder of the second city.</li>
                        <li className="mt-2">Each Lord commands a Tribe (named after their person).</li>
                        <li>Lords may rise or fall, but the title is sacred once given.</li>
                    </ul>
                </div>

                {/* IV. The Council of Valoria */}
                <div>
                    <h4 className="text-xl font-bold text-indigo-800 flex items-center mb-2">
                        <UsersIcon className="h-6 w-6 mr-2" /> IV. The Council of Valoria
                    </h4>
                    <p className="mb-2 italic">Advisory body to guide the King and Lords:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        <li><strong className="text-gray-900">Royal Advisor Athos</strong> – wisdom and counsel.</li>
                        <li><strong className="text-gray-900">Defence Minister Peri</strong> – oversees defense strategy.</li>
                        <li><strong className="text-gray-900">Admiral Ruatdika</strong> – naval authority under Aegis.</li>
                        <li>Others may be appointed by the King or Lords.</li>
                    </ul>
                </div>

                {/* IX. Justice */}
                <div>
                    <h4 className="text-xl font-bold text-indigo-800 flex items-center mb-2">
                        <ScrollIcon className="h-6 w-6 mr-2" /> IX. Justice
                    </h4>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Any Lord or soldier who betrays Valoria may be stripped of rank by unanimous decision of the Valotrinity.</li>
                        <li>The Book of Valor holds both history and laws — it is scripture and constitution.</li>
                    </ul>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
};

const DepartmentCard: React.FC<{name: string, icon: string, description: string}> = ({ name, icon, description }) => (
    <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 hover:bg-indigo-50 transition-colors">
        <div className="flex items-center mb-2">
            <span className="text-2xl mr-3">{icon}</span>
            <h4 className="font-bold text-indigo-900">{name}</h4>
        </div>
        <p className="text-sm text-gray-600 ml-9">{description}</p>
    </div>
);
