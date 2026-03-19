import React from 'react';

// --- Icon Imports ---
import { CultureIcon } from './icons/CultureIcon';
import { ChurchIcon } from './icons/ChurchIcon';
import { ShieldIcon } from './icons/ShieldIcon';
import { CrownIcon } from './icons/CrownIcon';
import { CrossIcon } from './icons/CrossIcon';
import { TornadoIcon } from './icons/TornadoIcon';
import { ColumnsIcon } from './icons/ColumnsIcon';
import { WaveIcon } from './icons/WaveIcon';
import { CrystalBallIcon } from './icons/CrystalBallIcon';
import { CalendarIcon } from './icons/CalendarIcon';
import { FlagIcon } from './icons/FlagIcon';
import { TrophyIcon } from './icons/TrophyIcon';
import { MusicNoteIcon } from './icons/MusicNoteIcon';
import { PaletteIcon } from './icons/PaletteIcon';
import { ScrollIcon } from './icons/ScrollIcon';

interface CulturePageProps {
  onNavigate: (page: string) => void;
}

// --- Data Arrays ---
const tribesData = [
    { name: 'Tribe of Callistus', description: "Leaders and visionaries who share the King's spirit of adventure and innovation.", icon: <CrownIcon className="h-10 w-10" />, color: 'from-orange-500 to-amber-500' },
    { name: 'Tribe of Kaldor', description: 'Warriors and strategists who embody courage and tactical brilliance.', icon: <CrossIcon className="h-10 w-10" />, color: 'from-green-500 to-emerald-500' },
    { name: 'Tribe of Zephyrus', description: 'Free spirits and aerial masters who soar above challenges with grace.', icon: <TornadoIcon className="h-10 w-10" />, color: 'from-teal-400 to-cyan-500' },
    { name: 'Tribe of Aldric', description: 'Wise governors and diplomats who excel in leadership and negotiation.', icon: <ColumnsIcon className="h-10 w-10" />, color: 'from-pink-500 to-rose-500' },
    { name: 'Tribe of Aegis', description: 'Protectors and naval commanders who guard our waters and shores.', icon: <WaveIcon className="h-10 w-10" />, color: 'from-purple-500 to-indigo-500' },
    { name: 'Tribe of the Ancients', description: 'Keepers of wisdom and tradition, honoring the Lusei and Pawih heritage.', icon: <CrystalBallIcon className="h-10 w-10" />, color: 'from-sky-400 to-blue-500' },
];

const royalHolidays = [
    { name: "Founding Day", description: "Greguary 7 (Feb 7). The birth of our glorious kingdom" },
    { name: "Potboil Day", description: "Celebrating the conquest of Caelumbra" },
    { name: "Saint Kaldor Day", description: "Birthday of Field Marshal Kaldor" },
    { name: "Saint Callistus Day", description: "Birthday of King Callistus" },
    { name: "Father Zephyrus Day", description: "Birthday of Father Zephyrus" },
    { name: "Military Day", description: "Honor for the Army" },
    { name: "Veteran Day", description: "Honor for retired soldiers" },
    { name: "Space Day, Sea Day, Environment Day", description: "Celebrations of creation" },
    { name: "Church Day", description: "Celebrated on the founding of the Church" },
    { name: "Missionary Day", description: "The day when the last missionary, Callistus finally reached the mission field to find Valoria and his apostles" },
];

const festivalCelebrations = [
    { name: "The Great Snacks Festival", description: "Day of joy and feasting" },
    { name: "Friendship Festival", description: "Celebrating bonds between citizens" },
    { name: "Innovation Fair", description: "Showcasing citizen inventions" },
    { name: "Harvest of Fun", description: "Autumn celebration with costumes" },
    { name: "Winter Wonderland", description: "Holiday season festivities" },
];

const royalTraditions = [
    { name: "The Crown Ceremony", description: "Annual recognition of outstanding citizens" },
    { name: "Quest Challenges", description: "Monthly adventure missions" },
    { name: "Royal Game Night", description: "Weekly gathering for board games and fun" },
    { name: "Wisdom Wednesdays", description: "Sharing knowledge and learning together" },
    { name: "Thankful Thursdays", description: "Expressing gratitude and kindness" },
];


