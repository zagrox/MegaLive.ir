import React from 'react';
import Hero from '../components/home/Hero';
import HowItWorks from '../components/home/HowItWorks';
import FinalCTA from '../components/home/FinalCTA';
import SocialProof from '../components/home/SocialProof';
import UseCases from '../components/home/UseCases';
import Integrations from '../components/home/Integrations';
import { MessageSquare, ShieldCheck, Zap } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <SocialProof />
      <HowItWorks />
      
      {/* Mini Feature Highlight Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
                <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-3xl overflow-hidden relative shadow-2xl border border-slate-200 dark:border-slate-800">
                    {/* Placeholder for feature image */}
                    <img 
                        src="https://picsum.photos/800/800?grayscale" 
                        alt="Dashboard Preview" 
                        className="w-full h-full object-cover opacity-80 mix-blend-overlay" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                         <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur p-6 rounded-2xl shadow-xl max-w-xs text-center border border-slate-200 dark:border-slate-700">
                             <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Zap className="h-6 w-6" />
                             </div>
                             <h4 className="font-bold text-slate-900 dark:text-white mb-1">پاسخ‌دهی آنی</h4>
                             <p className="text-sm text-slate-500">میانگین زمان پاسخگویی زیر ۲ ثانیه</p>
                         </div>
                    </div>
                </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                هوش مصنوعی که برند شما را می‌فهمد
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-100 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">مکالمات طبیعی</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      بر خلاف چت‌بات‌های قدیمی، مگا لایو مفهوم جملات را درک می‌کند و پاسخ‌هایی شبیه به انسان می‌دهد، نه ربات.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-100 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">امنیت داده‌ها</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      اسناد شما در محیطی ایزوله و رمزنگاری شده پردازش می‌شوند. داده‌های شما هرگز برای آموزش مدل‌های عمومی استفاده نمی‌شود.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <UseCases />
      <Integrations />
      <FinalCTA />
    </>
  );
};

export default Home;
