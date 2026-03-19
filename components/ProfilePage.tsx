import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore';
import { CitizensIcon } from './icons/CitizensIcon';
import { ShieldIcon } from './icons/ShieldIcon';
import { ScrollIcon } from './icons/ScrollIcon';

interface ProfilePageProps {
  onNavigate: (page: string) => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ onNavigate }) => {
  const { profile, loading } = useAuth();
  const [applyingVisa, setApplyingVisa] = useState(false);
  const [visaReason, setVisaReason] = useState('');
  const [applyingJob, setApplyingJob] = useState(false);
  const [jobDept, setJobDept] = useState('');
  const [jobMessage, setJobMessage] = useState('');
  const [editingProfile, setEditingProfile] = useState(false);
  const [editName, setEditName] = useState('');
  const [editTribe, setEditTribe] = useState('');

  useEffect(() => {
    if (profile) {
      setEditName(profile.displayName || '');
      setEditTribe(profile.tribe || '');
    }
  }, [profile]);

  if (loading) return <div className="p-20 text-center">Loading Royal Records...</div>;
  if (!profile) return <div className="p-20 text-center">Please log in to view your profile.</div>;

  const handleVisaApply = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'visaApplications'), {
        uid: profile.uid,
        displayName: profile.displayName,
        reason: visaReason,
        status: 'pending',
        createdAt: serverTimestamp()
      });
      setApplyingVisa(false);
      alert("Visa application submitted to the Royal Court.");
    } catch (err) {
      console.error(err);
    }
  };

  const handleJobApply = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'jobApplications'), {
        uid: profile.uid,
        displayName: profile.displayName,
        department: jobDept,
        message: jobMessage,
        status: 'pending',
        createdAt: serverTimestamp()
      });
      setApplyingJob(false);
      alert("Job application sent to the department head.");
    } catch (err) {
      console.error(err);
    }
  };

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, 'users', profile.uid), {
        displayName: editName,
        tribe: editTribe
      });
      setEditingProfile(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen animate-fade-in">
      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-left mb-4">
            <button onClick={() => onNavigate('home')} className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">
                &larr; Back to Kingdom Home
            </button>
        </div>
        <header className="flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
          <div className="flex items-center space-x-6">
            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              {profile.displayName?.charAt(0) || 'V'}
            </div>
            <div>
              <h2 className="text-3xl font-black text-slate-900">{profile.displayName}</h2>
              <div className="flex items-center space-x-2 mt-1">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${
                  profile.role === 'admin' || profile.role === 'lord' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-600'
                }`}>
                  {profile.role}
                </span>
                {profile.visaStatus === 'approved' && (
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Visa Active
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="mt-6 md:mt-0 text-right flex flex-col items-end">
            <button 
              onClick={() => setEditingProfile(true)}
              className="mb-2 text-xs font-bold text-indigo-600 hover:text-indigo-800 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full"
            >
              Edit Profile
            </button>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Kingdom ID</p>
            <p className="font-mono text-sm text-slate-600">{profile.uid.substring(0, 12)}...</p>
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Documents Section */}
          <section className="md:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <ScrollIcon className="h-6 w-6 mr-2 text-indigo-600" />
                Royal Documents
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl border-2 border-dashed border-slate-100 flex flex-col items-center justify-center text-center space-y-3">
                  <div className="h-12 w-12 rounded-xl bg-slate-50 flex items-center justify-center text-2xl">🛂</div>
                  <div>
                    <h4 className="font-bold text-slate-800">Visa Status</h4>
                    <p className="text-sm text-slate-500">{profile.visaStatus === 'none' ? 'No active visa' : profile.visaStatus}</p>
                  </div>
                  {profile.visaStatus === 'none' && (
                    <button 
                      onClick={() => setApplyingVisa(true)}
                      className="text-xs font-bold text-indigo-600 hover:text-indigo-800 uppercase tracking-widest"
                    >
                      Apply Now
                    </button>
                  )}
                </div>

                <div className="p-6 rounded-2xl border-2 border-dashed border-slate-100 flex flex-col items-center justify-center text-center space-y-3">
                  <div className="h-12 w-12 rounded-xl bg-slate-50 flex items-center justify-center text-2xl">🗳️</div>
                  <div>
                    <h4 className="font-bold text-slate-800">Voter Card</h4>
                    <p className="text-sm text-slate-500">{profile.voterCardId || 'Not issued'}</p>
                  </div>
                  {!profile.voterCardId && (
                    <p className="text-[10px] text-slate-400 uppercase font-bold">Contact High Command</p>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <ShieldIcon className="h-6 w-6 mr-2 text-indigo-600" />
                Career & Advancement
              </h3>
              <div className="space-y-4">
                <button 
                  onClick={() => setApplyingJob(true)}
                  className="w-full p-4 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold flex items-center justify-between hover:bg-indigo-100 transition-colors"
                >
                  <span>Apply for a Department Position</span>
                  <span>&rarr;</span>
                </button>
                <button 
                  onClick={() => onNavigate('projects')}
                  className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-700 font-bold flex items-center justify-between hover:bg-slate-100 transition-colors"
                >
                  <span>Contribute to Active Projects</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </div>
          </section>

          {/* Sidebar / Stats */}
          <aside className="space-y-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl text-white shadow-xl">
              <h3 className="text-lg font-bold mb-4">Permissions</h3>
              <div className="space-y-2">
                {profile.permissions?.length > 0 ? (
                  profile.permissions.map(p => (
                    <div key={p} className="bg-white/10 px-3 py-2 rounded-xl text-xs font-mono border border-white/10">
                      {p}
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-slate-400 italic">No special permissions granted yet.</p>
                )}
              </div>
            </div>
            {profile.tribe && (
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Tribe</h3>
                <p className="text-indigo-600 font-medium">{profile.tribe}</p>
              </div>
            )}
          </aside>
        </div>

        {/* Edit Profile Modal */}
        {editingProfile && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl animate-scale-in">
              <h3 className="text-2xl font-bold mb-4">Edit Profile</h3>
              <form onSubmit={handleProfileUpdate} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Display Name</label>
                  <input 
                    required
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Tribe</label>
                  <select 
                    value={editTribe}
                    onChange={(e) => setEditTribe(e.target.value)}
                    className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 outline-none"
                  >
                    <option value="">No Tribe</option>
                    <option value="Zephyrians">Zephyrians</option>
                    <option value="Kaldorians">Kaldorians</option>
                    <option value="Aldricans">Aldricans</option>
                    <option value="Callistans">Callistans</option>
                  </select>
                </div>
                <div className="flex space-x-3">
                  <button type="button" onClick={() => setEditingProfile(false)} className="flex-1 py-3 rounded-2xl font-bold text-slate-500 hover:bg-slate-100">Cancel</button>
                  <button type="submit" className="flex-1 py-3 rounded-2xl font-bold bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200">Save</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Visa Modal */}
        {applyingVisa && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl animate-scale-in">
              <h3 className="text-2xl font-bold mb-4">Apply for Visa</h3>
              <form onSubmit={handleVisaApply} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Reason for Visit</label>
                  <textarea 
                    required
                    value={visaReason}
                    onChange={(e) => setVisaReason(e.target.value)}
                    className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none h-32"
                    placeholder="Why do you wish to enter Valoria?"
                  />
                </div>
                <div className="flex space-x-3">
                  <button type="button" onClick={() => setApplyingVisa(false)} className="flex-1 py-3 rounded-2xl font-bold text-slate-500 hover:bg-slate-100">Cancel</button>
                  <button type="submit" className="flex-1 py-3 rounded-2xl font-bold bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200">Submit</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Job Modal */}
        {applyingJob && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl animate-scale-in">
              <h3 className="text-2xl font-bold mb-4">Job Application</h3>
              <form onSubmit={handleJobApply} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Department</label>
                  <select 
                    required
                    value={jobDept}
                    onChange={(e) => setJobDept(e.target.value)}
                    className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 outline-none"
                  >
                    <option value="">Select Department</option>
                    <option value="Defense">Department of Defense</option>
                    <option value="National Advancement">National Advancement</option>
                    <option value="Space & Robotics">Space & Robotics Agency</option>
                    <option value="Celestial Nexus">Celestial Nexus</option>
                    <option value="Intelligence Agency">Valorian Intelligence Agency</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Message to Minister</label>
                  <textarea 
                    required
                    value={jobMessage}
                    onChange={(e) => setJobMessage(e.target.value)}
                    className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none h-32"
                    placeholder="Describe your skills and why you want to join..."
                  />
                </div>
                <div className="flex space-x-3">
                  <button type="button" onClick={() => setApplyingJob(false)} className="flex-1 py-3 rounded-2xl font-bold text-slate-500 hover:bg-slate-100">Cancel</button>
                  <button type="submit" className="flex-1 py-3 rounded-2xl font-bold bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200">Send Application</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
