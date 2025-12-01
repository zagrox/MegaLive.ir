import React from 'react';
import { Sparkles, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-brand-600 px-6 py-16 sm:px-12 sm:py-20 text-center">
          
          {/* Background Patterns */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-white blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-accent-400 blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
              آماده‌اید تجربه کاربران خود را متحول کنید؟
            </h2>
            <p className="text-brand-100 text-lg mb-10 max-w-2xl mx-auto">
              همین امروز چت‌بات اختصاصی خود را بسازید و قدرت هوش مصنوعی را به کسب‌وکار خود اضافه کنید. بدون نیاز به کارت اعتباری.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://app.megalive.ir/?register" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white text-brand-600 hover:bg-slate-50 rounded-xl font-bold text-lg shadow-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                <Sparkles className="h-5 w-5" />
                ساخت رایگان بات
              </a>
              <Link to="/pricing" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white hover:bg-white/10 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2">
                مشاهده تعرفه‌ها
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </div>
            <p className="mt-6 text-sm text-brand-200">
              شامل ۱۴ روز استفاده رایگان از تمام امکانات پیشرفته
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;