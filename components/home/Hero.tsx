import React from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import DemoChatWidget from './DemoChatWidget';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-brand-400/20 blur-[120px] dark:bg-brand-900/20 opacity-50"></div>
        <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-accent-400/20 blur-[100px] dark:bg-accent-900/10 opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 border border-brand-100 dark:border-brand-800 text-brand-600 dark:text-brand-300 text-xs font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              نسل جدید پشتیبانی هوشمند
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
              ساخت چت‌بات هوشمند <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500 dark:from-brand-400 dark:to-accent-400">
                در کمتر از ۵ دقیقه
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              اسناد، PDFها و لینک‌های وب‌سایت خود را به یک دستیار هوشمند ۲۴ ساعته تبدیل کنید. 
              فروش بیشتر و پشتیبانی سریع‌تر را تجربه کنید.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <a href="https://app.megalive.ir/?register" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-brand-500/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                رایگان شروع کنید
                <ArrowLeft className="h-5 w-5" />
              </a>
              <button className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-xl font-bold text-lg transition-colors">
                مشاهده دمو
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>بدون نیاز به کارت اعتباری</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>پشتیبانی کامل از فارسی</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>راه‌اندازی فوری</span>
              </div>
            </div>
          </div>

          {/* Visual/Demo Content */}
          <div className="relative mx-auto lg:mx-0 w-full max-w-md lg:max-w-full flex justify-center lg:justify-end">
            <div className="relative z-10">
              <DemoChatWidget />
              
              {/* Decorative floating elements */}
              <div className="absolute -right-12 top-28 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 hidden xl:block animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                    PDF
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">آپلود فایل</p>
                    <p className="text-sm font-bold text-slate-800 dark:text-white">Product_Manual.pdf</p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-8 bottom-32 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 hidden xl:block animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                 <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                    98%
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">نرخ رضایت</p>
                    <p className="text-sm font-bold text-slate-800 dark:text-white">پاسخ‌های صحیح</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Blob behind mockup */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-200 to-accent-200 dark:from-brand-900/40 dark:to-accent-900/40 rounded-full blur-[60px] -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;