import React from 'react';
import { Target, Sparkles, Brain, Server, Atom, GitBranch, FileCode, Database, Zap, Search, Terminal, Palette, Container, Bot } from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    { name: 'حمید چمانچی', role: 'مدیرعامل و بنیان‌گذار', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400' },
    { name: 'علی حسن‌پوری', role: 'مدیر فنی (CTO)', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400' },
    { name: 'رهام کالمرزی', role: 'مدیر پایگاه دانش', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400' },
    { name: 'سارا رامندی', role: 'مدیر بازاریابی', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400' },
  ];

  const technologies = [
    { name: 'Artificial Intelligence', icon: Brain, color: 'text-purple-500' },
    { name: 'LLM', icon: Bot, color: 'text-emerald-500' },
    { name: 'Node.js', icon: Server, color: 'text-green-600' },
    { name: 'React', icon: Atom, color: 'text-blue-500' },
    { name: 'Git', icon: GitBranch, color: 'text-orange-600' },
    { name: 'TypeScript', icon: FileCode, color: 'text-blue-600' },
    { name: 'PostgreSQL', icon: Database, color: 'text-indigo-500' },
    { name: 'Redis', icon: Zap, color: 'text-red-500' },
    { name: 'Qdrant', icon: Search, color: 'text-rose-500' },
    { name: 'Docker', icon: Container, color: 'text-blue-700' },
    { name: 'Linux', icon: Terminal, color: 'text-slate-600' },
    { name: 'Tailwind CSS', icon: Palette, color: 'text-cyan-500' },
  ];

  return (
    <div className="pt-20 bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6">
            درباره <span className="text-brand-500">مگالایو</span>
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
              <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80" alt="Artificial Intelligence Technology" className="rounded-2xl shadow-xl w-full h-full object-cover"/>
               <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-500 rounded-full -z-10 opacity-30 blur-xl"></div>
               <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent-500 rounded-full -z-10 opacity-30 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">تکنولوژی‌های ما</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              زیرساخت قدرتمند مگالایو با استفاده از مدرن‌ترین ابزارهای روز دنیا ساخته شده است.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {technologies.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center justify-center w-36 h-36 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-brand-300 dark:hover:border-brand-700 hover:-translate-y-1 transition-all duration-300 group">
                <div className={`p-3 rounded-xl bg-slate-50 dark:bg-slate-900 mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className={`h-8 w-8 ${tech.color}`} />
                </div>
                <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
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