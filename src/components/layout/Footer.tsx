
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://crm.megalive.ir/assets/591ec94d-48d1-4748-85bd-c24953d501c0" 
                alt="مگالایو" 
                className="h-8 w-auto object-contain"
              />
              <span className="font-bold text-xl text-slate-800 dark:text-white">
                مگالایو
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
              تبدیل اسناد و دانش سازمانی به دستیار هوشمند در کمتر از چند دقیقه. 
              پشتیبانی ۲۴ ساعته بدون نیاز به اپراتور انسانی.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-slate-400 hover:text-brand-500 transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-brand-500 transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-brand-500 transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-brand-500 transition-colors"><Github className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">محصول</h3>
            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li><Link to="/features" className="hover:text-brand-500 transition-colors">ویژگی‌ها</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-500 transition-colors">تعرفه‌ها</Link></li>
              <li><Link to="/" className="hover:text-brand-500 transition-colors">دموی زنده</Link></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">مستندات API</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">شرکت</h3>
            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li><Link to="/about" className="hover:text-brand-500 transition-colors">درباره ما</Link></li>
              <li><Link to="/blog" className="hover:text-brand-500 transition-colors">وبلاگ</Link></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">فرصت‌های شغلی</a></li>
              <li><Link to="/contact" className="hover:text-brand-500 transition-colors">تماس با ما</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">قوانین</h3>
            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li><Link to="/privacy" className="hover:text-brand-500 transition-colors">حریم خصوصی</Link></li>
              <li><Link to="/terms" className="hover:text-brand-500 transition-colors">شرایط استفاده</Link></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">امنیت داده‌ها</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 dark:border-slate-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © مگالایو. تمامی حقوق محفوظ است.
          </p>
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm text-slate-500 dark:text-slate-400">سیستم‌ها پایدار هستند</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
