import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { doc, onSnapshot, updateDoc, increment, getDoc, setDoc } from 'firebase/firestore';
import { useAuth } from '../hooks/useAuth';

interface Stats {
  visitorCount: number;
  countries: { [key: string]: number };
}

// Simple map for country emojis
const countryEmojis: { [key: string]: string } = {
  'UN': '🌍',
  'US': '🇺🇸',
  'GB': '🇬🇧',
  'IN': '🇮🇳',
  'CA': '🇨🇦',
  'AU': '🇦🇺',
  'DE': '🇩🇪',
  'FR': '🇫🇷',
  'JP': '🇯🇵',
  'KR': '🇰🇷',
  'CN': '🇨🇳',
  'BR': '🇧🇷',
  'RU': '🇷🇺',
  'VAL': '👑' // Special code for Valoria
};

export const VisitorCounter: React.FC = () => {
  const [stats, setStats] = useState<Stats | null>(null);
  const { profile } = useAuth();

  useEffect(() => {
    const statsRef = doc(db, 'stats', 'global');
    
    const initStats = async () => {
      const snap = await getDoc(statsRef);
      if (!snap.exists()) {
        try {
          await setDoc(statsRef, { visitorCount: 0, countries: {} });
        } catch (e) {
          console.error("Error initializing stats:", e);
        }
      }
    };

    const unsubscribe = onSnapshot(statsRef, (doc) => {
      if (doc.exists()) {
        setStats(doc.data() as Stats);
      }
    });

    const hasVisited = sessionStorage.getItem('hasVisited');
    if (!hasVisited) {
      const updateStats = async () => {
        try {
          await initStats();
          // Use profile country if available, otherwise 'UN'
          const countryCode = profile?.country || 'UN';
          
          await updateDoc(statsRef, {
            visitorCount: increment(1),
            [`countries.${countryCode}`]: increment(1)
          });
          sessionStorage.setItem('hasVisited', 'true');
        } catch (e) {
          console.error("Error updating stats:", e);
        }
      };
      updateStats();
    } else {
      initStats(); // Still initialize if they've visited but the doc is somehow missing
    }

    return () => unsubscribe();
  }, [profile]); // Re-run if profile changes (e.g. user logs in)

  if (!stats) return null;

  return (
    <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-2xl border border-slate-800 text-center space-y-4 animate-fade-in">
      <div className="space-y-1">
        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black">Global Visitors</p>
        <div className="text-4xl font-black font-mono text-emerald-400 tracking-tighter">
          {(stats.visitorCount || 0).toLocaleString()}
        </div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {Object.entries(stats.countries || {})
          .sort((a, b) => (b[1] as number) - (a[1] as number)) // Sort by count
          .slice(0, 8) // Top 8
          .map(([code, count]) => (
          <div key={code} className="flex items-center bg-slate-800/50 px-3 py-1.5 rounded-full text-[10px] font-bold border border-slate-700/50 hover:bg-slate-700 transition-colors cursor-default">
            <span className="mr-2 text-sm">{countryEmojis[code] || '🏳️'}</span>
            <span className="text-slate-300">{count}</span>
          </div>
        ))}
      </div>
      <p className="text-[9px] text-slate-600 font-bold uppercase tracking-widest">Tracking Origins & Unity</p>
    </div>
  );
};
