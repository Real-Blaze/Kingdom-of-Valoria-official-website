import React, { useState, useEffect } from 'react';
import { NewspaperIcon } from './icons/NewspaperIcon';
import { useAuth } from '../hooks/useAuth';
import { db } from '../firebase';
import { collection, query, orderBy, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';

interface NewsPageProps {
  onNavigate: (page: string) => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({ onNavigate }) => {
  const { profile } = useAuth();
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showPostForm, setShowPostForm] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', content: '', category: 'Announcement' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check if user has permission to post news
  const canPostNews = profile?.role === 'admin' || profile?.role === 'lord' || profile?.role === 'general';

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'news'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const newsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setNews(newsData);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePostSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canPostNews) return;
    
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'news'), {
        title: newPost.title,
        content: newPost.content,
        category: newPost.category,
        authorName: profile?.displayName || 'Royal Official',
        authorRole: profile?.role || 'Official',
        createdAt: serverTimestamp()
      });
      setShowPostForm(false);
      setNewPost({ title: '', content: '', category: 'Announcement' });
      fetchNews(); // Refresh news list
    } catch (error) {
      console.error("Error posting news:", error);
      alert("Failed to post news.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen animate-fade-in-up">
      <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex justify-between items-center mb-4">
            <button onClick={() => onNavigate('home')} className="text-blue-600 hover:text-blue-800 font-bold transition-colors">
                &larr; Back to Kingdom Home
            </button>
            {canPostNews && (
                <button 
                    onClick={() => setShowPostForm(!showPostForm)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors shadow-sm text-sm"
                >
                    {showPostForm ? 'Cancel Post' : '+ Post Royal Decree'}
                </button>
            )}
        </div>

        <div className="flex items-center justify-center text-center border-b-2 border-gray-300 pb-4 mb-8">
            <NewspaperIcon className="h-10 w-10 text-blue-800 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800 font-serif">Royal News & Decrees</h2>
        </div>

        {/* Post Form (Admin/Lords only) */}
        {showPostForm && canPostNews && (
            <section className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-blue-500 animate-fade-in-up mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">Draft New Decree</h3>
                <form onSubmit={handlePostSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-gray-700 mb-1">Title</label>
                            <input 
                                required 
                                type="text" 
                                value={newPost.title}
                                onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
                                placeholder="e.g., The Grand Tournament Announced" 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Category</label>
                            <select 
                                value={newPost.category}
                                onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            >
                                <option value="Announcement">Announcement</option>
                                <option value="Decree">Royal Decree</option>
                                <option value="Event">Event</option>
                                <option value="Military">Military Update</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Content</label>
                        <textarea 
                            required 
                            value={newPost.content}
                            onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none h-32" 
                            placeholder="Write the official news here..." 
                        />
                    </div>
                    <div className="flex justify-end">
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors shadow-sm ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {isSubmitting ? 'Publishing...' : 'Publish Decree'}
                        </button>
                    </div>
                </form>
            </section>
        )}

        {/* News Feed */}
        <div className="space-y-6">
            {loading ? (
                <div className="text-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="text-gray-500 mt-4 font-serif italic">Retrieving Royal Archives...</p>
                </div>
            ) : news.length > 0 ? (
                news.map((item) => (
                    <article key={item.id} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                        <div className="flex justify-between items-start mb-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                                item.category === 'Decree' ? 'bg-purple-100 text-purple-800' :
                                item.category === 'Military' ? 'bg-red-100 text-red-800' :
                                item.category === 'Event' ? 'bg-orange-100 text-orange-800' :
                                'bg-blue-100 text-blue-800'
                            }`}>
                                {item.category}
                            </span>
                            <span className="text-sm text-gray-500 font-medium">
                                {item.createdAt ? new Date(item.createdAt.seconds * 1000).toLocaleDateString() : 'Just now'}
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">{item.title}</h3>
                        <p className="text-gray-700 whitespace-pre-wrap leading-relaxed mb-4">{item.content}</p>
                        <div className="pt-4 border-t border-gray-100 flex items-center text-sm text-gray-500">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                            <span className="font-bold text-gray-700 mr-1">{item.authorName}</span> 
                            <span className="italic">({item.authorRole})</span>
                        </div>
                    </article>
                ))
            ) : (
                <div className="text-center py-12 bg-white rounded-2xl shadow-sm border border-gray-200">
                    <NewspaperIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-700 font-serif mb-2">No Decrees Found</h3>
                    <p className="text-gray-500">The Royal Archives are currently empty. Check back later for updates.</p>
                </div>
            )}
        </div>

      </main>
    </div>
  );
};
