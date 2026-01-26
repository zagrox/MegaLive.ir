
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { name: 'مگالایو', path: '/' },
    { name: 'ویژگی‌ها', path: '/features' },
    { name: 'تعرفه‌ها', path: '/pricing' },
    { name: 'وبلاگ', path: '/blog' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
            <img 
              src="https://crm.megalive.ir/assets/591ec94d-48d1-4748-85bd-c24953d501c0" 
              alt="مگالایو" 
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
          
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 space-x-reverse">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20'
                      : 'text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Buttons & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
              aria-label="تغییر تم"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
            <a href="https://app.megalive.ir" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-brand-600 font-medium px-3 py-2 transition-colors">
              ورود
            </a>
            <a href="https://app.megalive.ir/?register" target="_blank" rel="noopener noreferrer" className="bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-lg font-medium shadow-lg shadow-brand-500/30 transition-all hover:-translate-y-0.5">
              ساخت رایگان
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-800 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 focus:outline-none"
            >
              <span className="sr-only">باز کردن منو</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(link.path)
                    ? 'text-brand-600 bg-brand-50 dark:text-brand-400 dark:bg-brand-900/20'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center justify-between px-3 py-4 border-t border-slate-100 dark:border-slate-800 mt-4">
              <span className="text-slate-600 dark:text-slate-400">تغییر وضعیت نمایش</span>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              >
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3 px-3 pb-4">
               <a href="https://app.megalive.ir" target="_blank" rel="noopener noreferrer" className="w-full text-center py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                  ورود
               </a>
               <a href="https://app.megalive.ir/?register" target="_blank" rel="noopener noreferrer" className="w-full text-center py-2.5 rounded-lg bg-brand-500 text-white font-medium">
                  ثبت نام
               </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
