import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Loader2, Sparkles, RefreshCw } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const DemoChatWidget: React.FC = () => {
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'سلام! 👋 من دستیار هوشمند مگا لایو هستم. چطور می‌تونم کمکتون کنم؟', sender: 'bot' }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let botResponseText = 'این یک دموی نمایشی است. در نسخه اصلی، من بر اساس اسناد شما پاسخ خواهم داد.';
      
      if (input.includes('قیمت') || input.includes('هزینه')) {
        botResponseText = 'ما طرح‌های متنوعی داریم! طرح رایگان برای شروع، و طرح حرفه‌ای برای کسب‌وکارهای رو به رشد.';
      } else if (input.includes('فارسی') || input.includes('زبان')) {
        botResponseText = 'بله، من کاملاً از زبان شیرین فارسی و همچنین انگلیسی پشتیبانی می‌کنم.';
      } else if (input.includes('نصب') || input.includes('سایت')) {
        botResponseText = 'نصب بسیار ساده است! فقط کافیست یک خط کد جاوااسکریپت را در سایت خود کپی کنید.';
      }

      const botMsg: Message = { id: Date.now() + 1, text: botResponseText, sender: 'bot' };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="w-full max-w-sm md:max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col h-[500px]">
      {/* Header */}
      <div className="bg-brand-600 p-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="bg-white/20 p-2 rounded-full text-white">
              <Bot className="h-6 w-6" />
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-brand-600 rounded-full"></div>
          </div>
          <div>
            <h3 className="font-bold text-white text-base">پشتیبان هوشمند</h3>
            <p className="text-brand-100 text-xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-brand-200 rounded-full animate-pulse"></span>
              آنلاین
            </p>
          </div>
        </div>
        <button 
          onClick={() => setMessages([{ id: 1, text: 'سلام! 👋 من دستیار هوشمند مگا لایو هستم. چطور می‌تونم کمکتون کنم؟', sender: 'bot' }])}
          className="text-white/70 hover:text-white transition-colors"
          title="شروع مجدد"
        >
          <RefreshCw className="h-5 w-5" />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 bg-slate-50 dark:bg-slate-950 p-4 overflow-y-auto space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-end gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
              msg.sender === 'user' ? 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300' : 'bg-brand-100 text-brand-600'
            }`}>
              {msg.sender === 'user' ? <User className="h-5 w-5" /> : <Sparkles className="h-4 w-4" />}
            </div>
            <div
              className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-brand-600 text-white rounded-br-none'
                  : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-bl-none shadow-sm'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex items-end gap-2">
             <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
               <Sparkles className="h-4 w-4 text-brand-600" />
             </div>
             <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-bl-none border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="flex space-x-1 space-x-reverse">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="پیام خود را بنویسید..."
            className="w-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-full pl-4 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="absolute left-1.5 p-2 bg-brand-500 text-white rounded-full hover:bg-brand-600 disabled:opacity-50 disabled:hover:bg-brand-500 transition-colors"
          >
            {isTyping ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4 rtl:-scale-x-100" />}
          </button>
        </div>
        <div className="text-center mt-2">
          <p className="text-[10px] text-slate-400 dark:text-slate-500">
            قدرت گرفته از مگا لایو
          </p>
        </div>
      </div>
    </div>
  );
};

export default DemoChatWidget;