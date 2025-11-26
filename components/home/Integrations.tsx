import React from 'react';
import { Layout, Zap, MessageCircle, Layers } from 'lucide-react';

const Integrations: React.FC = () => {
  const tools = [
    { name: 'WordPress', icon: Layout, color: 'text-blue-600' },
    { name: 'Zapier', icon: Zap, color: 'text-orange-500' },
    { name: 'Telegram', icon: MessageCircle, color: 'text-sky-500' },
    { name: 'Slack', icon: Layers, color: 'text-purple-500' },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            با ابزارهای محبوب شما یکپارچه می‌شود
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
            مگا لایو را به راحتی به اکوسیستم نرم‌افزاری خود متصل کنید و گردش کار خود را خودکار سازید.
          </p>
          <div className="relative">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-slate-200 dark:bg-slate-800"></div>
            <div className="relative flex flex-wrap justify-center gap-4 md:gap-8">
              {tools.map((tool, index) => (
                <div key={index} className="bg-white dark:bg-slate-900 px-6 py-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-md">
                  <div className="flex items-center gap-3">
                    <tool.icon className={`h-8 w-8 ${tool.color}`} />
                    <span className="text-xl font-bold text-slate-700 dark:text-slate-300">{tool.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