// --- Sub-Components ---

const SectionTitle: React.FC<{ icon: React.ReactNode, title: string }> = ({ icon, title }) => (
    <div className="flex items-center justify-center text-center border-b-2 border-gray-300 pb-4 mb-8">
        <div className="text-gray-600 mr-3">{icon}</div>
        <h2 className="text-3xl font-bold text-gray-800 font-serif">{title}</h2>
    </div>
);

const TribeCard: React.FC<typeof tribesData[0]> = ({ name, description, icon, color }) => (
    <div className={`bg-gradient-to-br ${color} text-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center`}>
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold font-serif mb-2">{name}</h3>
        <p className="text-sm leading-relaxed">{description}</p>
    </div>
);

const ListCard: React.FC<{title: string, items: {name: string, description: string}[], icon: React.ReactNode, color: string}> = ({title, items, icon, color}) => (
    <div className={`${color} text-white p-6 rounded-2xl shadow-lg`}>
        <h3 className="text-xl font-bold font-serif mb-4 flex items-center space-x-2">
            {icon}
            <span>{title}</span>
        </h3>
        <ul className="space-y-2">
            {items.map(item => (
                <li key={item.name}>
                    <strong className="font-bold">{item.name}</strong> - <span className="opacity-90">{item.description}</span>
                </li>
            ))}
        </ul>
    </div>
);

const InfoCard: React.FC<{title: string, icon: React.ReactNode, children: React.ReactNode}> = ({ title, icon, children }) => (
    <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-red-500">
        <h3 className="text-2xl font-bold font-serif mb-4 flex items-center">
            {icon}
            <span>{title}</span>
        </h3>
        <div className="text-gray-600 leading-relaxed space-y-4 font-serif">
            {children}
        </div>
    </div>
);

const QuoteBlock: React.FC<{author: string, quotes: {text: string, favorite: boolean}[]}> = ({author, quotes}) => (
    <div className="mb-4">
        <h4 className="font-bold text-lg text-indigo-300 mb-2">{author}</h4>
        <ul className="space-y-2 pl-4 border-l-2 border-indigo-500/30">
            {quotes.map((q, i) => (
                <li key={i} className="italic text-slate-300">
                    "{q.text}"
                </li>
            ))}
        </ul>
    </div>
);

// --- Main Culture Page Component ---

