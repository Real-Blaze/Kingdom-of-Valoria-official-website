import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { db } from '../firebase';
import { collection, query, where, onSnapshot, doc, updateDoc, addDoc, serverTimestamp } from 'firebase/firestore';
import { ShieldIcon } from './icons/ShieldIcon';
import { GovernmentIcon } from './icons/GovernmentIcon';
import { GoogleGenAI } from '@google/genai';

interface HighCommandPageProps {
  onNavigate: (page: string) => void;
}

export const HighCommandPage: React.FC<HighCommandPageProps> = ({ onNavigate }) => {
  const { profile, loading } = useAuth();
  const [visas, setVisas] = useState<any[]>([]);
  const [jobs, setJobs] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<'visas' | 'jobs' | 'users' | 'ai'>('visas');
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPosting, setIsPosting] = useState(false);

  useEffect(() => {
    if (!profile || (profile.role !== 'admin' && profile.role !== 'lord' && profile.role !== 'general')) return;

    const visaQuery = query(collection(db, 'visaApplications'), where('status', '==', 'pending'));
    const jobQuery = query(collection(db, 'jobApplications'), where('status', '==', 'pending'));
    const userQuery = collection(db, 'users');

    const unsubVisas = onSnapshot(visaQuery, (snap) => setVisas(snap.docs.map(d => ({ id: d.id, ...d.data() }))));
    const unsubJobs = onSnapshot(jobQuery, (snap) => setJobs(snap.docs.map(d => ({ id: d.id, ...d.data() }))));
    const unsubUsers = onSnapshot(userQuery, (snap) => setUsers(snap.docs.map(d => ({ id: d.id, ...d.data() }))));

    return () => {
      unsubVisas();
      unsubJobs();
      unsubUsers();
    };
  }, [profile]);

  if (loading) return <div className="p-20 text-center">Authenticating with High Command...</div>;
  if (!profile || (profile.role !== 'admin' && profile.role !== 'lord' && profile.role !== 'general')) {
    return <div className="p-20 text-center text-red-600 font-bold">ACCESS DENIED: Restricted to High Command Only.</div>;
  }

  const handleVisaAction = async (id: string, uid: string, status: 'approved' | 'rejected') => {
    try {
      await updateDoc(doc(db, 'visaApplications', id), { status });
      await updateDoc(doc(db, 'users', uid), { visaStatus: status });
    } catch (err) {
      console.error(err);
    }
  };

  const handleJobAction = async (id: string, status: 'approved' | 'rejected') => {
    try {
      await updateDoc(doc(db, 'jobApplications', id), { status });
    } catch (err) {
      console.error(err);
    }
  };

  const handleRoleChange = async (uid: string, newRole: string) => {
    try {
      await updateDoc(doc(db, 'users', uid), { role: newRole });
    } catch (err) {
      console.error(err);
    }
  };

  const handleGenerateAI = async () => {
    if (!aiPrompt) return;
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `You are an AI assistant for the High Command of the Kingdom of Valoria. Generate a formal decree or news post based on this prompt: ${aiPrompt}`,
      });
      setAiResponse(response.text || '');
    } catch (error) {
      console.error("Error generating AI response:", error);
      alert("Failed to generate response.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePostAINews = async () => {
    if (!aiResponse) return;
    setIsPosting(true);
    try {
      await addDoc(collection(db, 'news'), {
        title: "High Command Decree",
        content: aiResponse,
        authorName: `${profile?.displayName} (via AI)`,
        authorId: profile?.uid,
        createdAt: serverTimestamp()
      });
      alert("Decree posted to News successfully!");
      setAiResponse('');
      setAiPrompt('');
    } catch (error) {
      console.error("Error posting news:", error);
      alert("Failed to post news.");
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 animate-fade-in">
      <main className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-left mb-4">
            <button onClick={() => onNavigate('home')} className="text-slate-400 hover:text-emerald-400 font-bold transition-colors">
                &larr; Back to Kingdom Home
            </button>
        </div>
        <header className="flex items-center space-x-4 border-b border-slate-800 pb-8">
          <ShieldIcon className="h-12 w-12 text-emerald-400" />
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter">High Command Dashboard</h2>
            <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">
              Authorized Personnel: {profile.displayName} ({profile.role})
            </p>
          </div>
        </header>

        <nav className="flex space-x-4">
          <button 
            onClick={() => setActiveTab('visas')}
            className={`px-6 py-3 rounded-2xl font-bold transition-all ${activeTab === 'visas' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
          >
            Visas ({visas.length})
          </button>
          <button 
            onClick={() => setActiveTab('jobs')}
            className={`px-6 py-3 rounded-2xl font-bold transition-all ${activeTab === 'jobs' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
          >
            Job Apps ({jobs.length})
          </button>
          <button 
            onClick={() => setActiveTab('users')}
            className={`px-6 py-3 rounded-2xl font-bold transition-all ${activeTab === 'users' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
          >
            Citizens ({users.length})
          </button>
          <button 
            onClick={() => setActiveTab('ai')}
            className={`px-6 py-3 rounded-2xl font-bold transition-all ${activeTab === 'ai' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
          >
            AI Assistant
          </button>
        </nav>

        <section className="bg-slate-800/50 rounded-3xl border border-slate-700 p-8 min-h-[400px]">
          {activeTab === 'visas' && (
            <div className="space-y-4">
              {visas.length === 0 ? <p className="text-slate-500 italic">No pending visa applications.</p> : (
                visas.map(v => (
                  <div key={v.id} className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                      <h4 className="font-bold text-lg">{v.displayName}</h4>
                      <p className="text-slate-400 text-sm italic">"{v.reason}"</p>
                    </div>
                    <div className="flex space-x-2">
                      <button onClick={() => handleVisaAction(v.id, v.uid, 'rejected')} className="px-4 py-2 rounded-xl bg-red-500/10 text-red-400 font-bold hover:bg-red-500/20">Reject</button>
                      <button onClick={() => handleVisaAction(v.id, v.uid, 'approved')} className="px-4 py-2 rounded-xl bg-emerald-500 text-white font-bold hover:bg-emerald-600">Approve</button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'jobs' && (
            <div className="space-y-4">
              {jobs.length === 0 ? <p className="text-slate-500 italic">No pending job applications.</p> : (
                jobs.map(j => (
                  <div key={j.id} className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                      <h4 className="font-bold text-lg">{j.displayName} &rarr; <span className="text-emerald-400">{j.department}</span></h4>
                      <p className="text-slate-400 text-sm italic">"{j.message}"</p>
                    </div>
                    <div className="flex space-x-2">
                      <button onClick={() => handleJobAction(j.id, 'rejected')} className="px-4 py-2 rounded-xl bg-red-500/10 text-red-400 font-bold hover:bg-red-500/20">Reject</button>
                      <button onClick={() => handleJobAction(j.id, 'approved')} className="px-4 py-2 rounded-xl bg-emerald-500 text-white font-bold hover:bg-emerald-600">Approve</button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'users' && (
            <div className="grid md:grid-cols-2 gap-4">
              {users.map(u => (
                <div key={u.uid} className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex justify-between items-center">
                  <div>
                    <h4 className="font-bold">{u.displayName}</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">{u.role}</p>
                  </div>
                  <select 
                    value={u.role}
                    onChange={(e) => handleRoleChange(u.uid, e.target.value)}
                    className="bg-slate-900 border border-slate-700 p-2 rounded-xl text-xs font-bold outline-none"
                  >
                    <option value="traveller">Traveller</option>
                    <option value="citizen">Citizen</option>
                    <option value="leader">Leader</option>
                    <option value="general">General</option>
                    <option value="lord">Lord</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'ai' && (
            <div className="space-y-6">
              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                <h3 className="text-xl font-bold mb-4">AI Decree Generator</h3>
                <p className="text-slate-400 mb-4 text-sm">Describe the decree or news you want to post. The AI will format it formally for the Kingdom.</p>
                <textarea
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  placeholder="e.g., Announce a new festival for the harvest season..."
                  className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-emerald-500 outline-none h-32 mb-4"
                />
                <button
                  onClick={handleGenerateAI}
                  disabled={isGenerating || !aiPrompt}
                  className={`px-6 py-3 rounded-xl font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors ${isGenerating ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isGenerating ? 'Generating...' : 'Generate Decree'}
                </button>
              </div>

              {aiResponse && (
                <div className="bg-slate-800 p-6 rounded-2xl border border-emerald-500/50">
                  <h3 className="text-xl font-bold mb-4 text-emerald-400">Generated Decree</h3>
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 mb-4 whitespace-pre-wrap">
                    {aiResponse}
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setAiResponse('')}
                      className="px-6 py-3 rounded-xl font-bold bg-slate-700 text-white hover:bg-slate-600 transition-colors"
                    >
                      Discard
                    </button>
                    <button
                      onClick={handlePostAINews}
                      disabled={isPosting}
                      className={`px-6 py-3 rounded-xl font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors ${isPosting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {isPosting ? 'Posting...' : 'Post to News'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};
