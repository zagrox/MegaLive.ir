import React from 'react';
import { Star } from 'lucide-react';

const SocialProof: React.FC = () => {
  const testimonials = [
    {
      quote: 'این چت‌بات نرخ تبدیل ما را ۲۵٪ افزایش داد. مشتریان عاشق پاسخ‌های فوری هستند!',
      name: 'سارا رضایی',
      title: 'مدیر بازاریابی در زاگرس',
      avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&h=200',
    },
    {
      quote: 'راه‌اندازی کمتر از ۱۰ دقیقه طول کشید. حالا تیم ما می‌تواند روی مشکلات پیچیده‌تر تمرکز کند.',
      name: 'علی احمدی',
      title: 'مدیر محصول در برندیار',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200',
    },
    {
      quote: 'بهترین ابزار برای ساخت پایگاه دانش هوشمند. پشتیبانی از زبان فارسی آن بی‌نظیر است.',
      name: 'حمید فرجام',
      title: 'بنیان‌گذار استارتاپ پارسی اپ',
      avatar: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=200&h=200',
    },
  ];

  const logos = ['برندیار', 'سپهرچرم', 'پارت نوین', 'مازیاران', 'زاگرس'];

  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-sm font-bold text-slate-500 dark:text-slate-400 tracking-widest uppercase">
            مورد اعتماد بهترین‌ها
          </h2>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
            {logos.map((logo, i) => (
              <span key={i} className="text-2xl font-bold text-slate-400 dark:text-slate-500 opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                {logo}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="flex mb-4">
                {[...Array(5)].map((_, starIndex) => (
                  <Star key={starIndex} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;