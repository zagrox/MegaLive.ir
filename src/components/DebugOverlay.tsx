import React, { useState, useEffect } from 'react';
import { Bug, X, Monitor, Moon, Sun, Globe, Activity } from 'lucide-react';

const DebugOverlay: React.FC = () => {
  const [isDebug, setIsDebug] = useState(false);

  useEffect(() => {
    if (isDebug) {
      document.body.classList.add('debug-outlines');
    } else {
      document.body.classList.remove('debug-outlines');
    }
  }, [isDebug]);

  return (
    <div className="fixed bottom-4 left-4 z-[9999] flex flex-col gap-2 items-start font-sans" dir="ltr">
      <style>{`
        .debug-outlines * {
          outline: 1px solid rgba(255, 0, 0, 0.25) !important;
        }
        .debug-outlines *:hover {
          outline: 2px solid rgba(37, 99, 235, 0.8) !important;
          background-color: rgba(37, 99, 235, 0.05) !important;
        }
      `}</style>
      
      <button
        onClick={() => setIsDebug(!isDebug)}
        className={`p-3 rounded-full shadow-lg transition-all border border-slate-200 dark:border-slate-700 ${
          isDebug 
            ? 'bg-brand-500 text-white rotate-0' 
            : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700'
        }`}
        title="ابزار دیباگ (Debug Tool)"
      >
        {isDebug ? <X size={20} /> : <Bug size={20} />}
      </button>
      
      {isDebug && (
        <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-800 dark:text-slate-200 p-4 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 min-w-[200px] animate-in slide-in-from-bottom-5 fade-in duration-200">
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200 dark:border-slate-800">
            <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></div>
            <span className="font-bold text-xs">اطلاعات فنی (Debug Info)</span>
          </div>
          
          <div className="space-y-3 text-xs">
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-500">
                    <Monitor size={14} />
                    <span>سایز صفحه</span>
                </div>
                <span className="font-mono font-bold bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                    <span className="sm:hidden">Mobile (&lt;640px)</span>
                    <span className="hidden sm:block md:hidden">SM (Small)</span>
                    <span className="hidden md:block lg:hidden">MD (Medium)</span>
                    <span className="hidden lg:block xl:hidden">LG (Large)</span>
                    <span className="hidden xl:block">XL (Extra Large)</span>
                </span>
             </div>

             <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-500">
                    <Sun size={14} className="dark:hidden" />
                    <Moon size={14} className="hidden dark:block" />
                    <span>تم</span>
                </div>
                 <span className="font-mono font-bold bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                    <span className="dark:hidden">Light</span>
                    <span className="hidden dark:block text-brand-400">Dark</span>
                </span>
             </div>
             
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-500">
                    <Globe size={14} />
                    <span>جهت</span>
                </div>
                 <span className="font-mono font-bold bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                    <span className="rtl:hidden">LTR</span>
                    <span className="hidden rtl:block text-green-500">RTL</span>
                </span>
             </div>

             <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 text-slate-500">
                    <Activity size={14} />
                    <span>خطوط راهنما</span>
                </div>
                 <span className="font-bold text-brand-600 bg-brand-50 dark:bg-brand-900/30 dark:text-brand-400 px-1.5 py-0.5 rounded text-[10px]">
                    فعال
                </span>
             </div>
          </div>
          
          <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 text-[10px] text-slate-400 text-center">
            MegaLive Debugger v1.1
          </div>
        </div>
      )}
    </div>
  );
};

export default DebugOverlay;