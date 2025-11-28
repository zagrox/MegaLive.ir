import React from 'react';
import { UploadCloud, Palette, Rocket } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: UploadCloud,
      title: '۱. منابع خود را آپلود کنید',
      description: 'فایل‌های PDF، اسناد Word یا آدرس وب‌سایت خود را وارد کنید. هوش مصنوعی ما فوراً محتوای شما را یاد می‌گیرد.',
      color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
    },
    {
      icon: Palette,
      title: '۲. ظاهر را شخصی‌سازی کنید',
      description: 'رنگ، لوگو و لحن صحبت چت‌بات را متناسب با برند خود تنظیم کنید. پیش‌نمایش تغییرات را لحظه‌ای ببینید.',
      color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
    },
    {
      icon: Rocket,
      title: '۳. در سایت قرار دهید',
      description: 'یک قطعه کد ساده دریافت کنید و آن را در سایت خود کپی کنید. چت‌بات شما بلافاصله فعال می‌شود.',
      color: 'bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400',
    },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            چگونه کار می‌کند؟
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            فقط سه قدم ساده تا داشتن یک دستیار هوشمند فاصله دارید. بدون نیاز به دانش فنی و کدنویسی.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 h-full relative z-10">
                <div className={`w-14 h-14 rounded-xl ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connector Lines for Desktop (Visual only) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-0 w-full -translate-x-1/2 z-0">
                  <div className="border-t-2 border-dashed border-slate-200 dark:border-slate-700 w-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;