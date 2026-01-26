
import React from 'react';
import FinalCTA from '../components/home/FinalCTA';
import { 
  FileText, Sliders, Puzzle, Globe, Database, Lock, 
  TrendingUp, Zap, BarChart3, 
  MessageCircle, Layout, Layers, CheckCircle2, 
  Share2, UploadCloud, Palette, Search,
  Bot, Building2, HardDrive, Cpu, Settings
} from 'lucide-react';

// FIX: Define RevealOnScrollProps and move component outside FeaturesPage to resolve TypeScript 'key' prop errors.
interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
      const observer = new IntersectionObserver(
          ([entry]) => {
              if (entry.isIntersecting) {
                  setIsVisible(true);
                  observer.disconnect();
              }
          },
          { threshold: 0.1 }
      );

      if (ref.current) {
          observer.observe(ref.current);
      }

      return () => observer.disconnect();
  }, []);

  return (
      <div 
          ref={ref} 
          className={`transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: `${delay}ms` }}
      >
          {children}
      </div>
  );
};

// FIX: Move static data outside the component to prevent re-creation on every render.
const detailedFeatures = [
  {
    title: 'پایگاه دانش قدرتمند',
    subtitle: 'هر فرمتی را به دانش تبدیل کنید',
    description: 'موتور هوش مصنوعی ما قادر است محتوا را از فایل‌های PDF، مستندات Word، فایل‌های متنی و حتی صفحات وب استخراج کند. تنها کافیست منابع خود را آپلود کنید؛ سیستم به صورت خودکار آن‌ها را پردازش، دسته‌بندی و برای پاسخگویی آماده می‌کند.',
    list: [
      'پشتیبانی از PDF, DOCX, TXT',
      'خزشگر وب (Web Crawler) برای ایندکس کردن سایت',
      'بروزرسانی خودکار با تغییر منابع',
      'پشتیبانی از چندین منبع همزمان'
    ],
    visual: (
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 p-6 w-full max-w-md mx-auto rotate-3 hover:rotate-0 transition-transform duration-500 cursor-default">
        <div className="flex items-center justify-between mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
          <h4 className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
            <Database className="h-4 w-4 text-brand-500" />
            منابع دانش
          </h4>
          <div className="flex gap-2">
              <button className="bg-slate-100 dark:bg-slate-800 p-1.5 rounded-md text-slate-500">
                  <Search className="h-3 w-3" />
              </button>
              <button className="bg-brand-50 text-brand-600 text-[10px] px-2 py-1 rounded-md font-bold flex items-center gap-1">
                  <UploadCloud className="h-3 w-3" />
                  افزودن
              </button>
          </div>
        </div>
        <div className="space-y-3">
          {[
            { name: 'Product_Manual_v2.pdf', type: 'PDF', size: '2.4 MB', status: 'ready' },
            { name: 'https://megalive.ir/pricing', type: 'WEB', size: '12 Pages', status: 'ready' },
            { name: 'Support_FAQ_Final.docx', type: 'DOC', size: '850 KB', status: 'processing' },
          ].map((file, i) => (
            <div key={i} className="flex items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700 hover:border-brand-200 dark:hover:border-brand-900 transition-colors">
              <div className="w-10 h-10 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 shadow-sm shrink-0">
                {file.type === 'WEB' ? <Globe className="h-5 w-5" /> : <FileText className="h-5 w-5" />}
              </div>
              <div className="mr-3 flex-1 min-w-0">
                <p className="text-sm font-bold text-slate-700 dark:text-slate-200 truncate">{file.name}</p>
                <p className="text-slate-400 mt-0.5 text-[10px]">{new Date().toLocaleDateString('fa-IR')}</p>
              </div>
              <div className="shrink-0">
                 {file.status === 'ready' ? (
                   <span className="flex items-center gap-1 text-[10px] font-bold bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2 py-1 rounded-full border border-green-200 dark:border-green-900">
                     <CheckCircle2 className="h-3 w-3" /> فعال
                   </span>
                 ) : (
                   <span className="flex items-center gap-1 text-[10px] font-bold bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 px-2 py-1 rounded-full border border-yellow-200 dark:border-yellow-900">
                     <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse"></span> پردازش
                   </span>
                 )}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    title: 'شخصی‌سازی ظاهری',
    subtitle: 'هماهنگ با برند شما',
    description: 'ظاهر چت‌بات را کاملاً تغییر دهید. رنگ‌ها را با پالت سازمانی خود ست کنید، لوگوی خود را آپلود کنید و نام و پیام خوش‌آمدگویی بات را تغییر دهید. همه چیز در یک پیش‌نمایش زنده قابل مشاهده است.',
    list: [
      'انتخاب رنگ اصلی و فرعی',
      'تغییر آیکون و آواتار بات',
      'تنظیم حالت تاریک/روشن',
      'مکان‌دهی ویجت (چپ/راست)'
    ],
    visual: (
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 p-6 w-full max-w-md mx-auto -rotate-3 hover:rotate-0 transition-transform duration-500 cursor-default">
          <div className="flex gap-6">
              {/* Controls */}
              <div className="flex-1 space-y-4">
                  <div>
                      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-1.5">رنگ برند</label>
                      <div className="flex gap-2">
                          <div className="w-6 h-6 rounded-full bg-blue-500 ring-2 ring-offset-2 ring-blue-500 dark:ring-offset-slate-900 cursor-pointer"></div>
                          <div className="w-6 h-6 rounded-full bg-purple-500 cursor-pointer opacity-40 hover:opacity-100"></div>
                          <div className="w-6 h-6 rounded-full bg-emerald-500 cursor-pointer opacity-40 hover:opacity-100"></div>
                          <div className="w-6 h-6 rounded-full bg-rose-500 cursor-pointer opacity-40 hover:opacity-100"></div>
                      </div>
                  </div>
                  <div>
                       <label className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-1.5">نام بات</label>
                       <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-2 text-xs text-slate-700 dark:text-slate-300">
                           دستیار مگالایو
                       </div>
                  </div>
                   <div>
                       <label className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-1.5">آیکون لانچر</label>
                       <div className="flex gap-2">
                           <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-brand-500 text-brand-500"><MessageCircle className="h-4 w-4" /></div>
                           <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400"><Bot className="h-4 w-4" /></div>
                           <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400"><Zap className="h-4 w-4" /></div>
                       </div>
                  </div>
              </div>
              {/* Preview */}
              <div className="w-32 bg-slate-100 dark:bg-slate-800 rounded-lg p-2 flex flex-col items-center justify-end relative overflow-hidden border border-slate-200 dark:border-slate-700">
                  <div className="absolute top-0 left-0 w-full h-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700"></div>
                  <div className="w-full space-y-2 mb-2">
                      <div className="w-3/4 h-8 bg-white dark:bg-slate-900 rounded-lg rounded-bl-none shadow-sm mr-auto"></div>
                      <div className="w-3/4 h-12 bg-blue-500 rounded-lg rounded-br-none shadow-sm ml-auto opacity-90"></div>
                  </div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg">
                      <MessageCircle className="h-4 w-4" />
                  </div>
              </div>
          </div>
      </div>
    )
  },
  {
      title: 'آمار و تحلیل',
      subtitle: 'بینش عمیق از رفتار کاربران',
      description: 'داشبورد تحلیلی کامل به شما نشان می‌دهد کاربران چه سوالاتی می‌پرسند، چت‌بات چه عملکردی داشته و کجا نیاز به بهبود دارد. مکالمات را مرور کنید و کیفیت پاسخ‌دهی را افزایش دهید.',
      list: [
        'نمودار تعداد مکالمات روزانه',
        'تحلیل احساسات (Sentiment Analysis)',
        'مشاهده تاریخچه کامل چت‌ها',
        'گزارش کلمات کلیدی پر تکرار'
      ],
      visual: (
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 p-6 w-full max-w-md mx-auto rotate-3 hover:rotate-0 transition-transform duration-500 cursor-default">
          <div className="flex items-center justify-between mb-6">
              <div>
                  <h4 className="font-bold text-slate-800 dark:text-white text-sm">عملکرد ۳۰ روز گذشته</h4>
                  <p className="text-[10px] text-slate-500">بروزرسانی: ۱ دقیقه پیش</p>
              </div>
              <BarChart3 className="h-5 w-5 text-slate-400" />
          </div>
          
          <div className="flex gap-2 items-end h-24 mb-6 px-2">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <div key={i} className="flex-1 bg-brand-100 dark:bg-brand-900/30 rounded-t-sm relative group">
                      <div 
                          style={{ height: `${h}%` }} 
                          className="absolute bottom-0 left-0 w-full bg-brand-500 rounded-t-sm transition-all duration-500 group-hover:bg-brand-400"
                      ></div>
                  </div>
              ))}
          </div>

          <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg border border-slate-100 dark:border-slate-700">
                  <p className="text-[10px] text-slate-500 mb-1">کل پیام‌ها</p>
                  <p className="text-xl font-bold text-slate-800 dark:text-white">۱,۲۴۵</p>
              </div>
               <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg border border-slate-100 dark:border-slate-700">
                  <p className="text-[10px] text-slate-500 mb-1">رضایت کاربران</p>
                  <p className="text-xl font-bold text-green-500">۹۸٪</p>
              </div>
          </div>
        </div>
      )
    },
];

const gridFeatures = [
  {
    icon: Sliders,
    title: 'تنظیمات پیشرفته هوش مصنوعی',
    description: 'مدل زبانی (GPT-4 یا GPT-3.5)، دمای پاسخگویی و دستورات سیستمی (System Prompt) را برای کنترل دقیق رفتار بات تنظیم کنید.'
  },
  {
    icon: Puzzle,
    title: 'API قدرتمند',
    description: 'با استفاده از REST API ما، قابلیت‌های چت‌بات را به اپلیکیشن موبایل یا نرم‌افزارهای داخلی شرکت خود اضافه کنید.'
  },
  {
    icon: Globe,
    title: 'پشتیبانی چندزبانه',
    description: 'به مشتریان بین‌المللی خود به زبان مادری‌شان پاسخ دهید. تشخیص و ترجمه خودکار برای بیش از ۹۰ زبان.'
  },
  {
    icon: Lock,
    title: 'امنیت و حریم خصوصی',
    description: 'داده‌های شما رمزنگاری شده و در سرورهای امن نگهداری می‌شوند. امکان حذف کامل داده‌ها در هر زمان وجود دارد.'
  },
  {
      icon: Layout,
      title: 'Embed قابل تنظیم',
      description: 'ویجت چت را به صورت پاپ‌آپ، تمام صفحه یا تعبیه شده در بدنه (Iframe) در سایت خود قرار دهید.'
    },
    {
      icon: Share2,
      title: 'اشتراک‌گذاری آسان',
      description: 'چت‌بات خود را با یک لینک عمومی کوتاه با دیگران به اشتراک بگذارید، حتی اگر وب‌سایت ندارید.'
    }
];

const botCards = [
  { name: 'زاگرس', sub: 'زاگرس', calls: '3', space: '1', vector: '1', files: '0', iconBg: 'bg-slate-700', icon: Bot },
  { name: 'سپهرچرم', sub: 'دستیار هوشمند سپهرچرم', calls: '24', space: '75', vector: '112', files: '4', iconBg: 'bg-emerald-500', icon: Zap },
  { name: 'پارت نوین', sub: 'دستیار هوشمند پارت نوین', calls: '15', space: '50', vector: '241', files: '4', iconBg: 'bg-orange-500', icon: Building2 },
  { name: 'مگامیل', sub: 'دستیار هوشمند مگامیل', calls: '30', space: '200', vector: '20', files: '1', iconBg: 'bg-blue-600', icon: Layout },
];

const FeaturesPage: React.FC = () => {
  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-slate-950 py-20 lg:py-28 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
             <div className="absolute -top-20 right-0 w-96 h-96 bg-brand-200 dark:bg-brand-900/40 rounded-full blur-3xl"></div>
             <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-200 dark:bg-accent-900/40 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-900/50 text-brand-600 dark:text-brand-400 text-xs font-bold mb-6">
            نسخه ۲.۰ منتشر شد
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            هر آنچه برای ساخت <br className="hidden md:block" />
            <span className="text-brand-600 dark:text-brand-400">چت‌بات حرفه‌ای</span> نیاز دارید
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            از تبدیل خودکار اسناد تا تحلیل رفتار کاربران؛ مگالایو مجموعه‌ای کامل از ابزارهایی است که پشتیبانی مشتریان شما را متحول می‌کند.
          </p>
        </div>
      </section>

      {/* Deep Dive Features */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {detailedFeatures.map((feature, idx) => (
            <RevealOnScroll key={idx}>
                <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Text Content */}
                <div className="flex-1 text-right">
                    <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-6">
                        {idx === 0 && <Database className="h-6 w-6" />}
                        {idx === 1 && <Palette className="h-6 w-6" />}
                        {idx === 2 && <TrendingUp className="h-6 w-6" />}
                    </div>
                    <h3 className="text-brand-500 dark:text-brand-400 font-semibold text-sm tracking-wide uppercase mb-2">
                    {feature.subtitle}
                    </h3>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    {feature.title}
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    {feature.description}
                    </p>
                    <ul className="space-y-3">
                    {feature.list.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-500 flex items-center justify-center">
                            <CheckCircle2 className="h-3 w-3" />
                        </div>
                        {item}
                        </li>
                    ))}
                    </ul>
                </div>
                
                {/* Visual Mockup */}
                <div className="flex-1 w-full flex justify-center perspective-1000">
                    {feature.visual}
                </div>
                </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Multi-Bot Management Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="flex-1">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-700 text-blue-300 text-xs font-bold mb-6">
                    <Building2 className="h-4 w-4" />
                    ویژه سازمان‌ها و آژانس‌ها
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                    مدیریت همزمان <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">چندین چت‌بات</span> در یک پنل
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                    آیا برای مشتریان مختلف یا دپارتمان‌های متفاوت نیاز به چت‌بات‌های جداگانه دارید؟ 
                    با پنل مدیریت پیشرفته مگالایو، می‌توانید بی‌نهایت چت‌بات را با تنظیمات، منابع دانش و ظاهر متفاوت به صورت متمرکز مدیریت کنید.
                </p>
                <div className="flex flex-col gap-4 text-slate-300">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400"><Layout className="h-4 w-4" /></div>
                        <span>داشبورد مرکزی برای نظارت بر همه بات‌ها</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400"><Settings className="h-4 w-4" /></div>
                        <span>تنظیمات اختصاصی برای هر پروژه</span>
                    </div>
                </div>
            </div>
            
            {/* Dashboard Visual Grid */}
            <div className="flex-1 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 perspective-1000">
                    {botCards.map((bot, i) => (
                        <RevealOnScroll key={i} delay={i * 100}>
                            <div className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-xl p-4 hover:border-slate-500 transition-colors group">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-lg ${bot.iconBg} flex items-center justify-center shadow-lg`}>
                                            <bot.icon className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-sm">{bot.name}</h4>
                                            <p className="text-[10px] text-slate-400">{bot.sub}</p>
                                        </div>
                                    </div>
                                    <div className="w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors cursor-pointer">
                                        <Settings className="h-4 w-4" />
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-2 mb-4">
                                    <div className="bg-slate-900/50 rounded-lg p-2 border border-slate-700/50">
                                        <div className="flex justify-between items-center text-[10px] text-slate-400 mb-1">
                                            <span>مکالمات</span>
                                            <MessageCircle className="h-3 w-3" />
                                        </div>
                                        <span className="text-lg font-bold text-white">{bot.calls}</span>
                                    </div>
                                    <div className="bg-slate-900/50 rounded-lg p-2 border border-slate-700/50">
                                        <div className="flex justify-between items-center text-[10px] text-slate-400 mb-1">
                                            <span>فضا (MB)</span>
                                            <HardDrive className="h-3 w-3" />
                                        </div>
                                        <span className="text-lg font-bold text-white">{bot.space}</span>
                                    </div>
                                    <div className="bg-slate-900/50 rounded-lg p-2 border border-slate-700/50">
                                        <div className="flex justify-between items-center text-[10px] text-slate-400 mb-1">
                                            <span>وکتور</span>
                                            <Cpu className="h-3 w-3" />
                                        </div>
                                        <span className="text-lg font-bold text-white">{bot.vector}</span>
                                    </div>
                                    <div className="bg-slate-900/50 rounded-lg p-2 border border-slate-700/50">
                                        <div className="flex justify-between items-center text-[10px] text-slate-400 mb-1">
                                            <span>فایل‌ها</span>
                                            <FileText className="h-3 w-3" />
                                        </div>
                                        <span className="text-lg font-bold text-white">{bot.files}</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-3 border-t border-slate-700">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-4 bg-green-500/20 rounded-full relative cursor-pointer">
                                            <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
                                        </div>
                                        <span className="text-[10px] text-green-400 font-bold">فعال</span>
                                    </div>
                                    <button className="text-xs bg-slate-700 hover:bg-slate-600 text-white px-3 py-1.5 rounded-lg transition-colors">
                                        مدیریت
                                    </button>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Banner */}
      <section className="py-16 bg-white dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">یکپارچه با ابزارهای محبوب شما</h2>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                  {/* Text-based logos for simplicity/speed without external images */}
                  <div className="flex items-center gap-2 text-xl font-bold text-slate-700 dark:text-slate-300">
                      <Layout className="h-8 w-8 text-blue-600" /> WordPress
                  </div>
                  <div className="flex items-center gap-2 text-xl font-bold text-slate-700 dark:text-slate-300">
                      <Zap className="h-8 w-8 text-orange-500" /> Zapier
                  </div>
                  <div className="flex items-center gap-2 text-xl font-bold text-slate-700 dark:text-slate-300">
                      <MessageCircle className="h-8 w-8 text-sky-500" /> Telegram
                  </div>
                  <div className="flex items-center gap-2 text-xl font-bold text-slate-700 dark:text-slate-300">
                      <Layers className="h-8 w-8 text-purple-500" /> Slack
                  </div>
              </div>
          </div>
      </section>

      {/* Grid Features */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">و بسیاری امکانات دیگر</h2>
                <p className="text-slate-600 dark:text-slate-400">جزئیاتی که تفاوت ایجاد می‌کنند</p>
            </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridFeatures.map((feature, idx) => (
                <RevealOnScroll key={idx} delay={idx * 50}>
                  <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-brand-500 dark:hover:border-brand-500 hover:shadow-lg transition-all group h-full">
                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mb-6 text-slate-600 dark:text-slate-300 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{feature.description}</p>
                  </div>
                </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
};

export default FeaturesPage;
