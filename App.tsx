import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MilitaryPage } from './components/MilitaryPage';
import { HistoryPage } from './components/HistoryPage';
import { CulturePage } from './components/CulturePage';
import { GovernmentPage } from './components/GovernmentPage';
import { NewsPage } from './components/NewsPage';
import { ProjectsPage } from './components/ProjectsPage';
import { CitizenshipPage } from './components/CitizenshipPage';
import { ProfilePage } from './components/ProfilePage';
import { HighCommandPage } from './components/HighCommandPage';
import { useAuth } from './hooks/useAuth';

// --- Icon Imports ---
import { GovernmentIcon } from './components/icons/GovernmentIcon';
import { ScrollIcon } from './components/icons/ScrollIcon';
import { ArmedForcesIcon } from './components/icons/ArmedForcesIcon';
import { CultureIcon } from './components/icons/CultureIcon';
import { RocketIcon } from './components/icons/RocketIcon';
import { CitizensIcon } from './components/icons/CitizensIcon';
import { EnvelopeIcon } from './components/icons/EnvelopeIcon';
import { NewspaperIcon } from './components/icons/NewspaperIcon';


// --- Page Components ---

const HomePage: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
    const [showAnthem, setShowAnthem] = useState(false);
    const [showSong, setShowSong] = useState(false);
    const { profile, login } = useAuth();

    return (
        <div className="bg-gray-100">
            <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12">
                <h2 className="text-3xl font-bold text-gray-800 font-serif text-center animate-fade-in-up">
                    Welcome to the Kingdom of Valoria
                </h2>

                {/* Citizen Dashboard Quick Access */}
                {profile && (
                    <section className="bg-white p-8 rounded-3xl shadow-lg border-l-8 border-emerald-500 animate-fade-in-up">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h3 className="text-2xl font-black text-slate-900">Citizen Dashboard</h3>
                                <p className="text-slate-500">Welcome back, <span className="font-bold text-emerald-600">{profile.displayName}</span>. Manage your documents and applications.</p>
                            </div>
                            <div className="flex gap-3">
                                <button 
                                    onClick={() => onNavigate('profile')}
                                    className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all"
                                >
                                    My Profile
                                </button>
                                {(profile.role === 'admin' || profile.role === 'lord' || profile.role === 'general') && (
                                    <button 
                                        onClick={() => onNavigate('high-command')}
                                        className="px-6 py-3 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition-all"
                                    >
                                        High Command
                                    </button>
                                )}
                            </div>
                        </div>
                    </section>
                )}

                {/* About Section */}
                <section id="about" className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-red-500 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                    <div className="flex items-center text-2xl font-bold text-gray-800 mb-4 font-serif">
                        <span className="text-yellow-500 mr-3 text-3xl">☀️</span>
                        <h3>About Our Kingdom</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed font-serif text-lg">
                        Founded in 2025 by the visionary 14-year-old King Callistus I and his loyal friends, the Kingdom of Valoria stands as a beacon of creativity, friendship, and adventure. What started as a fun project among friends has grown into a thriving micronation with rich traditions, innovative projects, and a bright future ahead.
                    </p>
                </section>

                {/* Stats Section */}
                <section id="stats" className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                    <StatCard value="2025" label="Founded" />
                    <StatCard value="31" label="Citizens" />
                    <StatCard value="12" label="Departments" />
                    <StatCard value="3" label="Active Projects" />
                </section>
                
                {/* National Music Section */}
                <section id="anthem" className="p-6 rounded-2xl shadow-lg text-white bg-gradient-to-br from-indigo-500 to-purple-600 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="text-center">
                             <h3 className="text-xl font-bold mb-2">
                                <span role="img" aria-label="music notes">🎵</span> National Anthem
                             </h3>
                             <p className="text-lg font-bold text-indigo-100 mb-1">"A sual a tha thliar lovin"</p>
                             <p className="text-indigo-200 italic mb-4 text-sm">Composed by King Callistus & Lord Kaldor</p>
                             <button 
                                onClick={() => setShowAnthem(!showAnthem)}
                                className="bg-white/20 hover:bg-white/30 text-white font-bold py-2 px-4 rounded-full transition-colors duration-100 backdrop-blur-sm border border-white/30"
                             >
                                <span role="img" aria-label="eyes" className="mr-2">👀</span> {showAnthem ? "Hide Lyrics" : "View Lyrics"}
                             </button>
                             {showAnthem && (
                                 <div className="mt-4 bg-indigo-900/40 p-4 rounded-xl border border-indigo-400/30 text-center font-serif text-base leading-loose">
                                    <p>A sual a tha thliar lovin,</p>
                                    <p>Kan lo ding chhuak;</p>
                                    <p>Kan lo chhuang puak,</p>
                                    <p>Kan lo phit puak.</p>
                                    <br/>
                                    <p>Kan lo kang puak,</p>
                                    <p>Kan lo deng puak;</p>
                                    <p>Kan lo chhum puak,</p>
                                    <p>Kan lo rap puak.</p>
                                 </div>
                             )}
                        </div>
                        <div className="text-center">
                             <h3 className="text-xl font-bold mb-2">
                                <span role="img" aria-label="music notes">🎵</span> National Song
                             </h3>
                             <p className="text-lg font-bold text-indigo-100 mb-1">"Gospel tlanchhia I hmuh duh chuan"</p>
                             <p className="text-indigo-200 italic mb-4 text-sm">Composed by Lord Kaldor</p>
                             <button 
                                onClick={() => setShowSong(!showSong)}
                                className="bg-white/20 hover:bg-white/30 text-white font-bold py-2 px-4 rounded-full transition-colors duration-100 backdrop-blur-sm border border-white/30"
                             >
                                <span role="img" aria-label="eyes" className="mr-2">👀</span> {showSong ? "Hide Lyrics" : "View Lyrics"}
                             </button>
                             {showSong && (
                                 <div className="mt-4 bg-indigo-900/40 p-4 rounded-xl border border-indigo-400/30 text-center font-serif text-base leading-loose italic">
                                    <p>(Lyrics to be recorded in the Book of Valor)</p>
                                 </div>
                             )}
                        </div>
                    </div>
                </section>

                {/* Explore Section */}
                <section id="explore" className="animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                    <h2 className="text-3xl font-bold text-gray-800 font-serif text-center mb-8">
                        Explore Our Kingdom
                    </h2>
                    <div className="space-y-6">
                        <ExploreCard 
                            icon={<NewspaperIcon className="h-10 w-10 text-blue-600" />}
                            title="Royal News"
                            description="Official decrees and updates from the Kingdom's leadership."
                            buttonText="Read News"
                            iconBgColor="bg-blue-50"
                            onClick={() => onNavigate('news')}
                        />
                        <ExploreCard 
                            icon={<ScrollIcon className="h-10 w-10 text-yellow-800" />}
                            title="Royal History"
                            description="Discover the epic tale of how our kingdom began with a simple walk behind a school and grew into a thriving micronation with grand dreams of castles and space exploration."
                            buttonText="Learn Our Story"
                            iconBgColor="bg-yellow-100"
                            onClick={() => onNavigate('history')}
                        />
                         <ExploreCard 
                            icon={<GovernmentIcon className="h-10 w-10 text-indigo-800" />}
                            title="Royal Government"
                            description="Meet our Royal leadership from King Callistus I to the High Command, and explore our amazing departments and state agencies!"
                            buttonText="Meet the Leaders"
                            iconBgColor="bg-indigo-100"
                            onClick={() => onNavigate('government')}
                        />
                        <ExploreCard
                            icon={<ArmedForcesIcon className="h-10 w-10 text-red-800" />}
                            title="Royal Armed Forces"
                            description="Join the legendary Royal Guard! From epic Nerf battles to strategic pillow fort defenses, our military combines honor, strategy, and having an absolutely awesome time."
                            buttonText="Join the Guard"
                            iconBgColor="bg-red-100"
                            onClick={() => onNavigate('military')}
                        />
                        <ExploreCard
                            icon={<CultureIcon className="h-10 w-10 text-orange-800" />}
                            title="Kingdom Culture"
                            description="Experience our Royal Church of Awesome, epic festivals, and rich traditions. Plus, discover the full lyrics and epic Mizo rap national anthem!"
                            buttonText="Explore Culture"
                            iconBgColor="bg-orange-100"
                            onClick={() => onNavigate('culture')}
                        />
                        <ExploreCard
                            icon={<RocketIcon className="h-10 w-10 text-sky-800" />}
                            title="Royal Projects"
                            description="From the State Agencies to our dream Royal Castle, discover the incredible projects that are shaping our kingdom's future!"
                            buttonText="See Projects"
                            iconBgColor="bg-sky-100"
                            onClick={() => onNavigate('projects')}
                        />
                        <ExploreCard
                            icon={<CitizensIcon className="h-10 w-10 text-blue-800" />}
                            title="Royal Citizens"
                            description="Learn how to become a citizen of our amazing kingdom! Join our international community of dreamers, creators, and adventurers from 12 different countries."
                            buttonText="Become a Citizen"
                            iconBgColor="bg-blue-100"
                            onClick={() => onNavigate('citizenship')}
                        />
                    </div>
                </section>

                {/* Connect Section */}
                <section id="connect" className="p-8 rounded-2xl shadow-lg text-white bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 animate-fade-in-up" style={{animationDelay: '1s'}}>
                     <h3 className="text-2xl font-bold text-center mb-2 font-serif">
                        <EnvelopeIcon className="h-6 w-6 inline-block mr-2" />
                        Ready to Connect?
                     </h3>
                     <p className="text-center text-slate-300 italic mb-6">
                        Have questions? Want to join our kingdom? Ready for an adventure?
                     </p>
                     <div className="text-center">
                        <button className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-full transition-colors duration-100 backdrop-blur-sm border border-white/30">
                           <span role="img" aria-label="email" className="mr-2">📧</span> Contact the Royal Court
                        </button>
                     </div>
                </section>
            </main>
        </div>
    );
}

