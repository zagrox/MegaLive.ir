import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const contactInfo = [
    { icon: Mail, title: 'ایمیل', value: 'support@megalive.ir', href: 'mailto:support@megalive.ir' },
    { icon: Phone, title: 'تلفن', value: '۰۲۱-۱۲۳۴۵۶۷۸', href: 'tel:+982112345678' },
    { icon: MapPin, title: 'آدرس', value: 'تهران، پارک علم و فناوری پردیس', href: '#' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here.
    alert('پیام شما ارسال شد! (این یک دموی نمایشی است)');
  };

  return (
    <div className="pt-20 bg-white dark:bg-slate-950">
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
              تماس با ما
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              سوال یا پیشنهادی دارید؟ ما همیشه آماده پاسخگویی هستیم.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800">
            {/* Contact Form */}
            <div className="text-right">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">ارسال پیام</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">نام شما</label>
                  <input type="text" id="name" required className="form-input w-full bg-white dark:bg-slate-800 rounded-lg p-3 border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">ایمیل</label>
                  <input type="email" id="email" required className="form-input w-full bg-white dark:bg-slate-800 rounded-lg p-3 border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">پیام شما</label>
                  <textarea id="message" rows={5} required className="form-textarea w-full bg-white dark:bg-slate-800 rounded-lg p-3 border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition"></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-lg font-bold shadow-lg shadow-brand-500/30 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  ارسال
                  <Send className="h-5 w-5 rtl:-scale-x-100" />
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
               <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-right">راه‌های ارتباطی</h2>
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start gap-4 text-right">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded-lg flex items-center justify-center">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 dark:text-white">{item.title}</h3>
                    <a href={item.href} className="text-slate-600 dark:text-slate-300 hover:text-brand-500 transition-colors break-words">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;