export const CulturePage: React.FC<CulturePageProps> = ({ onNavigate }) => {
  const [showAnthem, setShowAnthem] = React.useState(false);
  const [showSong, setShowSong] = React.useState(false);

  return (
    <div className="bg-gray-100 animate-fade-in-up">
      <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-left mb-4">
            <button onClick={() => onNavigate('home')} className="text-blue-600 hover:text-blue-800 font-bold transition-colors">
                &larr; Back to Kingdom Home
            </button>
        </div>
        <SectionTitle icon={<CultureIcon className="h-8 w-8" />} title="Kingdom Culture" />

        {/* Faith and the Church */}
        <InfoCard title="Faith and the Church" icon={<ChurchIcon className="h-7 w-7 mr-3 text-red-600"/>}>
            <p><strong className="font-bold">Father Zephyrus</strong> – First Priest, Father of the Nation.</p>
            <p>The Church spreads faith, truth, and gospel throughout the Kingdom of Valoria.</p>
            <p><strong className="font-bold">Knights of the Church</strong> – protect priests and sacred leaders.</p>
            <p><strong className="font-bold">Church Day</strong> – celebrated on the founding of the Church.</p>
            <p><strong className="font-bold">Missionary Day</strong> – the day when the last missionary, Callistus finally reached the mission field to find Valoria and his apostles.</p>
        </InfoCard>

        {/* The Six Lord-Tribes */}
        <section>
            <SectionTitle icon={<ShieldIcon className="h-8 w-8" />} title="The Six Lord-Tribes" />
            <div className="space-y-6">
                <div className="bg-purple-600 text-white p-6 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold font-serif mb-2 flex items-center space-x-2">
                        <CrownIcon className="h-6 w-6" />
                        <span>Ancient Tribal Heritage</span>
                    </h3>
                    <p>Originally founded on the noble Lusei and Pawih clans, our kingdom has evolved into six mighty Lord-Tribes. Citizens join based on their similarities, hobbies, and ways of thinking - not rigid duties, but bonds of kinship and shared purpose.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tribesData.map(tribe => <TribeCard key={tribe.name} {...tribe} />)}
                </div>
            </div>
        </section>

        {/* Sacred Calendar */}
        <section>
            <div className="flex items-center justify-center text-center mb-6">
                <CalendarIcon className="h-8 w-8 text-gray-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800 font-serif">Sacred Calendar</h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
                 <ListCard title="Major Royal Holidays" items={royalHolidays} icon={<FlagIcon />} color="bg-red-600" />
                 <ListCard title="Festival Celebrations" items={festivalCelebrations} icon={<span role="img" aria-label="pizza" className="text-2xl">🍕</span>} color="bg-green-600" />
            </div>
        </section>
        
        {/* Royal Traditions */}
         <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold font-serif mb-4 flex items-center">
                <TrophyIcon className="h-7 w-7 mr-3 text-yellow-500"/>
                <span>Royal Traditions</span>
            </h3>
            <div className="text-gray-600 leading-relaxed font-serif">
                 <ul className="space-y-3">
                    {royalTraditions.map(tradition => (
                         <li key={tradition.name}>
                            <strong className="font-bold text-gray-800">{tradition.name}</strong> - <span className="text-gray-700">{tradition.description}</span>
                        </li>
                    ))}
                </ul>
            </div>
         </div>

        {/* Royal Music */}
        <InfoCard title="Royal Music" icon={<MusicNoteIcon className="h-7 w-7 mr-3 text-indigo-600"/>}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 text-center">
                    <h4 className="font-bold text-gray-800 mb-2">National Anthem</h4>
                    <p className="font-bold text-xl text-indigo-900 mb-1">"A sual a tha thliar lovin"</p>
                    <p className="italic text-gray-500 mb-4 text-sm">Composed by King Callistus & Lord Kaldor</p>
                    <button 
                        onClick={() => setShowAnthem(!showAnthem)}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-100"
                    >
                        {showAnthem ? "Hide Lyrics" : "View Lyrics"}
                    </button>
                    {showAnthem && (
                        <div className="mt-4 pt-4 border-t border-indigo-200 text-indigo-950 font-serif leading-loose">
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
                <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 text-center">
                    <h4 className="font-bold text-gray-800 mb-2">National Song</h4>
                    <p className="font-bold text-xl text-indigo-900 mb-1">"Gospel tlanchhia I hmuh duh chuan"</p>
                    <p className="italic text-gray-500 mb-4 text-sm">Composed by Lord Kaldor</p>
                    <button 
                        onClick={() => setShowSong(!showSong)}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-100"
                    >
                        {showSong ? "Hide Lyrics" : "View Lyrics"}
                    </button>
                    {showSong && (
                        <div className="mt-4 pt-4 border-t border-indigo-200 text-indigo-950 font-serif leading-loose italic">
                            <p>(Lyrics to be recorded in the Book of Valor)</p>
                        </div>
                    )}
                </div>
            </div>
        </InfoCard>
        
        {/* Royal Arts & Literature */}
        <InfoCard title="Royal Arts & Literature" icon={<PaletteIcon className="h-7 w-7 mr-3 text-orange-600"/>}>
             <p>Our kingdom has produced numerous masterpieces including the epic poem "The Callistus Chronicles," the award-winning short story collection "Tales from the Treehouse," and the internationally acclaimed comic series "Adventures of the Royal Guard."</p>
             <p>The Royal Art Gallery features works from citizen artists, including the famous "Portrait of Pizza" by Sir Arturo and the magnificent "Sunset Over the Kingdom" mural that decorates our main meeting hall.</p>
        </InfoCard>

        {/* The Eternal Enemies */}
        <InfoCard title="The Eternal Enemies" icon={<ShieldIcon className="h-7 w-7 mr-3 text-gray-800"/>}>
            <p>Every great kingdom faces adversaries. For Valoria, our greatest foes are the middle school teachers who stand against our fun and freedom:</p>
            <ul className="list-disc list-inside space-y-1 font-bold text-red-700 mt-2">
                <li>Valthaa</li>
                <li>Chhana</li>
                <li>Rinawmi (Class 8 Hindi Teacher)</li>
                <li>Pi Marova (Class 7 Mizo Teacher)</li>
                <li>TPa (Math Teacher)</li>
            </ul>
        </InfoCard>

        {/* Famous Quotes & Sayings */}
        <section className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold font-serif mb-6 flex items-center border-b border-slate-700 pb-4">
                <ScrollIcon className="h-7 w-7 mr-3 text-yellow-400"/>
                Famous Quotes & Sayings
            </h3>
            <div className="space-y-6">
                <QuoteBlock author="Father Zephyrus" quotes={[
                    { text: "Dep khat lo chuan ka phal lo", favorite: true },
                    { text: "Lusei hnap ngah ho!", favorite: true },
                    { text: "Lawng pi kha ka va ngai em", favorite: true },
                    { text: "Len lai a rual lo hi a pawi em mai", favorite: true },
                    { text: "Lawng pi a ni ve ziah lo", favorite: false },
                    { text: "Mesak zawnga!", favorite: true },
                    { text: "He committee hi mipui sang tam tak zingah ka hawng e", favorite: true },
                    { text: "Kan lungtat a par hma loh chuan", favorite: true },
                    { text: "A par dawn lo tihna nih chu", favorite: false },
                ]} />
                <QuoteBlock author="Lord Kaldor" quotes={[
                    { text: "Yo King Callistus!", favorite: false },
                    { text: "Pawih mawng hang ho!", favorite: false },
                    { text: "Asaam Aleikum", favorite: false },
                    { text: "Min cho em?", favorite: false },
                ]} />
                <QuoteBlock author="Lord Aldric" quotes={[
                    { text: "Position!", favorite: false },
                    { text: "Dal I la", favorite: false },
                ]} />
                <QuoteBlock author="King Callistus" quotes={[
                    { text: "Lungte leh hmawlhte ah rinna kan nghat", favorite: false },
                    { text: "Lungtat a par thei a mi?", favorite: false },
                ]} />
                <QuoteBlock author="Admiral Ruatdika" quotes={[
                    { text: "Min hmusit a nih kha", favorite: true },
                ]} />
                <QuoteBlock author="Corporal Bena & Lieutenant Fela" quotes={[
                    { text: "Tuai ka nia (Bena)", favorite: false },
                    { text: "Tuai min ti (Fela)", favorite: false },
                ]} />
                
                <h4 className="text-xl font-bold text-red-400 mt-8 mb-4 border-b border-slate-700 pb-2">Quotes from the Eternal Enemies</h4>
                <QuoteBlock author="Pi Marova" quotes={[
                    { text: "Ka kutzungpui te hi a lian a nia", favorite: false },
                    { text: "Ka pen te hi a na a nia", favorite: false },
                    { text: "Polite manner te hi hriat tur a nia", favorite: true },
                    { text: "Ten tih tur", favorite: false },
                    { text: "Kan hmelmate hi rin loh lam daih an ni chawk a nia", favorite: false },
                    { text: "Ka fapa hian zungbun pali panga a neih kha han la rawh u", favorite: false },
                ]} />
                <QuoteBlock author="Rinawmi" quotes={[
                    { text: "Enga tinge mawni chu le?", favorite: false },
                    { text: "In hria em? In hria em", favorite: false },
                    { text: "A mak ka ti", favorite: false },
                    { text: "Vawi tam ka sawi tawh", favorite: false },
                    { text: "Sap ho tumruh zia in hria em?", favorite: false },
                    { text: "Ka tum te hi a ruh a nia", favorite: false },
                    { text: "Ka tum hi in tum aiin a ruh a nia", favorite: true },
                ]} />
                <QuoteBlock author="TPa" quotes={[
                    { text: "A hmingin tual upa te chu kan ni ve a", favorite: true },
                ]} />
            </div>
            <p className="mt-6 text-sm text-slate-400 italic text-center">
                These quotes represent the spirit of Valoria.
            </p>
        </section>
      </main>
    </div>
  );
};
