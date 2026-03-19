import React from 'react';
import { ScrollIcon } from './icons/ScrollIcon';
import { PaperIcon } from './icons/PaperIcon';
import { CrownIcon } from './icons/CrownIcon';
import { CrossIcon } from './icons/CrossIcon';
import { BookIcon } from './icons/BookIcon';

// Lord & Force Icons
import { TornadoIcon } from './icons/TornadoIcon';
import { WaveIcon } from './icons/WaveIcon';
import { GovernmentIcon } from './icons/GovernmentIcon';
import { CityHallIcon } from './icons/CityHallIcon';
import { DaggerIcon } from './icons/DaggerIcon';
import { PlaneIcon } from './icons/PlaneIcon';

interface HistoryPageProps {
  onNavigate: (page: string) => void;
}

// --- Data Arrays ---

const lordsData = [
    { name: 'King Callistus', title: 'King of Valoria, Keeper of Wisdom', role: 'Supreme ruler and unifier of the tribes, CEO of State Agencies, and writer of The Book of Valor.', legacy: 'Founder of the kingdom, crown of Aetheron.', icon: <CrownIcon className="h-8 w-8" />, color: 'bg-yellow-400' },
    { name: 'Father Zephyrus', title: 'Lord of Air & Blessings, Priest and Father of the Nation', role: 'First priest of Valoria, leader of the Church.', legacy: 'Guardian of the skies and spiritual guide of the people.', icon: <TornadoIcon className="h-8 w-8" />, color: 'bg-sky-400' },
    { name: 'Field Marshal Kaldor', title: 'The Holy Spirit, Lord of Land & Protector of the Nation', role: 'Commander of the Children\'s Defence Force.', legacy: 'Founder of the Kingdom of Modesty, master of armies, and Saint Kaldor.', icon: <CrossIcon className="h-8 w-8" />, color: 'bg-green-500' },
    { name: 'Lord Aegis', title: 'Lord of Sea & Naval Command', role: 'Defender of Valoria\'s waters and unseen threats.', legacy: 'Commander of naval forces, strategist of the seas.', icon: <WaveIcon className="h-8 w-8" />, color: 'bg-blue-600' },
    { name: 'Lord Aldric', title: 'Prime Minister and Political Lord', role: 'Balancer of power, voice of the common Valorian.', legacy: 'Tested by doubt, but returned steadfast to the kingdom.', icon: <GovernmentIcon className="h-8 w-8" />, color: 'bg-purple-500' },
    { name: 'Lord Elion (Hruaia)', title: 'Lord of Caelumbra, First Astrarch', role: 'Builder of the second city, ruler of the Kingdom of Modesty.', legacy: 'Brought Caelumbra into the fold through Operation Potboil.', icon: <CityHallIcon className="h-8 w-8" />, color: 'bg-red-500' }
];

const forcesData = [
    { name: 'Children\'s Defence Force (CDF)', description: 'Land army led by Lord Kaldor, the foundation of Valorian military might. Born from neighborhood protection, evolved into the backbone of our kingdom\'s defense.', icon: <CrossIcon className="h-6 w-6" />, color: 'bg-red-600' },
    { name: 'Valorian Blades', description: 'Elite special forces, famed for loyalty and skill. The ultimate warriors chosen from across the entire kingdom.', icon: <DaggerIcon className="h-6 w-6" />, color: 'bg-yellow-500' },
    { name: 'Air Corps', description: 'Commanded by Lord Zephyrus, guarding the skies with precision and honor. Masters of aerial warfare and strategic reconnaissance.', icon: <PlaneIcon className="h-6 w-6" />, color: 'bg-teal-500' },
    { name: 'Sea Command', description: 'Directed by Lord Aegis, protectors of Valoria\'s waters. Guardians against unseen threats from beyond our shores.', icon: <WaveIcon className="h-6 w-6" />, color: 'bg-blue-500' }
];

const timelineData = [
    { date: 'February 7, 2025', title: 'The Great Founding', description: 'In the grass fields behind school, King Callistus speaks the words that would birth a nation: "Let us make a nation of our own." Inspired by tales of Sealand and Molossia, the Kingdom of Valoria is born through an Instagram group, with his 6x4 foot bedroom declared as the capital city of Aetheron.' },
    { date: 'Day 2', title: 'The Forest Alliance', description: 'During a science project expedition to the nearby forest, fate expands Valoria\'s borders. Kaldor reveals his Children\'s Defence Force - a 25-member organization with laws, ranks, and training. The kingdom\'s military strength grows exponentially in the wilderness where it all began.' },
    { date: 'Day 3', title: 'The Royal Council Forms', description: 'The founding government is established with five Lords granted the highest offices: King Callistus as Supreme Ruler, Aldric as Prime Minister, Zephyrus as Air Chief Marshal, Kaldor as Field Marshal, and Aegis as Lord High Admiral. Each holds veto power over the nation\'s laws.' },
    { date: 'The Great Expansion', title: 'Growth Across Schools', description: 'When King Callistus transfers to Adventist English School and fellow rulers move to Govt. Pukpui High School, Valoria\'s council spans multiple institutions. The kingdom gains new strength through Lord Hruaia, bringing his large Instagram community into the realm.' },
    { date: 'Present Day', title: 'The Golden Age Begins', description: 'With the Church of Valoria founded, State Agencies established, and The Book of Valor written, the kingdom enters its golden age. From a simple idea in a grassy field, Valoria has become a nation of valor, vision, and unity.' },
];

