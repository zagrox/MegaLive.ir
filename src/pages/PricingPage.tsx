import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FinalCTA from '../components/home/FinalCTA';
import { Check, HelpCircle, ChevronDown, ChevronUp, Globe, Rocket, ShieldCheck } from 'lucide-react';

interface ApiPlan {
  plan_name: string;
  plan_messages: string;
  plan_llm: number;
  plan_storage: string;
  plan_monthly: number;
  plan_yearly: number;
  plan_bots: number;
}

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  link: string;
  isExternal: boolean;
  originalName: string; // for key
  highlight?: boolean;
}

const API_URL = 'https://crm.megalive.ir/items/plans';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch plans');
        
        const result = await response.json();
        // Handle the specific structure: { data: { id: 1, plans: [...] } }
        // We look for result.data.plans based on your provided JSON
        const apiPlans: ApiPlan[] = result.data?.plans || [];

        const mappedPlans: PricingPlan[] = apiPlans.map((p) => {
          // Helper to format numbers to Persian with commas
          const formatPrice = (price: number) => {
            if (price === 0) return '۰';
            return price.toLocaleString('fa-IR');
          };

          // Map logic based on plan_name
          let name = p.plan_name;
          let desc = '';
          let cta = 'خرید اشتراک';
          let highlight = false;
          let link = 'https://app.megalive.ir/?register';
          let isExternal = true;
          let features: string[] = [];

          // Translations & Customizations
          switch (p.plan_name.toLowerCase()) {
            case 'free':
              name = 'رایگان';
              desc = 'برای پروژه‌های شخصی و تست';
              cta = 'شروع رایگان';
              highlight = false;
              break;
            case 'starter':
              name = 'پایه';
              desc = 'برای کسب‌وکارهای کوچک';
              cta = 'خرید اشتراک';
              highlight = false;
              break;
            case 'business':
              name = 'تجاری';
              desc = 'برای شرکت‌های در حال رشد';
              cta = 'خرید اشتراک';
              highlight = true; // Highlight Business plan
              break;
            case 'enterprise':
              name = 'سازمانی';
              desc = 'برای سازمان‌های بزرگ';
              cta = 'تماس با فروش';
              link = '/contact';
              isExternal = false;
              highlight = false;
              break;
            default:
              name = p.plan_name;
          }

          // Build Features List
          features.push(`${p.plan_bots} چت‌بات فعال`);
          features.push(`${parseInt(p.plan_messages).toLocaleString('fa-IR')} پیام در ماه`);
          // Assuming storage is in Characters or Tokens roughly, purely display logic:
          features.push(`${parseInt(p.plan_storage).toLocaleString('fa-IR')} کاراکتر حافظه`);
          
          if (p.plan_name.toLowerCase() !== 'free') {
            features.push('حذف واترمارک مگالایو');
            features.push('پشتیبانی اولویت‌دار');
          } else {
             features.push('پشتیبانی کامیونیتی');
          }
          
          if (p.plan_name.toLowerCase() === 'enterprise') {
              features.push('API اختصاصی');
              features.push('آموزش مدل اختصاصی');
          }

          return {
            name,
            price: billingCycle === 'monthly' ? formatPrice(p.plan_monthly) : formatPrice(p.plan_yearly),
            period: billingCycle === 'monthly' ? 'ماهانه' : 'سالانه',
            description: desc,
            features,
            cta,
            highlight,
            link,
            isExternal,
            originalName: p.plan_name
          };
        });

        setPlans(mappedPlans);
      } catch (err) {
        console.error(err);
        setError('خطا در دریافت اطلاعات تعرفه‌ها');
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, [billingCycle]); // Re-run formatting when billing cycle changes

  const faqs = [
    { q: 'آیا می‌توانم بعداً پلن خود را تغییر دهم؟', a: 'بله، شما می‌توانید در هر زمان پلن خود را ارتقا دهید یا به پلن پایین‌تر تغییر دهید. تغییرات بلافاصله اعمال می‌شوند.' },
    { q: 'پیام‌ها چگونه شمرده می‌شوند؟', a: 'هر بار که کاربر پیامی ارسال می‌کند و چت‌بات پاسخ می‌دهد، یک پیام محسوب می‌شود. پیام‌های خوش‌آمدگویی شمارش نمی‌شوند.' },
    { q: 'آیا از زبان فارسی پشتیبانی می‌کنید؟', a: 'بله، موتور هوش مصنوعی ما به طور کامل برای زبان فارسی بهینه شده است و متون راست‌چین را به درستی نمایش می‌دهد.' },
    { q: 'چگونه می‌توانم چت‌بات را در سایتم نصب کنم؟', a: 'ما یک کد جاوااسکریپت کوتاه (مانند Google Analytics) به شما می‌دهیم که باید در هدر یا فوتر سایت خود قرار دهید.' },
  ];

  const CtaButton = ({ plan }: { plan: PricingPlan }) => {
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
           <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-8 justify-center">
             {loading ? (
                // Loading Skeleton
                [...Array(3)].map((_, i) => (
                    <div key={i} className="rounded-2xl p-8 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 animate-pulse">
                        <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded w-1/2 mb-4"></div>
                        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-3/4 mb-8"></div>
                        <div className="h-10 bg-slate-200 dark:bg-slate-800 rounded w-1/3 mb-8"></div>
                        <div className="h-12 bg-slate-200 dark:bg-slate-800 rounded w-full mb-8"></div>
                        <div className="space-y-3">
                            <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-full"></div>
                            <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-5/6"></div>
                            <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-4/6"></div>
                        </div>
                    </div>
                ))
             ) : error ? (
                 <div className="col-span-full text-center text-red-500">{error}</div>
             ) : (
                 plans.map((plan) => (
                    <div key={plan.originalName} className={`relative rounded-2xl p-8 border flex flex-col ${plan.highlight ? 'border-brand-500 shadow-2xl shadow-brand-500/10 bg-white dark:bg-slate-800 md:scale-105 z-10' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950'}`}>
                        {plan.highlight && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-600 to-accent-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide">
                            پیشنهاد ویژه
                        </div>
                        )}
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                        <p className="text-slate-500 text-sm mb-6 h-10">{plan.description}</p>
                        <div className="mb-6">
                        <span className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white">{plan.price}</span>
                        <span className="text-slate-500 text-xs mr-2">تومان / {plan.period}</span>
                        </div>
                        <CtaButton plan={plan} />
                        <ul className="space-y-4 flex-1">
                        {plan.features.map((feat, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                            <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                            {feat}
                            </li>
                        ))}
                        </ul>
                    </div>
                 ))
             )}
           </div>
         </div>
       </section>

       {/* Why MegaLive Section */}
       <section className="py-20 bg-white dark:bg-slate-950">
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">چرا مگالایو؟</h2>
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