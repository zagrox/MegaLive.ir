
import React from 'react';
import { HeartHandshake, LineChart, BookOpen, Briefcase, ArrowLeft } from 'lucide-react';

const UseCases: React.FC = () => {
  const cases = [
    {
      icon: HeartHandshake,
      title: 'پشتیبانی مشتریان',
      description: 'به ۷۰٪ سوالات متداول به صورت خودکار پاسخ دهید و رضایت مشتریان را افزایش دهید.',
      color: 'text-rose-500 bg-rose-50 dark:bg-rose-900/30',
      hoverColor: 'hover:border-rose-300 dark:hover:border-rose-900/50 hover:shadow-rose-500/10'
    },
    {
      icon: LineChart,
      title: 'فروش و بازاریابی',
      description: 'بازدیدکنندگان وب‌سایت را به مشتریان بالقوه تبدیل کنید و سرنخ‌های بیشتری جذب نمایید.',
      color: 'text-green-500 bg-green-50 dark:bg-green-900/30',
      hoverColor: 'hover:border-green-300 dark:hover:border-green-900/50 hover:shadow-green-500/10'
    },
    {
      icon: BookOpen,
      title: 'آموزش و منابع انسانی',
      description: 'یک منبع دانش همیشه در دسترس برای کارمندان جدید یا دانشجویان خود فراهم کنید.',
      color: 'text-sky-500 bg-sky-50 dark:bg-sky-900/30',
      hoverColor: 'hover:border-sky-300 dark:hover:border-sky-900/50 hover:shadow-sky-500/10'
    },
    {
      icon: Briefcase,
      title: 'آژانس‌ها و توسعه‌دهندگان',
      description: 'چت‌بات‌های قدرتمند برای مشتریان خود بسازید و همه را از یک داشبورد مدیریت کنید.',
      color: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-900/30',
      hoverColor: 'hover:border-indigo-300 dark:hover:border-indigo-900/50 hover:shadow-indigo-500/10'
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 w-24 h-24 bg-brand-500/10 blur-3xl rounded-full"></div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
            مگالایو برای چه کسب‌وکارهایی است؟
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            فرقی نمی‌کند استارتاپ باشید یا یک سازمان بزرگ؛ راهکارهای ما منعطف و هماهنگ با نیازهای متنوع شماست.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {cases.map((useCase, index) => (
            <div 
                key={index} 
                className={`group bg-white dark:bg-slate-800 rounded-[2.5rem] p-8 border border-slate-200 dark:border-slate-700 shadow-sm text-center transform hover:-translate-y-3 transition-all duration-500 flex flex-col items-center ${useCase.hoverColor} hover:shadow-2xl`}
            >
              <div className={`w-20 h-20 rounded-3xl ${useCase.color} flex items-center justify-center mb-8 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                <useCase.icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {useCase.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                {useCase.description}
              </p>
              <div className="pt-4 mt-auto border-t border-slate-100 dark:border-slate-700 w-full">
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-brand-500 transition-colors cursor-pointer">
                      جزئیات بیشتر
                      <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                  </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Decorative Floating Quote/Info */}
        <div className="mt-20 flex justify-center">
            <div className="inline-flex items-center gap-4 bg-brand-600 text-white px-8 py-4 rounded-full shadow-xl shadow-brand-500/20 hover:scale-105 transition-transform cursor-default">
                <span className="text-sm font-bold">بیش از ۱۰,۰۰۰ چت‌بات در حال حاضر در مگالایو ساخته شده است</span>
                <div className="flex -space-x-3 space-x-reverse items-center">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-600 bg-slate-200 dark:bg-slate-700 overflow-hidden">
                            <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