// --- Sub-components ---

const StatCard: React.FC<{value: string, label: string}> = ({ value, label }) => (
    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-4 rounded-xl shadow-md transform hover:scale-105 transition-transform">
        <p className="text-3xl font-black">{value}</p>
        <p className="text-sm uppercase tracking-wider">{label}</p>
    </div>
);

interface ExploreCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    buttonText: string;
    iconBgColor: string;
    onClick?: () => void;
}

const ExploreCard: React.FC<ExploreCardProps> = ({icon, title, description, buttonText, iconBgColor, onClick}) => (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-100 ease-in-out overflow-hidden border border-gray-200 text-center">
        <div className="p-8">
            <div className={`mx-auto h-20 w-20 rounded-2xl flex items-center justify-center ${iconBgColor} mb-6`}>
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-800 font-serif mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed mb-6 font-serif px-4">{description}</p>
            <button onClick={onClick} className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-100 group shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                {buttonText} <span className="inline-block transform group-hover:translate-x-1 transition-transform">&rarr;</span>
            </button>
        </div>
    </div>
);


// --- Main App Component ---

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  return (
    <div className="font-sans">
      {currentPage === 'home' && <Header onNavigate={navigateTo} />}
        {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
        {currentPage === 'military' && <MilitaryPage onNavigate={navigateTo} />}
        {currentPage === 'history' && <HistoryPage onNavigate={navigateTo} />}
        {currentPage === 'culture' && <CulturePage onNavigate={navigateTo} />}
        {currentPage === 'government' && <GovernmentPage onNavigate={navigateTo} />}
        {currentPage === 'news' && <NewsPage onNavigate={navigateTo} />}
        {currentPage === 'projects' && <ProjectsPage onNavigate={navigateTo} />}
        {currentPage === 'citizenship' && <CitizenshipPage onNavigate={navigateTo} />}
        {currentPage === 'profile' && <ProfilePage onNavigate={navigateTo} />}
        {currentPage === 'high-command' && <HighCommandPage onNavigate={navigateTo} />}
      <Footer />
    </div>
  );
};

export default App;