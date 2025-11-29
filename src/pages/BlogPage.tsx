import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';
import { Calendar, ArrowLeft } from 'lucide-react';

const API_URL = 'https://crm.megalive.ir/items/blog';
const ASSETS_URL = 'https://crm.megalive.ir/assets/';

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

  return (
    <div className="pt-20 bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6">
            وبلاگ <span className="text-brand-500">مگالایو</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            آخرین مقالات، آموزش‌ها و اخبار دنیای هوش مصنوعی و پشتیبانی مشتریان را در اینجا بخوانید.
          </p>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 animate-pulse">
                  <div className="w-full h-48 bg-slate-200 dark:bg-slate-800 rounded-lg mb-4"></div>
                  <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/4 mb-4"></div>
                  <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-full mb-1"></div>
                  <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-full mb-4"></div>
                  <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          )}

          {error && <p className="text-center text-red-500">خطا در دریافت مقالات: {error}</p>}
          
          {!loading && !error && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link to={`/blog/${post.blog_slug}`} key={post.id} className="block group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <div className="w-full h-48 overflow-hidden">
                    <img src={`${ASSETS_URL}${post.blog_image}`} alt={post.blog_title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                        {(post.blog_tags || []).slice(0, 2).map(tag => (
                            <span key={tag} className="text-xs font-bold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/30 px-2 py-1 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {post.blog_title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                      {post.blog_summary}
                    </p>
                    <div className="border-t border-slate-100 dark:border-slate-800 pt-4 flex justify-between items-center text-xs text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-2">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>{new Date(post.date_created).toLocaleDateString('fa-IR')}</span>
                        </div>
                        <div className="flex items-center gap-1 font-bold text-brand-500">
                            <span>بیشتر بخوانید</span>
                            <ArrowLeft className="h-3.5 w-3.5 group-hover:translate-x-[-4px] transition-transform" />
                        </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;