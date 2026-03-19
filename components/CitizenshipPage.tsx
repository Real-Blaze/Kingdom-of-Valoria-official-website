import React, { useState } from 'react';
import { CitizensIcon } from './icons/CitizensIcon';
import { useAuth } from '../hooks/useAuth';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

interface CitizenshipPageProps {
  onNavigate: (page: string) => void;
}

export const CitizenshipPage: React.FC<CitizenshipPageProps> = ({ onNavigate }) => {
  const { user, profile, login } = useAuth();
  const [formData, setFormData] = useState({
    realName: '',
    gender: '',
    age: '',
    tribe: '',
    interests: '',
    contribution: '',
    discovery: '',
    reason: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      let currentUser = user;
      // If not logged in, prompt Google Sign-In first
      if (!currentUser) {
        const result = await login();
        if (result && result.user) {
          currentUser = result.user;
        } else {
          setIsSubmitting(false);
          return; // Login failed or cancelled
        }
      }

      await addDoc(collection(db, 'citizenshipApplications'), {
        uid: currentUser.uid,
        ...formData,
        status: 'pending',
        createdAt: serverTimestamp()
      });
      
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("There was an error submitting your application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-100 animate-fade-in-up min-h-screen">
      <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-left mb-4">
            <button onClick={() => onNavigate('home')} className="text-blue-600 hover:text-blue-800 font-bold transition-colors">
                &larr; Back to Kingdom Home
            </button>
        </div>

        <div className="flex items-center justify-center text-center border-b-2 border-gray-300 pb-4 mb-8">
            <CitizensIcon className="h-10 w-10 text-blue-800 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800 font-serif">Become a Citizen</h2>
        </div>

        {/* Laws & Oaths Section */}
        <section className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif border-b pb-2">The Valorian Oath & Laws</h3>
            <div className="space-y-6 text-gray-700">
                <div>
                    <h4 className="font-bold text-lg text-blue-900 mb-2">The Oath of Allegiance</h4>
                    <p className="italic bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                        "I pledge my loyalty to the Kingdom of Valoria, to King Callistus I, and to the shared vision of our people. I swear to uphold the laws of the land, to contribute to our grand projects, and to stand with my fellow citizens in stick and stone."
                    </p>
                </div>
                <div>
                    <h4 className="font-bold text-lg text-blue-900 mb-2">Fundamental Laws</h4>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Unity:</strong> All citizens must strive for the betterment of the Kingdom and support one another.</li>
                        <li><strong>Innovation:</strong> We encourage creativity, from building pillow forts to designing the State Agencies.</li>
                        <li><strong>Respect:</strong> Treat all members of the Royal Court and fellow citizens with honor and dignity.</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-lg text-blue-900 mb-2">The Royal Church of Valoria</h4>
                    <p>
                        Faith and community are central to our Kingdom. All Valorians are instantly considered part of the church upon receiving citizenship and are blessed by Father Zephyrus. We are a community open to Christians and those who share our core values of fellowship and unity.
                    </p>
                </div>
            </div>
        </section>

        {/* Application Form Section */}
        <section className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif text-center">Citizenship Application</h3>
            
            {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-xl text-center">
                    <h4 className="text-xl font-bold mb-2">Application Received!</h4>
                    <p>Thank you for applying to join the Kingdom of Valoria. The High Command will review your application shortly.</p>
                    <button 
                        onClick={() => onNavigate('home')}
                        className="mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full transition-colors"
                    >
                        Return Home
                    </button>
                </div>
            ) : (
                <>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-6 rounded-r-lg">
                            <p className="text-sm text-indigo-800 font-medium">
                                ✨ You will get a new Valorian name generated by AI based on your real information with meanings. You will get multiple choices with meanings and can regenerate if you don't like them.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Real Name</label>
                                <input required type="text" name="realName" value={formData.realName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Age</label>
                                <input required type="number" name="age" value={formData.age} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. 15" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Gender</label>
                                <select required name="gender" value={formData.gender} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Tribe Preference</label>
                                <select required name="tribe" value={formData.tribe} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                                    <option value="">Select Tribe</option>
                                    <option value="AI Suggestion">AI Suggestion (Let AI decide)</option>
                                    <option value="Zephyrians">Zephyrians</option>
                                    <option value="Kaldorians">Kaldorians</option>
                                    <option value="Aldricans">Aldricans</option>
                                    <option value="Callistans">Callistans</option>
                                </select>
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-bold text-gray-700 mb-1">How did you find out about us?</label>
                                <input required type="text" name="discovery" value={formData.discovery} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Friend, internet, etc." />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">What are your interests/skills?</label>
                            <textarea required name="interests" value={formData.interests} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none h-24" placeholder="Engineering, writing, gaming..." />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">How can you contribute to the Nation?</label>
                            <textarea required name="contribution" value={formData.contribution} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none h-24" placeholder="I can help build projects, write laws..." />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Why do you want to join Valoria?</label>
                            <textarea required name="reason" value={formData.reason} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none h-24" placeholder="I believe in the vision..." />
                        </div>

                        <div className="pt-4 border-t border-gray-200 flex flex-col items-center space-y-4">
                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className={`w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-12 rounded-full transition-colors shadow-md hover:shadow-lg text-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? 'Submitting...' : (user ? 'Submit Application' : 'Apply with Google')}
                            </button>
                            <p className="text-sm text-gray-500">By applying, you agree to the Valorian Oath & Laws.</p>
                        </div>
                    </form>
                </>
            )}
        </section>

        {/* Existing Citizens Section */}
        <section className="text-center bg-gray-200 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Already a Citizen?</h3>
            <p className="text-gray-600 mb-4">Access your citizen dashboard and royal documents.</p>
            <button 
                onClick={async () => {
                    await login();
                    onNavigate('profile');
                }}
                className="bg-white text-gray-800 border border-gray-300 font-bold py-2 px-8 rounded-full hover:bg-gray-50 transition-colors shadow-sm"
            >
                Sign In
            </button>
        </section>

      </main>
    </div>
  );
};
