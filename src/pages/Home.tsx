
import React from 'react';
import Hero from '../components/home/Hero';
import HowItWorks from '../components/home/HowItWorks';
import FinalCTA from '../components/home/FinalCTA';
import SocialProof from '../components/home/SocialProof';
import UseCases from '../components/home/UseCases';
import Integrations from '../components/home/Integrations';
import { MessageSquare, ShieldCheck, Zap, BarChart, Check, Users, Activity, ExternalLink, MousePointer2, Sparkles, Brain, Database, Cpu } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <SocialProof />
      <HowItWorks />
      
      {/* Enhanced Feature Highlight Section */}
      <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Feature Text Content */}
            <div className="order-1 md:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-xs font-black mb-6 border border-brand-100 dark:border-brand-800">
                <ShieldCheck size={14} />
                تکنولوژی لبه دنیای هوش مصنوعی
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-8 leading-tight">
                هوش مصنوعی که <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500">برند شما</span> را می‌فهمد
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 shadow-lg border border-slate-100 dark:border-slate-800 text-brand-600 dark:text-brand-400 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <MessageSquare className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">درک عمیق مفاهیم</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                      چت‌بات مگالایو با تحلیل دقیق اسناد شما، نه تنها کلمات بلکه نیت کاربر را درک کرده و پاسخ‌های کاملاً انسانی و مرتبط ارائه می‌دهد.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 shadow-lg border border-slate-100 dark:border-slate-800 text-brand-600 dark:text-brand-400 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <Zap className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">یکپارچگی بی‌نظیر</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                      از واتس‌اپ و تلگرام گرفته تا ویجت سایت و وردپرس؛ مگالایو در هر جایی که مشتریان شما هستند، به بهترین شکل حضور دارد.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* NEW: More Attractive Visual Visual Callout */}
            <div className="order-2 md:order-2 relative">
                {/* Background Glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-brand-500/10 dark:bg-brand-500/5 blur-[120px] rounded-full pointer-events-none"></div>
                
                {/* Stacked Interactive Visualization */}
                <div className="relative h-[450px] w-full max-w-[500px] mx-auto">
                    
                    {/* Layer 1: Knowledge Base (Back) */}
                    <div className="absolute top-0 right-0 w-[80%] bg-white dark:bg-slate-900 rounded-[2rem] p-6 shadow-xl border border-slate-100 dark:border-slate-800 transform -rotate-6 transition-transform hover:rotate-0 duration-700 z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center text-accent-600">
                                <Database size={16} />
                            </div>
                            <div className="h-3 w-24 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
                        </div>
                        <div className="space-y-2">
                            <div className="h-2 w-full bg-slate-50 dark:bg-slate-800 rounded-full"></div>
                            <div className="h-2 w-[85%] bg-slate-50 dark:bg-slate-800 rounded-full"></div>
                            <div className="h-2 w-[90%] bg-slate-50 dark:bg-slate-800 rounded-full"></div>
                        </div>
                    </div>

                    {/* Layer 2: AI Neural Network Node (Middle) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-600 rounded-[2.5rem] shadow-[0_0_50px_rgba(37,99,235,0.4)] flex flex-col items-center justify-center text-white z-30 group animate-pulse" style={{ animationDuration: '3s' }}>
                        <Brain size={48} className="mb-2" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">MegaLive Engine</span>
                        
                        {/* Orbiting Particles */}
                        <div className="absolute inset-0 border-2 border-white/10 rounded-full animate-spin-slow pointer-events-none"></div>
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent-500 rounded-full shadow-[0_0_15px_rgba(20,184,166,0.8)]"></div>
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white rounded-full shadow-lg"></div>
                    </div>

                    {/* Layer 3: Response Interface (Front) */}
                    <div className="absolute bottom-0 left-0 w-[85%] bg-slate-900 rounded-[2rem] p-6 shadow-2xl border border-slate-800 transform rotate-3 transition-transform hover:rotate-0 duration-700 z-40">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center text-white">
                                <MessageSquare size={18} />
                            </div>
                            <div>
                                <div className="h-3 w-20 bg-slate-700 rounded-full mb-1"></div>
                                <div className="h-2 w-12 bg-slate-800 rounded-full"></div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <div className="h-8 flex-1 bg-brand-500/20 rounded-2xl rounded-tr-none border border-brand-500/30 flex items-center px-4">
                                    <div className="h-2 w-32 bg-brand-400/40 rounded-full"></div>
                                </div>
                                <Cpu size={14} className="text-brand-400 animate-pulse" />
                            </div>
                            <div className="flex flex-col gap-2 pt-2 border-t border-slate-800">
                                <div className="flex justify-between items-center text-[10px] font-bold">
                                    <span className="text-slate-500">دقت پاسخ</span>
                                    <span className="text-green-500">۹۹.۸٪</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-green-500 w-[99.8%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Small Floating Insight Badges */}
                    <div className="absolute top-1/4 left-10 bg-white dark:bg-slate-800 px-4 py-2 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 z-50 animate-bounce" style={{ animationDuration: '5s' }}>
                        <div className="flex items-center gap-2">
                            <Zap size={14} className="text-yellow-500" />
                            <span className="text-[10px] font-bold text-slate-800 dark:text-white">راه‌اندازی فوری</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <UseCases />

      {/* Full Dashboard Showcase Section - Placed before Integration */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-40">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-400/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-400/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-900/50 text-brand-700 dark:text-brand-300 text-xs font-bold mb-4">
               <Sparkles size={14} className="animate-spin-slow" />
               نمای کلی پلتفرم
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
               یک پنل برای <span className="text-brand-600">تمام نیازهای</span> شما
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
               مدیریت هوشمند چت‌بات‌ها، تحلیل مکالمات و اتصال به ابزارهای مختلف را در یک داشبورد مدرن و زیبا تجربه کنید.
            </p>
          </div>

          {/* Large App Screenshot Container */}
          <div className="relative group max-w-6xl mx-auto">
             {/* Glowing border effect */}
             <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-accent-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
             
             <div className="relative bg-white dark:bg-slate-950 rounded-[2.2rem] p-3 shadow-2xl border border-white/20 overflow-hidden transform transition-all duration-700 hover:scale-[1.01]">
                {/* Custom Browser Window Decor */}
                <div className="bg-slate-100 dark:bg-slate-900 px-6 py-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 mb-0.5">
                    <div className="flex gap-2">
                        <div className="w-3.5 h-3.5 rounded-full bg-red-400 shadow-inner"></div>
                        <div className="w-3.5 h-3.5 rounded-full bg-yellow-400 shadow-inner"></div>
                        <div className="w-3.5 h-3.5 rounded-full bg-green-400 shadow-inner"></div>
                    </div>
                    <div className="hidden md:flex items-center gap-3 bg-white dark:bg-slate-800 px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                        <ExternalLink size={12} className="text-slate-400" />
                        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">https://app.megalive.ir/dashboard</span>
                    </div>
                    <div className="w-12"></div>
                </div>

                {/* THE ACTUAL SCREENSHOT */}
                <div className="relative overflow-hidden rounded-b-[1.8rem]">
                    <img 
                        src="https://crm.megalive.ir/assets/86f5e7b4-2946-4333-91a7-6b31f3bcde3a" 
                        alt="داشبورد پیشرفته مگالایو" 
                        className="w-full h-auto object-cover"
                    />
                    
                    {/* Interactive Hotspots / Floating Elements */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700 pointer-events-none"></div>
                    
                    {/* Tooltip Example 1 */}
                    <div className="absolute top-[20%] right-[10%] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 hidden md:block">
                         <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-3 rounded-xl shadow-xl border border-white/20 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white">
                                <Activity size={16} />
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] font-bold text-slate-500">وضعیت سیستم</p>
                                <p className="text-xs font-black text-slate-900 dark:text-white">۱۰۰٪ آنلاین</p>
                            </div>
                         </div>
                    </div>

                    {/* Cursor Decoration */}
                    <div className="absolute top-1/2 left-[30%] opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden lg:block">
                        <div className="relative">
                            <MousePointer2 className="text-brand-500 drop-shadow-lg" size={32} fill="currentColor" />
                            <div className="absolute top-8 left-8 bg-brand-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap">
                                مدیریت آسان ربات‌ها
                            </div>
                        </div>
                    </div>
                </div>
             </div>

             {/* Bottom Badges */}
             <div className="mt-12 flex flex-wrap justify-center gap-12">
                <div className="text-center">
                    <p className="text-3xl font-black text-slate-900 dark:text-white mb-1">۹۸٪</p>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">رضایت کاربران</p>
                </div>
                <div className="w-px h-12 bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>
                <div className="text-center">
                    <p className="text-3xl font-black text-slate-900 dark:text-white mb-1">۵ دقیقه</p>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">میانگین زمان راه‌اندازی</p>
                </div>
                <div className="w-px h-12 bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>
                <div className="text-center">
                    <p className="text-3xl font-black text-slate-900 dark:text-white mb-1">۲۴/۷</p>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">پشتیبانی هوشمند</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      <Integrations />
      <FinalCTA />
    </>
  );
};

export default Home;
