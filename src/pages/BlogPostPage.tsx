import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BlogPost } from '../types';
import { 
  Calendar, ArrowRight, ArrowLeft, ChevronLeft, 
  Clock, Share2, Hash, Sparkles, Layout, Zap, Home 
} from 'lucide-react';

const API_URL = 'https://crm.megalive.ir/items/blog';
const ASSETS_URL = 'https://crm.megalive.ir/assets/';

interface BlogNavInfo {
  blog_title: string;
  blog_slug: string;
  date_created: string;
}

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // Navigation & Sidebar State
  const [nextPost, setNextPost] = useState<BlogNavInfo | null>(null);
  const [prevPost, setPrevPost] = useState<BlogNavInfo | null>(null);
  const [recentPosts, setRecentPosts] = useState<BlogNavInfo[]>([]);

  useEffect(() => {
    const loadData = async () => {
      if (!slug) return;
      setLoading(true);
      setError(null);
      
      try {
        // 1. Fetch current post details
        // Encode URL components to handle Persian characters in slug correctly
        const encodedSlug = encodeURIComponent(slug);
        const postResponse = await fetch(`${API_URL}?filter[blog_slug][_eq]=${encodedSlug}&timestamp=${Date.now()}`, {
            cache: 'no-store'
        });
        
        if (!postResponse.ok) throw new Error('Network response was not ok');
        const postResult = await postResponse.json();
        
        // Strict validation: Find the exact match in the returned data (in case filter was ignored)
        const matchedPost = postResult.data?.find((p: BlogPost) => p.blog_slug === slug);

        if (!matchedPost) {
          throw new Error('Post not found');
        }
        setPost(matchedPost);

        // 2. Fetch list for navigation & sidebar (lightweight: only slug, title, date)
        const listResponse = await fetch(`${API_URL}?fields=blog_title,blog_slug,date_created&sort=-date_created&limit=10`, {
            cache: 'no-store'
        });
        
        if (listResponse.ok) {
           const listResult = await listResponse.json();
           const allPosts: BlogNavInfo[] = listResult.data;
           
           const currentIndex = allPosts.findIndex(p => p.blog_slug === slug);
           
           if (currentIndex !== -1) {
             // -1 index is newer (Next), +1 index is older (Previous) because we sorted by -date_created
             setNextPost(currentIndex > 0 ? allPosts[currentIndex - 1] : null);
             setPrevPost(currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null);
           }

           // Set recent posts (excluding current one)
           setRecentPosts(allPosts.filter(p => p.blog_slug !== slug).slice(0, 5));
        }

      } catch (e: any) {
        console.error(e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
    // Scroll to top when slug changes
    window.scrollTo(0, 0);
  }, [slug]);

  // Estimate reading time
  const calculateReadingTime = (content: string) => {
    const words = content.split(' ').length;
    return Math.ceil(words / 200) || 5;
  };

  if (loading) {
    return (
      <div className="pt-24 pb-20 bg-white dark:bg-slate-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8">
                    <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded w-1/3 mb-6 animate-pulse"></div>
                    <div className="h-12 bg-slate-200 dark:bg-slate-800 rounded w-3/4 mb-6 animate-pulse"></div>
                    <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded w-1/2 mb-10 animate-pulse"></div>
                    <div className="w-full h-80 bg-slate-200 dark:bg-slate-800 rounded-2xl mb-10 animate-pulse"></div>
                    <div className="space-y-4">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-full animate-pulse"></div>
                        ))}
                    </div>
                </div>
                <div className="hidden lg:block lg:col-span-4">
                    <div className="h-64 bg-slate-200 dark:bg-slate-800 rounded-2xl animate-pulse"></div>
                </div>
            </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="pt-32 pb-20 text-center min-h-screen bg-white dark:bg-slate-950">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-500 rounded-full mb-6">
            <Zap className="h-8 w-8" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">مقاله یافت نشد</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8">{error === 'Post not found' ? 'متاسفانه مقاله‌ای با این آدرس وجود ندارد.' : 'خطا در بارگذاری اطلاعات.'}</p>
        <Link to="/blog" className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-xl font-bold transition-colors">
          <ArrowRight className="h-5 w-5 rtl:rotate-180" />
          بازگشت به وبلاگ
        </Link>
      </div>
    );
  }

  const readingTime = calculateReadingTime(post.blog_content);

  return (
    <div className="pt-24 pb-20 bg-white dark:bg-slate-950 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide">
            <Link to="/" className="hover:text-brand-600 transition-colors flex items-center gap-1">
                <Home className="h-3.5 w-3.5" />
                صفحه اصلی
            </Link>
            <ChevronLeft className="h-3 w-3 rtl:rotate-180 flex-shrink-0" />
            <Link to="/blog" className="hover:text-brand-600 transition-colors">وبلاگ</Link>
            <ChevronLeft className="h-3 w-3 rtl:rotate-180 flex-shrink-0" />
            <span className="text-slate-800 dark:text-slate-200 font-medium truncate max-w-[200px] sm:max-w-none">{post.blog_title}</span>
        </nav>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Main Content Column */}
            <article className="lg:col-span-8">
                {/* Header */}
                <header className="mb-10">
                    <div className="flex flex-wrap gap-2 mb-6">
                        {(post.blog_tags || []).map(tag => (
                            <Link to={`/blog?tag=${tag}`} key={tag} className="inline-flex items-center gap-1 text-xs font-bold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/30 px-3 py-1.5 rounded-full border border-brand-100 dark:border-brand-900 hover:bg-brand-100 dark:hover:bg-brand-900/50 transition-colors">
                                <Hash className="h-3 w-3" />
                                {tag}
                            </Link>
                        ))}
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                        {post.blog_title}
                    </h1>

                    {/* Blog Summary */}
                    <p className="text-xl text-slate-600 dark:text-slate-300 leading-loose mb-8 font-medium">
                        {post.blog_summary}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-8">
                        <div className="flex items-center gap-2">
                            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-brand-500 to-accent-500 flex items-center justify-center text-white shadow-lg shadow-brand-500/20">
                                <Sparkles className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 mb-0.5">نویسنده</p>
                                <span className="font-bold text-slate-900 dark:text-slate-200 block">تیم مگالایو</span>
                            </div>
                        </div>
                        <div className="w-px h-8 bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-500">
                                <Calendar className="h-4 w-4" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 mb-0.5">تاریخ انتشار</p>
                                <span className="font-bold text-slate-900 dark:text-slate-200 block">
                                    {new Date(post.date_created).toLocaleDateString('fa-IR', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </span>
                            </div>
                        </div>
                        <div className="w-px h-8 bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-500">
                                <Clock className="h-4 w-4" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 mb-0.5">زمان مطالعه</p>
                                <span className="font-bold text-slate-900 dark:text-slate-200 block">{readingTime} دقیقه</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Featured Image */}
                {post.blog_image && (
                    <div className="mb-10 rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 dark:shadow-none border border-slate-200 dark:border-slate-800 relative group">
                        <img 
                            src={`${ASSETS_URL}${post.blog_image}`} 
                            alt={post.blog_title} 
                            className="w-full h-auto max-h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                    </div>
                )}

                {/* Content Parser */}
                <div className="prose prose-lg dark:prose-invert prose-slate max-w-none text-justify leading-loose selection:bg-brand-100 dark:selection:bg-brand-900">
                    {post.blog_content.split('\n').map((paragraph, index) => {
                        const text = paragraph.trim();
                        if (!text) return null;

                        // 1. Headings (**Title**)
                        if (text.startsWith('**') && !text.includes('1-')) {
                            const cleanTitle = text.replace(/\*\*/g, '');
                            return (
                                <h3 key={index} className="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6 flex items-center gap-3 relative group">
                                    <span className="absolute -right-6 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brand-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    {cleanTitle}
                                </h3>
                            );
                        }

                        // 2. Numbered Lists (1- or 1. or 1-**)
                        const listMatch = text.match(/^(\d+)[\.\-]\s*(.*)/);
                        if (listMatch) {
                            const number = listMatch[1];
                            const content = listMatch[2];
                            const parts = content.split(/(\*\*.*?\*\*)/g);

                            return (
                                <div key={index} className="flex items-start gap-4 mr-2 mb-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition-colors group">
                                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-white dark:bg-slate-800 text-brand-600 dark:text-brand-400 font-bold shadow-sm border border-slate-100 dark:border-slate-700 group-hover:scale-110 transition-transform">
                                        {number}
                                    </span>
                                    <div className="text-slate-700 dark:text-slate-300 flex-1 pt-1">
                                        {parts.map((part, i) => {
                                            if (part.startsWith('**') && part.endsWith('**')) {
                                                return <strong key={i} className="font-bold text-slate-900 dark:text-white">{part.replace(/\*\*/g, '')}</strong>;
                                            }
                                            return part;
                                        })}
                                    </div>
                                </div>
                            );
                        }

                        // 3. Bullet Lists (* text)
                        const bulletMatch = text.match(/^\*\s+(.*)/);
                        if (bulletMatch) {
                            const content = bulletMatch[1];
                            const parts = content.split(/(\*\*.*?\*\*)/g);

                            return (
                                <div key={index} className="flex items-start gap-3 mr-4 mb-3 group">
                                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-brand-400 dark:bg-brand-600 mt-2.5 group-hover:scale-125 transition-transform"></span>
                                    <div className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        {parts.map((part, i) => {
                                            if (part.startsWith('**') && part.endsWith('**')) {
                                                return <strong key={i} className="font-bold text-slate-900 dark:text-white">{part.replace(/\*\*/g, '')}</strong>;
                                            }
                                            return part;
                                        })}
                                    </div>
                                </div>
                            );
                        }

                        // 4. Standard Paragraph
                        return (
                             <p key={index} className="mb-6 text-slate-600 dark:text-slate-300">
                                {text.split(/(\*\*.*?\*\*)/g).map((part, i) => {
                                     if (part.startsWith('**') && part.endsWith('**')) {
                                         return <strong key={i} className="font-bold text-slate-900 dark:text-white">{part.replace(/\*\*/g, '')}</strong>;
                                     }
                                     return part;
                                })}
                             </p>
                        );
                    })}
                </div>

                {/* Share Section */}
                <div className="mt-16 py-8 border-t border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <Share2 className="h-5 w-5 text-slate-500" />
                        <span className="font-bold text-slate-900 dark:text-white">اشتراک‌گذاری این مقاله</span>
                    </div>
                    <div className="flex gap-4">
                        <button className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors">
                            <span className="sr-only">Twitter</span>
                            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                        </button>
                        <button className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-900/30 dark:hover:text-blue-500 transition-colors">
                             <span className="sr-only">LinkedIn</span>
                             <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </button>
                         <button className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-sky-50 hover:text-sky-500 dark:hover:bg-sky-900/30 dark:hover:text-sky-400 transition-colors">
                            <span className="sr-only">Telegram</span>
                             <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                        </button>
                    </div>
                </div>

                {/* Navigation Footer */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Previous (Older) - Right in RTL */}
                    {prevPost ? (
                        <Link to={`/blog/${prevPost.blog_slug}`} className="group relative block p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-brand-500 dark:hover:border-brand-500 transition-all hover:shadow-lg">
                            <span className="text-xs font-bold text-slate-400 mb-2 block group-hover:text-brand-500 transition-colors">پست قبلی</span>
                            <h4 className="font-bold text-slate-800 dark:text-white mb-2 line-clamp-2">{prevPost.blog_title}</h4>
                            <div className="flex items-center gap-1 text-sm text-brand-600 dark:text-brand-400 font-medium">
                                مطالعه کنید
                                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ) : (
                        <div className="p-6 bg-slate-50/50 dark:bg-slate-900/50 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl opacity-50 flex items-center justify-center text-slate-400">
                             پست قدیمی‌تری وجود ندارد
                        </div>
                    )}

                    {/* Next (Newer) - Left in RTL */}
                    {nextPost ? (
                        <Link to={`/blog/${nextPost.blog_slug}`} className="group relative block p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-brand-500 dark:hover:border-brand-500 transition-all hover:shadow-lg text-left">
                            <span className="text-xs font-bold text-slate-400 mb-2 block group-hover:text-brand-500 transition-colors">پست جدیدتر</span>
                            <h4 className="font-bold text-slate-800 dark:text-white mb-2 line-clamp-2">{nextPost.blog_title}</h4>
                            <div className="flex items-center justify-end gap-1 text-sm text-brand-600 dark:text-brand-400 font-medium">
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                مطالعه کنید
                            </div>
                        </Link>
                    ) : (
                         <div className="p-6 bg-slate-50/50 dark:bg-slate-900/50 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl opacity-50 flex items-center justify-center text-slate-400">
                             این آخرین پست است
                        </div>
                    )}
                </div>
            </article>

            {/* Sidebar Column (Sticky) */}
            <aside className="lg:col-span-4 space-y-8 sticky top-24">
                
                {/* Author/Brand Widget */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500 rounded-full blur-[60px] opacity-20"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent-500 rounded-full blur-[50px] opacity-20"></div>
                    
                    <div className="relative z-10">
                        <div className="w-14 h-14 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center text-white mb-6 border border-white/10">
                            <Sparkles className="h-7 w-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">مگالایو</h3>
                        <p className="text-sm text-slate-300 mb-6 leading-relaxed opacity-90">
                            پلتفرم ساخت چت‌بات هوشمند فارسی. اسناد خود را آپلود کنید و در چند دقیقه یک دستیار هوشمند بسازید.
                        </p>
                        <a href="https://app.megalive.ir/?register" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-brand-500 hover:bg-brand-600 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-brand-500/30 hover:-translate-y-0.5">
                            ساخت چت‌بات رایگان
                        </a>
                    </div>
                </div>

                {/* Recent Posts Widget */}
                {recentPosts.length > 0 && (
                    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                            <Layout className="h-5 w-5 text-brand-500" />
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white">آخرین مقالات</h3>
                        </div>
                        <div className="space-y-4">
                            {recentPosts.map((p) => (
                                <Link to={`/blog/${p.blog_slug}`} key={p.blog_slug} className="group block">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 mt-2 group-hover:bg-brand-500 transition-colors"></div>
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-2 leading-relaxed">
                                                {p.blog_title}
                                            </h4>
                                            <span className="text-[10px] text-slate-400 mt-1 block">
                                                {new Date(p.date_created).toLocaleDateString('fa-IR')}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
                
                {/* Promo/Tags Widget could go here */}
            </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;