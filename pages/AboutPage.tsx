import React from 'react';
import { Building, Target, Users, Sparkles } from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    { name: 'علی مرادی', role: 'مدیرعامل و بنیان‌گذار', avatar: 'https://i.pravatar.cc/150?img=5' },
    { name: 'زهرا حسینی', role: 'مدیر فنی (CTO)', avatar: 'https://i.pravatar.cc/150?img=6' },
    { name: 'رضا قاسمی', role: 'طراح ارشد محصول', avatar: 'https://i.pravatar.cc/150?img=7' },
    { name: 'فاطمه اکبری', role: 'مدیر بازاریابی', avatar: 'https://i.pravatar.cc/150?img=8' },
  ];

  return (
    <div className="pt-20 bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6">
            درباره <span className="text-brand-500">مگا لایو</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            ما به قدرت مکالمه هوشمند برای ساختن تجربه‌های کاربری بهتر ایمان داریم و ماموریت ما، توانمندسازی کسب‌وکارها با ابزارهای هوش مصنوعی پیشرفته است.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">ماموریت ما</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    ماموریت ما ارائه راهکارهای هوش مصنوعی است که پیچیدگی را از بین برده و به شرکت‌ها اجازه می‌دهد تا ارتباطات معنادار و کارآمدی با مشتریان خود برقرار کنند.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 rounded-lg flex items-center justify-center">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">چشم‌انداز ما</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    ما در تلاشیم تا به پلتفرم پیشرو در زمینه دستیارهای هوشمند مکالمه‌ای در منطقه تبدیل شویم و آینده تعاملات دیجیتال را شکل دهیم.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://picsum.photos/seed/about/600/500" alt="Our team working" className="rounded-2xl shadow-xl w-full h-full object-cover"/>
               <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-500 rounded-full -z-10 opacity-30 blur-xl"></div>
               <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent-500 rounded-full -z-10 opacity-30 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">تیم ما</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              با تیمی از متخصصان خلاق و مشتاق آشنا شوید.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="relative w-40 h-40 mx-auto mb-4">
                    <img 
                        src={member.avatar} 
                        alt={member.name} 
                        className="w-full h-full rounded-full object-cover shadow-lg grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-brand-500 transition-colors duration-300 scale-105 group-hover:scale-110"></div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{member.name}</h3>
                <p className="text-brand-500 dark:text-brand-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;