// --- Sub-Components ---

const SectionTitle: React.FC<{ icon: React.ReactNode, title: string }> = ({ icon, title }) => (
    <div className="flex items-center justify-center text-center border-b-2 border-gray-300 pb-4 mb-8">
        <div className="text-gray-600 mr-3">{icon}</div>
        <h2 className="text-3xl font-bold text-gray-800 font-serif">{title}</h2>
    </div>
);

const LordCard: React.FC<typeof lordsData[0]> = ({ name, title, role, legacy, icon, color }) => (
    <div className={`${color} text-white p-6 rounded-2xl shadow-lg flex flex-col`}>
        <div className="flex items-center space-x-3 mb-4">
            <div className="flex-shrink-0">{icon}</div>
            <h3 className="text-xl font-bold font-serif">{name}</h3>
        </div>
        <div className="space-y-2 text-sm">
            <p><strong className="font-bold opacity-80">Title:</strong> {title}</p>
            <p><strong className="font-bold opacity-80">Role:</strong> {role}</p>
            <p><strong className="font-bold opacity-80">Legacy:</strong> {legacy}</p>
        </div>
    </div>
);

const ForceCard: React.FC<typeof forcesData[0]> = ({ name, description, icon, color }) => (
    <div className={`${color} text-white p-6 rounded-2xl shadow-lg`}>
        <div className="flex items-center space-x-3 mb-3">
            <div className="flex-shrink-0">{icon}</div>
            <h3 className="text-xl font-bold font-serif">{name}</h3>
        </div>
        <p className="text-sm leading-relaxed">{description}</p>
    </div>
);

const TimelineEvent: React.FC<typeof timelineData[0]> = ({ date, title, description }) => (
    <div className="pl-8 relative border-l-2 border-red-500 py-4">
        <div className="absolute -left-[9px] top-6 h-4 w-4 rounded-full bg-red-500 border-2 border-white"></div>
        <div className="bg-white p-6 rounded-2xl shadow-md">
            <p className="text-sm font-bold text-red-600 mb-1">{date}</p>
            <h3 className="text-xl font-bold font-serif text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 leading-relaxed font-serif">{description}</p>
        </div>
    </div>
);


// --- Main History Page Component ---

