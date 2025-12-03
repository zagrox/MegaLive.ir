import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';
import { Calendar, ArrowLeft, BookOpen, Clock } from 'lucide-react';

const API_URL = 'https://crm.megalive.ir/items/blog?sort=-date_created';

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setPosts(result.data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const calculateReadingTime = (content: string) => {
    const words = content.split(' ').length;
    return Math.ceil(words / 200) || 5;
  };

  return (
    <div className="pt-20 bg-white dark:bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
             <div className="absolute -top-20 right-0 w-96 h-96 bg-brand-200 dark:bg-brand-900/40 rounded-full blur-3xl"></div>
             <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-200 dark:bg-accent-900/40 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-xs font-bold mb-6">
            <BookOpen className="h-4 w-4" />
            مرکز دانش مگالایو
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            وبلاگ و <span className="text-brand-500">مقالات</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            تازه ترین تحلیل‌ها و آموزش‌های هوش مصنوعی برای کسب‌وکارها
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {loading && (
            <div className="space-y-12">
               <div className="w-full h-80 bg-slate-100 dark:bg-slate-900 rounded-3xl animate-pulse"></div>
               <div className="grid md:grid-cols-2 gap-8">
                  <div className="h-64 bg-slate-100 dark:bg-slate-900 rounded-2xl animate-pulse"></div>
                  <div className="h-64 bg-slate-100 dark:bg-slate-900 rounded-2xl animate-pulse"></div>
               </div>
            </div>
          )}

          {error && <p className="text-center text-red-500 bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border border-red-200 dark:border-red-900">خطا در دریافت مقالات: {error}</p>}
          
          {!loading && !error && posts.length > 0 && (
            <div className="space-y-16">
              
              {/* Featured Post (Latest) */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-xl shadow-brand-500/5 hover:border-brand-300 dark:hover:border-brand-700 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-accent-500"></div>
                  
                  <div className="relative z-10">
                      <div className="flex flex-wrap items-center gap-4 mb-6">
                          <span className="bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse shadow-lg shadow-brand-500/20">
                              جدیدترین
                          </span>
                          {(posts[0].blog_tags || []).slice(0, 3).map(tag => (
                              <span key={tag} className="text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full">
                                  #{tag}
                              </span>
                          ))}
                      </div>

                      <Link to={`/blog/${posts[0].blog_slug}`} className="block group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                              {posts[0].blog_title}
                          </h2>
                      </Link>
                      
                      {/* Summary removed as requested */}

                      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100 dark:border-slate-800 mt-auto">
                          <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
                              <div className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4" />
                                  <span>{new Date(posts[0].date_created).toLocaleDateString('fa-IR', {year:'numeric', month:'long', day:'numeric'})}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                  <Clock className="h-4 w-4" />
                                  <span>{calculateReadingTime(posts[0].blog_content)} دقیقه مطالعه</span>
                              </div>
                          </div>
                          
                          <Link to={`/blog/${posts[0].blog_slug}`} className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 font-bold hover:gap-3 transition-all bg-brand-50 dark:bg-brand-900/20 px-4 py-2 rounded-lg">
                              ادامه مطلب
                              <ArrowLeft className="h-4 w-4" />
                          </Link>
                      </div>
                  </div>
              </div>

              {/* Grid for Other Posts */}
              {posts.length > 1 && (
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-1.5 h-8 bg-brand-500 rounded-full"></div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                            سایر مقالات
                        </h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {posts.slice(1).map((post) => (
                            <Link to={`/blog/${post.blog_slug}`} key={post.id} className="flex flex-col bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {(post.blog_tags || []).slice(0, 2).map(tag => (
                                        <span key={tag} className="text-[10px] font-bold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20 px-2 py-1 rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 leading-relaxed group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                                    {post.blog_title}
                                </h3>
                                
                                {/* Summary removed as requested */}
                                
                                <div className="mt-auto flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-50 dark:border-slate-800">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="h-3 w-3" />
                                        <span>{new Date(post.date_created).toLocaleDateString('fa-IR')}</span>
                                    </div>
                                    <span className="flex items-center gap-1 text-brand-500 font-medium group-hover:underline">
                                        بخوانید
                                        <ArrowLeft className="h-3 w-3" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
              )}
            </div>
          )}
          
          {!loading && !error && posts.length === 0 && (
             <div className="text-center py-20 text-slate-500">
                 هنوز مقاله‌ای منتشر نشده است.
             </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;