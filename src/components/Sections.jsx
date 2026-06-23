import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Braces, Star, Mail, Github, Linkedin, Twitter, BadgeCheck, Send, Monitor, Globe, ChevronLeft, ArrowUpLeft, Zap, Search, PenTool, Cpu, Rocket, Activity } from 'lucide-react'

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

export const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
}

export const Process = () => {
  const steps = [
    {
      number: '۰۱',
      title: 'تحقیق و استراتژی',
      desc: 'تحلیل نیازهای کسب‌وکار، بررسی رقبا، تعریف مخاطبان هدف و تدوین سند استراتژی پروژه برای همسویی کامل.',
      icon: <Search className="text-emerald-400" size={24} />,
    },
    {
      number: '۰۲',
      title: 'طراحی رابط و تجربه کاربری',
      desc: 'خلق معماری اطلاعات، ساخت وایرفریم‌ها، پیاده‌سازی هویت بصری مدرن و دیزاین سیستم یکپارچه در Figma.',
      icon: <PenTool className="text-cyan-400" size={24} />,
    },
    {
      number: '۰۳',
      title: 'توسعه فنی و کدنویسی',
      desc: 'پیاده‌سازی کامپوننت‌های واکنش‌گرا و بهینه با React و TailwindCSS با معماری خوانا و استانداردهای تمیز.',
      icon: <Cpu className="text-indigo-400" size={24} />,
    },
    {
      number: '۰۴',
      title: 'تست، سئو و استقرار',
      desc: 'بررسی همه‌جانبه پرفورمنس و امنیت، بهینه‌سازی Core Web Vitals، سئو فنی و انتشار نهایی روی بستر ابر.',
      icon: <Rocket className="text-violet-400" size={24} />,
    },
  ]

  return (
    <section id="process" className="mx-auto max-w-7xl px-4 py-32">
      <motion.div {...fadeInUp} className="mb-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-emerald-400">
          <Activity size={12} /> نقشه راه پروژه
        </div>
        <h2 className="mt-6 text-4xl font-black sm:text-6xl">مسیر رسیدن به هدف <br /> گام به گام در کنار شما</h2>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900/10 p-8 transition-all hover:bg-zinc-900/30 hover:border-white/10 hover:shadow-glow"
          >
            {/* Ambient hover light effect */}
            <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-white/[0.01] blur-2xl transition-all group-hover:bg-white/[0.03]" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 shadow-inner transition-transform group-hover:scale-110">
                  {step.icon}
                </div>
                <span className="text-4xl font-black tracking-tighter text-white/5 group-hover:text-white/10 transition-colors">
                  {step.number}
                </span>
              </div>
              
              <h3 className="mt-8 text-xl font-black text-white group-hover:text-emerald-400 transition-colors">
                {step.title}
              </h3>
              
              <p className="mt-4 text-sm leading-relaxed text-white/40 group-hover:text-white/60 transition-colors">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export const Stack = ({ items }) => (
  <section className="mx-auto max-w-7xl px-4 py-20 overflow-hidden">
     <motion.div 
       variants={staggerContainer}
       initial="initial"
       whileInView="whileInView"
       viewport={{ once: true }}
       className="flex flex-wrap justify-center gap-4"
     >
        {items.map((item) => (
          <motion.div 
            key={item} 
            variants={fadeInUp}
            whileHover={{ scale: 1.05, y: -5 }}
            className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold transition-all hover:bg-emerald-500 hover:text-zinc-950 hover:shadow-glow cursor-default"
          >
            {item}
          </motion.div>
        ))}
     </motion.div>
  </section>
)

export const Testimonials = () => (
  <section className="mx-auto max-w-7xl px-4 py-32">
     <motion.div 
       initial={{ opacity: 0, scale: 0.95 }}
       whileInView={{ opacity: 1, scale: 1 }}
       transition={{ duration: 0.8 }}
       viewport={{ once: true }}
       className="relative overflow-hidden rounded-[4rem] border border-white/10 bg-zinc-900/20 p-10 lg:p-24"
     >
        <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-violet-500/10 blur-[100px]" />
        <div className="absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-emerald-500/10 blur-[100px]" />
        
        <div className="relative flex flex-col items-center text-center">
           <div className="flex gap-1 text-emerald-400 mb-8">
             {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={20} />)}
           </div>
           <p className="max-w-4xl font-display text-2xl font-bold leading-relaxed text-white sm:text-4xl">
             «طراحی دقیق، سرعت اجرا عالی و نتیجه‌ای که هم زیباست هم برای جذب مشتری واقعاً کار می‌کند. همکاری با آرمان یکی از بهترین تجربه‌های ما بود.»
           </p>
           <div className="mt-12 flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 p-1 shadow-glow">
                 <div className="h-full w-full rounded-full bg-zinc-900 flex items-center justify-center font-black text-xl">م</div>
              </div>
              <div className="text-right">
                 <strong className="block text-xl">مدیر استارتاپ مالی</strong>
                 <span className="text-sm text-white/40 font-medium">پروژه داشبورد اختصاصی</span>
              </div>
           </div>
        </div>
     </motion.div>
  </section>
)

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-32">
       <div className="relative overflow-hidden rounded-[4rem] bg-zinc-900 border border-white/5 p-1 lg:p-2">
          <div className="grid lg:grid-cols-12 gap-8 bg-[#0a0a0a] rounded-[3.8rem] p-8 lg:p-16">
             <div className="lg:col-span-5 space-y-12">
                <motion.div {...fadeInUp}>
                  <h2 className="text-5xl font-black leading-tight sm:text-7xl">آماده خلق <br /> محصول <span className="text-emerald-500">بعدی؟</span></h2>
                  <p className="mt-8 max-w-sm text-lg font-medium text-white/50">
                    اگر به دنبال یک وب‌سایت مدرن، سریع و با استاندارد جهانی هستید، همین حالا پیام بدهید تا با هم گپ بزنیم.
                  </p>
                </motion.div>
                <div className="space-y-6">
                   <div className="flex items-center gap-4 group">
                      <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-all">
                         <Mail size={20} />
                      </div>
                      <div>
                         <span className="block text-xs font-bold text-white/30 uppercase tracking-widest">ایمیل مستقیم</span>
                         <a href="mailto:hello@arman.dev" className="text-lg font-bold hover:text-emerald-400 transition-colors">hello@arman.dev</a>
                      </div>
                   </div>
                </div>
             </div>
             <div className="lg:col-span-7">
                <form onSubmit={handleSubmit} className="space-y-4">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                         <label className="text-xs font-bold text-white/40 pr-4 uppercase tracking-widest">نام و نام خانوادگی</label>
                         <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full h-16 rounded-3xl bg-white/5 border border-white/10 px-6 font-bold focus:outline-none focus:border-emerald-500/50 focus:bg-white/[0.08] transition-all" placeholder="مثلا: آرمان علی‌زاده" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-xs font-bold text-white/40 pr-4 uppercase tracking-widest">آدرس ایمیل</label>
                         <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full h-16 rounded-3xl bg-white/5 border border-white/10 px-6 font-bold focus:outline-none focus:border-emerald-500/50 focus:bg-white/[0.08] transition-all text-left" placeholder="name@example.com" />
                      </div>
                   </div>
                   <textarea required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full h-48 rounded-[2rem] bg-white/5 border border-white/10 p-6 font-bold focus:outline-none focus:border-emerald-500/50 focus:bg-white/[0.08] transition-all resize-none" placeholder="در مورد پروژه خود بگویید..." />
                   <button type="submit" disabled={status !== 'idle'} className={`group relative w-full h-18 overflow-hidden rounded-3xl bg-emerald-500 font-black text-zinc-950 transition-all hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] flex items-center justify-center gap-3 py-4 ${status !== 'idle' ? 'opacity-70 cursor-wait' : ''}`}>
                      {status === 'idle' ? (<>ارسال پیام <Send size={20} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" /></>) : status === 'submitting' ? (<div className="h-6 w-6 border-4 border-zinc-950/20 border-t-zinc-950 rounded-full animate-spin" />) : (<div className="flex items-center gap-2 text-zinc-950 font-black"><BadgeCheck /> پیام ارسال شد!</div>)}
                   </button>
                </form>
             </div>
          </div>
       </div>
    </section>
  )
}

export const Footer = () => (
  <footer className="mx-auto max-w-7xl px-4 pt-10 pb-20">
     <div className="flex flex-col items-center justify-between gap-10 border-t border-white/5 pt-10 sm:flex-row">
        <div className="flex items-center gap-4">
           <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <Braces className="text-emerald-500" size={20} />
           </div>
           <div>
              <strong className="block text-sm">آرمان استودیو</strong>
              <span className="text-[10px] text-white/30 uppercase tracking-[0.2em]">Designed for 2026</span>
           </div>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-xs font-black uppercase tracking-widest text-white/30">
           <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
           <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
           <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
        <div className="text-xs font-bold text-white/20">© تمامی حقوق محفوظ است — ۲۰۲۶</div>
     </div>
  </footer>
)