export const HistoryPage: React.FC<HistoryPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-gray-100 animate-fade-in-up">
        <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-left mb-4">
                <button onClick={() => onNavigate('home')} className="text-blue-600 hover:text-blue-800 font-bold transition-colors">
                    &larr; Back to Kingdom Home
                </button>
            </div>
            <SectionTitle icon={<ScrollIcon className="h-8 w-8" />} title="Royal History" />

            {/* Founding Story */}
            <section className="bg-orange-700/90 text-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold font-serif mb-3 flex items-center">
                    <PaperIcon className="h-6 w-6 mr-2 text-orange-200" />
                    The Founding of the Kingdom of Valoria
                </h3>
                <div className="bg-orange-800/80 p-4 rounded-lg border border-orange-600 text-orange-100 font-serif text-lg leading-relaxed space-y-4">
                    <p>
                        On the 7th of February, 2025, a spark of imagination lit the path to a new realm. In the grass fields behind school, where Callistus (later crowned King of Valoria) walked with his companions Zephyrus and Kaldor.
                    </p>
                    <p>
                        As they spoke, Callistus suggested an idea that would change their lives: <strong className="text-yellow-200">"Let us make a nation of our own."</strong>
                    </p>
                    <p>
                        Kaldor, filled with excitement, recalled tales of famous micronations such as Sealand and Molossia. The idea grew stronger, and soon after, Callistus turned to ChatGPT on his older account for guidance. With newfound inspiration, he created a group on Instagram, declaring his 6x4 foot bedroom as the capital and first land of Valoria. Thus, the Kingdom was born.
                    </p>
                </div>
            </section>

            {/* The Conquest of Caelumbra */}
            <section className="bg-purple-700/90 text-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold font-serif mb-3 flex items-center">
                    <CityHallIcon className="h-6 w-6 mr-2 text-purple-200" />
                    Operation Potboil & The Conquest of Caelumbra
                </h3>
                <div className="bg-purple-800/80 p-4 rounded-lg border border-purple-600 text-purple-100 font-serif text-lg leading-relaxed space-y-4">
                    <p>
                        As Valoria grew, King Callistus went to a new school, Aegis remained in another town, and the rest attended the nearby high school. There, Kaldor and the others met Hruaia, a popular MLBB player with a large following.
                    </p>
                    <p>
                        Hruaia had created a massive, chaotic group. Kaldor, seeing a "dark land full of evils," called upon King Callistus for help. Together, they launched <strong className="text-yellow-200">Operation Potboil</strong>. Kaldor led the Southern Axe Division, while the King led the Valerian Blades.
                    </p>
                    <p>
                        Through strategic diplomacy and Kaldor's victory in MLBB, Hruaia joined Valoria. The group was initially renamed "Slave Town of Valoria," but upon hearing of the victory, King Callistus intervened. He renamed it <strong className="text-yellow-200">Caelumbra City</strong>, freed all the "slaves," and declared it Valoria's largest city.
                    </p>
                    <p>
                        Hruaia (now Lord Elion) was promoted as the first official Lord of Valoria and the first Astrarch, ruling the Kingdom of Modesty with Caelumbra as its capital. Kaldor, the founder of Modesty, was granted the eternal title: <strong className="text-yellow-200">Voidfather of Modesty</strong>.
                    </p>
                </div>
            </section>

            {/* Lords Section */}
            <section>
                <SectionTitle icon={<CrownIcon className="h-8 w-8" />} title="The Lords of Valoria" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {lordsData.map(lord => <LordCard key={lord.name} {...lord} />)}
                </div>
            </section>

            {/* Forces Section */}
            <section>
                <SectionTitle icon={<CrossIcon className="h-8 w-8" />} title="The Forces of Valoria" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {forcesData.map(force => <ForceCard key={force.name} {...force} />)}
                </div>
            </section>

            {/* Timeline Section */}
            <section className="space-y-4">
                {timelineData.map(event => <TimelineEvent key={event.title} {...event} />)}
            </section>

            {/* The Book of Valor */}
            <section className="bg-amber-100 text-amber-900 p-6 rounded-2xl shadow-lg border-2 border-amber-300">
                <h3 className="text-2xl font-bold font-serif mb-4 flex items-center justify-center border-b border-amber-300 pb-2">
                    <BookIcon className="h-6 w-6 mr-2 text-amber-700" />
                    The Book of Valor – Records & Laws
                </h3>
                <div className="space-y-6 font-serif">
                    <div>
                        <h4 className="font-bold text-lg text-amber-800">Chapter I – Of the Crown</h4>
                        <ol className="list-decimal list-inside space-y-1 mt-2">
                            <li>And it was in the days of the Founding, that Callistus was set upon the throne.</li>
                            <li>And he was crowned King of Valoria, keeper of balance, ruler of tribes, and judge of laws.</li>
                            <li>To him was given the charge of wisdom, that the realm might not fall into folly.</li>
                        </ol>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-amber-800">Chapter II – Of the Valotrinity</h4>
                        <ol className="list-decimal list-inside space-y-1 mt-2">
                            <li>In the beginning stood Zephyrus, Father of the Nation, Priest of Air and Blessings.</li>
                            <li>Beside him marched Kaldor, the Holy Spirit, Field Marshal and Lord of Land.</li>
                            <li>And upon the throne sat Callistus, the Son, calm and steadfast.</li>
                            <li>Together they formed the Valotrinity, whose word none could overturn, whose veto none could resist.</li>
                        </ol>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-amber-800">Chapter III – Of the Lords</h4>
                        <ol className="list-decimal list-inside space-y-1 mt-2">
                            <li>And the Lords were many, but not all shone as the Trinity.</li>
                            <li>Among them stood Aegis of the Sea, Aldric the Prime, and Elion of Caelumbra.</li>
                            <li>To each was given a tribe, that the people might be ordered and known by name.</li>
                            <li>Yet the crown remained one, and the balance was held by the Son.</li>
                        </ol>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-amber-800">Chapter IV – Of War and Order</h4>
                        <ol className="list-decimal list-inside space-y-1 mt-2">
                            <li>The Royal Guard were sworn unto the King alone.</li>
                            <li>The Valorian Blades were sharpened in secret, to be drawn in war.</li>
                            <li>The Army of Valoria marched under Lords and Generals, bearing ranks from General unto Private.</li>
                            <li>And it was decreed: That Lords may strike small regions without leave of the King. But against nations, none may march save with the King’s word. And sub-rulers, called Astrarchs, shall move only at the will of their Lord. And a Holy War may not be loosed save the King and the Church cry it together.</li>
                        </ol>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-amber-800">Chapter V – Of the Records of Valor</h4>
                        <ol className="list-decimal list-inside space-y-1 mt-2">
                            <li>And the deeds of the people were written, that memory should not fade.</li>
                            <li>These are the first of the Valorian Records:
                                <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                                    <li>The Fattest Valorian – to be named when the heaviest citizen is found.</li>
                                    <li>The Fastest Runner – swift of foot upon land.</li>
                                    <li>The Swiftest in Water – master of swimming.</li>
                                    <li>The Strongest Arms – bearer of weight and strength.</li>
                                    <li>The Wisest in Speech – master of words and counsel.</li>
                                    <li>The Most Faithful Servant – who never betrayed King nor Lord.</li>
                                </ul>
                            </li>
                            <li>And each year, the Records shall be judged anew, and the champions remembered.</li>
                        </ol>
                    </div>
                </div>
            </section>
        </main>
    </div>
  );
};
