import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BlogPost } from '../types';
import { Calendar, ArrowRight } from 'lucide-react';

const API_URL = 'https://crm.megalive.ir/items/blog';
const ASSETS_URL = 'https://crm.megalive.ir/assets/';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      setLoading(true);
      try {
        const response = await fetch(`${API_URL}?filter[blog_slug][_eq]=${slug}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        if (result.data && result.data.length > 0) {
          setPost(result.data[0]);
        } else {
          throw new Error('Post not found');
        }
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-20 animate-pulse">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="h-10 bg-slate-200 dark:bg-slate-800 rounded w-3/4 mx-auto mb-4"></div>
          <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/4 mx-auto mb-10"></div>
          <div className="w-full h-96 bg-slate-200 dark:bg-slate-800 rounded-2xl mb-10"></div>
          <div className="space-y-4">
            <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded"></div>
            <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-5/6"></div>
            <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded"></div>
            <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-20 text-center py-20">
        <h2 className="text-2xl font-bold text-red-500 mb-4">خطا</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">{error === 'Post not found' ? 'مقاله مورد نظر یافت نشد.' : 'خطا در بارگذاری مقاله.'}</p>
        <Link to="/blog" className="text-brand-500 hover:underline flex items-center justify-center gap-2">
          <ArrowRight className="h-4 w-4" />
          بازگشت به وبلاگ
        </Link>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <div className="pt-20 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article>
          <header className="text-center mb-12">
             <Link to="/blog" className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-500 mb-4 inline-flex items-center gap-2">
                <ArrowRight className="h-4 w-4" />
                <span>بازگشت به وبلاگ</span>
             </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
              {post.blog_title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date_created).toLocaleDateString('fa-IR')}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center mt-6">
                {post.blog_tags.map(tag => (
                    <span key={tag} className="text-xs font-bold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/30 px-3 py-1.5 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>
          </header>

          <div className="mb-12">
            <img src={`${ASSETS_URL}${post.blog_image}`} alt={post.blog_title} className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800" />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none text-right text-slate-700 dark:text-slate-300 leading-loose space-y-6">
            {post.blog_content.split('\n').map((paragraph, index) => (
              paragraph.trim() && <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPostPage;