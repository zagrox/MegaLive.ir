import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FinalCTA from '../components/home/FinalCTA';
import { Check, HelpCircle, ChevronDown, ChevronUp, Globe, Rocket, ShieldCheck } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'رایگان',
      price: '۰',
      period: 'همیشگی',
      desc: 'برای پروژه‌های شخصی و تست',
      features: ['۱ چت‌بات', '۵۰ پیام در ماه', 'آپلود ۱ فایل PDF', 'پشتیبانی کامیونیتی'],
      cta: 'شروع رایگان',
      highlight: false,
      link: 'https://app.megalive.ir/?register',
      isExternal: true,
    },
    {
      name: 'حرفه‌ای',
      price: billingCycle === 'monthly' ? '۴۹۹,۰۰۰' : '۳۹۹,۰۰۰',
      period: 'ماهانه',
      desc: 'برای کسب‌وکارهای کوچک و استارتاپ‌ها',
      features: ['۳ چت‌بات', '۲,۰۰۰ پیام در ماه', 'آپلود ۲۰ فایل', 'حذف واترمارک', 'پشتیبانی ایمیلی'],
      cta: 'خرید اشتراک',
      highlight: true,
      link: 'https://app.megalive.ir/?register',
      isExternal: true,
    },
    {
      name: 'سازمانی',
      price: billingCycle === 'monthly' ? '۱,۹۹۰,۰۰۰' : '۱,۵۹۰,۰۰۰',
      period: 'ماهانه',
      desc: 'برای شرکت‌های بزرگ با نیازهای بالا',
      features: ['۱۰ چت‌بات', 'پیام نامحدود', 'آپلود نامحدود', 'API اختصاصی', 'پشتیبانی اولویت‌دار', 'آموزش مدل اختصاصی'],
      cta: 'تماس با فروش',
      highlight: false,
      link: '/contact',
      isExternal: false,
    }
  ];

  const faqs = [
    { q: 'آیا می‌توانم بعداً پلن خود را تغییر دهم؟', a: 'بله، شما می‌توانید در هر زمان پلن خود را ارتقا دهید یا به پلن پایین‌تر تغییر دهید. تغییرات بلافاصله اعمال می‌شوند.' },
    { q: 'پیام‌ها چگونه شمرده می‌شوند؟', a: 'هر بار که کاربر پیامی ارسال می‌کند و چت‌بات پاسخ می‌دهد، یک پیام محسوب می‌شود. پیام‌های خوش‌آمدگویی شمارش نمی‌شوند.' },
    { q: 'آیا از زبان فارسی پشتیبانی می‌کنید؟', a: 'بله، موتور هوش مصنوعی ما به طور کامل برای زبان فارسی بهینه شده است و متون راست‌چین را به درستی نمایش می‌دهد.' },
    { q: 'چگونه می‌توانم چت‌بات را در سایتم نصب کنم؟', a: 'ما یک کد جاوااسکریپت کوتاه (مانند Google Analytics) به شما می‌دهیم که باید در هدر یا فوتر سایت خود قرار دهید.' },
  ];

  const CtaButton = ({ plan }: { plan: typeof plans[0] }) => {
    const className = `w-full py-3 px-4 rounded-xl font-bold mb-8 transition-colors ${plan.highlight ? 'bg-brand-600 text-white hover:bg-brand-700' : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'}`;
    
    if (plan.isExternal) {
      return (
        <a href={plan.link} target="_blank" rel="noopener noreferrer" className={className}>
          {plan.cta}
        </a>
      );
    }
    
    return (
      <Link to={plan.link} className={className}>
        {plan.cta}
      </Link>
    );
  };

  return (
    <div className="pt-20">
       <section className="py-20 bg-slate-50 dark:bg-slate-900">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto mb-12">
             <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">تعرفه‌های ساده و شفاف</h1>
             <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
               بهترین پلن را متناسب با نیاز کسب‌وکار خود انتخاب کنید.
             </p>
             
             {/* Billing Toggle */}
             <div className="flex items-center justify-center gap-4">
               <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>ماهانه</span>
               <button 
                 onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly')}
                 className="w-14 h-8 bg-brand-500 rounded-full p-1 transition-colors relative focus:outline-none"
               >
                 <div className={`w-6 h-6 bg-white rounded-full shadow-sm transition-transform duration-300 ${billingCycle === 'yearly' ? '-translate-x-6' : 'translate-x-0'}`}></div>
               </button>
               <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>
                 سالانه <span className="text-green-500 text-xs mr-1">(۲۰٪ تخفیف)</span>
               </span>
             </div>
           </div>

           {/* Pricing Cards */}
           <div className="grid md:grid-cols-3 gap-8">
             {plans.map((plan, idx) => (
               <div key={idx} className={`relative rounded-2xl p-8 border ${plan.highlight ? 'border-brand-500 shadow-2xl shadow-brand-500/10 bg-white dark:bg-slate-800 scale-105 z-10' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950'}`}>
                 {plan.highlight && (
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-600 to-accent-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide">
                     پیشنهاد ویژه
                   </div>
                 )}
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                 <p className="text-slate-500 text-sm mb-6">{plan.desc}</p>
                 <div className="mb-6">
                   <span className="text-4xl font-extrabold text-slate-900 dark:text-white">{plan.price}</span>
                   <span className="text-slate-500 text-sm mr-2">تومان / {plan.period}</span>
                 </div>
                 <CtaButton plan={plan} />
                 <ul className="space-y-4">
                   {plan.features.map((feat, i) => (
                     <li key={i} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                       <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                       {feat}
                     </li>
                   ))}
                 </ul>
               </div>
             ))}
           </div>
         </div>
       </section>

       {/* Why MegaLive Section */}
       <section className="py-20 bg-white dark:bg-slate-950">
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">چرا مگا لایو؟</h2>
             <p className="text-slate-600 dark:text-slate-400">
                دلایلی که ما را به بهترین انتخاب برای کسب‌وکار شما تبدیل می‌کند.
             </p>
           </div>
           <div className="grid md:grid-cols-3 gap-8 text-right">
             <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">پشتیبانی تخصصی از فارسی</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    برخلاف مدل‌های عمومی، هوش مصنوعی ما برای درک تفاوت‌های ظریف و فرهنگی زبان فارسی بهینه‌سازی شده است.
                </p>
             </div>
             <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                    <Rocket className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">راه‌اندازی در چند دقیقه</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    بدون نیاز به دانش فنی. تنها با کپی کردن یک خط کد، چت‌بات را به سایت خود اضافه کنید و از داشبورد مدیریتی ساده لذت ببرید.
                </p>
             </div>
             <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
                    <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">امنیت داده در اولویت</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    داده‌های شما رمزنگاری شده، در محیطی ایزوله پردازش می‌شوند و هرگز برای آموزش مدل‌های عمومی استفاده نخواهند شد.
                </p>
             </div>
           </div>
         </div>
       </section>

       {/* FAQ Section */}
       <section className="py-20 bg-white dark:bg-slate-950">
         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">سوالات متداول</h2>
             <p className="text-slate-600 dark:text-slate-400">پاسخ به سوالاتی که شاید برای شما هم پیش بیاید</p>
           </div>
           <div className="space-y-4">
             {faqs.map((faq, idx) => (
               <FAQItem key={idx} question={faq.q} answer={faq.a} />
             ))}
           </div>
         </div>
       </section>
       
       <FinalCTA />
    </div>
  );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 sm:p-6 bg-slate-50 dark:bg-slate-900 text-right hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
      >
        <span className="font-bold text-slate-800 dark:text-white flex items-center gap-3">
          <HelpCircle className="h-5 w-5 text-brand-500" />
          {question}
        </span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-slate-400" /> : <ChevronDown className="h-5 w-5 text-slate-400" />}
      </button>
      {isOpen && (
        <div className="p-4 sm:p-6 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-800">
          {answer}
        </div>
      )}
    </div>
  );
};

export default PricingPage;