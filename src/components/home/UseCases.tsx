import React from 'react';
import { HeartHandshake, LineChart, BookOpen, Briefcase } from 'lucide-react';

const UseCases: React.FC = () => {
  const cases = [
    {
      icon: HeartHandshake,
      title: 'پشتیبانی مشتریان',
      description: 'به ۷۰٪ سوالات متداول به صورت خودکار پاسخ دهید و رضایت مشتریان را افزایش دهید.',
      color: 'text-rose-500 bg-rose-50 dark:bg-rose-900/30'
    },
    {
      icon: LineChart,
      title: 'فروش و بازاریابی',
      description: 'بازدیدکنندگان وب‌سایت را به مشتریان بالقوه تبدیل کنید و سرنخ‌های بیشتری جذب نمایید.',
      color: 'text-green-500 bg-green-50 dark:bg-green-900/30'
    },
    {
      icon: BookOpen,
      title: 'آموزش و منابع انسانی',
      description: 'یک منبع دانش همیشه در دسترس برای کارمندان جدید یا دانشجویان خود فراهم کنید.',
      color: 'text-sky-500 bg-sky-50 dark:bg-sky-900/30'
    },
    {
      icon: Briefcase,
      title: 'آژانس‌ها و توسعه‌دهندگان',
      description: 'چت‌بات‌های قدرتمند برای مشتریان خود بسازید و همه را از یک داشبورد مدیریت کنید.',
      color: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-900/30'
    },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            برای چه کسب‌وکارهایی مناسب است؟
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            مگالایو به کسب‌وکارها در هر اندازه‌ای کمک می‌کند تا ارتباط بهتری با مخاطبان خود برقرار کنند.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cases.map((useCase, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700 shadow-sm text-center transform hover:scale-105 hover:shadow-xl transition-all duration-300">
              <div className={`w-16 h-16 rounded-full ${useCase.color} flex items-center justify-center mx-auto mb-6`}>
                <useCase.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {useCase.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;