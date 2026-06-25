import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Braces, Star, Mail, Github, Linkedin, Twitter, BadgeCheck, Search, PenTool, Cpu, Rocket, Activity, Zap, Monitor, Globe, AlertCircle } from 'lucide-react'

export const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

export const Process = () => {
    const steps = [
        { number: '۰۱', title: 'تحقیق و استراتژی', desc: 'تحلیل نیازهای کسب‌وکار، بررسی رقبا، تعریف مخاطبان هدف و تدوین سند استراتژی پروژه برای همسویی کامل.', icon: <Search className="text-emerald-400" size={24} /> },
        { number: '۰۲', title: 'طراحی رابط و تجربه کاربری', desc: 'خلق معماری اطلاعات، ساخت وایرفریم‌ها، پیاده‌سازی هویت بصری مدرن و دیزاین سیستم یکپارچه در Figma.', icon: <PenTool className="text-cyan-400" size={24} /> },
        { number: '۰۳', title: 'توسعه فنی و کدنویسی', desc: 'پیاده‌سازی کامپوننت‌های واکنش‌گرا و بهینه با React و TailwindCSS با معماری خوانا و استانداردهای تمیز.', icon: <Cpu className="text-indigo-400" size={24} /> },
        { number: '۰۴', title: 'تست، سئو و استقرار', desc: 'بررسی همه‌جانبه پرفورمنس و امنیت، بهینه‌سازی Core Web Vitals، سئو فنی و انتشار نهایی روی بستر ابر.', icon: <Rocket className="text-violet-400" size={24} /> },
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
                    <motion.div key={step.number} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.15 }} viewport={{ once: true }} className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900/10 p-8 transition-all hover:bg-zinc-900/30 hover:border-white/10 hover:shadow-glow">
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center justify-between">
                                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 shadow-inner">{step.icon}</div>
                                <span className="text-4xl font-black tracking-tighter text-white/5">{step.number}</span>
                            </div>
                            <h3 className="mt-8 text-xl font-black text-white">{step.title}</h3>
                            <p className="mt-4 text-sm leading-relaxed text-white/40">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

const stackGroups = [
    {
        title: 'فرانت‌اند',
        icon: <Monitor size={18} />,
        color: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
        borderColor: 'border-emerald-500/20',
        textColor: 'text-emerald-400',
        bgColor: 'bg-emerald-500/5',
        items: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Vite'],
    },
    {
        title: 'بک‌اند و دیتابیس',
        icon: <Globe size={18} />,
        color: 'from-blue-500/20 via-blue-500/5 to-transparent',
        borderColor: 'border-blue-500/20',
        textColor: 'text-blue-400',
        bgColor: 'bg-blue-500/5',
        items: ['Node.js', 'PostgreSQL', 'Firebase'],
    },
    {
        title: 'ابزار و دیزاین',
        icon: <PenTool size={18} />,
        color: 'from-violet-500/20 via-violet-500/5 to-transparent',
        borderColor: 'border-violet-500/20',
        textColor: 'text-violet-400',
        bgColor: 'bg-violet-500/5',
        items: ['Figma', 'GitHub', 'Vercel'],
    },
]

export const Stack = () => (
    <section className="mx-auto max-w-7xl px-4 py-32 overflow-hidden">
        <motion.div {...fadeInUp} className="mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                <Zap size={12} /> ابزارها و تکنولوژی‌ها
            </div>
            <h2 className="mt-6 text-4xl font-black sm:text-6xl">استک فنی ما</h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
            {stackGroups.map((group, groupIndex) => (
                <motion.div
                    key={group.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: groupIndex * 0.15 }}
                    viewport={{ once: true }}
                    className={`group relative overflow-hidden rounded-[2.5rem] border ${group.borderColor} ${group.bgColor} p-8 transition-all hover:shadow-glow`}
                >
                    <div className={`absolute inset-0 bg-gradient-to-b ${group.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-8">
                            <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ${group.textColor} border border-white/10`}>
                                {group.icon}
                            </div>
                            <h3 className={`text-lg font-black ${group.textColor}`}>{group.title}</h3>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {group.items.map((item) => (
                                <div key={item} className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-bold text-white/70">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
)

export const Testimonials = () => (
    <section className="mx-auto max-w-7xl px-4 py-32">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="relative overflow-hidden rounded-[4rem] border border-white/10 bg-zinc-900/20 p-10 lg:p-24">
            <div className="relative flex flex-col items-center text-center">
                <div className="flex gap-1 text-emerald-400 mb-8">{[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={20} />)}</div>
                <p className="max-w-4xl font-display text-2xl font-bold leading-relaxed text-white sm:text-4xl">
                    «طراحی دقیق، سرعت اجرا عالی و نتیجه‌ای که هم زیباست هم برای جذب مشتری واقعاً کار می‌کند. همکاری با آرتین یکی از بهترین تجربه‌های ما بود.»
                </p>
            </div>
        </motion.div>
    </section>
)

export const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('idle')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('submitting')
        const FORMSPREE_ENDPOINT_ID = 'xojoenwr'
        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_ENDPOINT_ID}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: formData.name, email: formData.email, message: formData.message }),
            })
            if (response.ok) setStatus('success')
            else setStatus('error')
        } catch {
            setStatus('error')
        }
    }

    return (
        <section id="contact" className="mx-auto max-w-7xl px-4 py-32">
            <div className="relative overflow-hidden rounded-[4rem] bg-zinc-900 border border-white/5 p-1 lg:p-2">
                <div className="grid lg:grid-cols-12 gap-8 bg-[#0a0a0a] rounded-[3.8rem] p-8 lg:p-16">
                    <div className="lg:col-span-5 space-y-12">
                        <motion.div {...fadeInUp}>
                            <h2 className="text-5xl font-black leading-tight sm:text-7xl">آماده خلق <br /> محصول <span className="text-emerald-500">بعدی؟</span></h2>
                            <p className="mt-8 max-w-sm text-lg font-medium text-white/50">اگر به دنبال یک وب‌سایت مدرن، سریع و با استاندارد جهانی هستید، همین حالا پیام بدهید.</p>
                        </motion.div>
                    </div>
                    <div className="lg:col-span-7">
                        {status === 'success' ? (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col items-center justify-center text-center p-8 bg-emerald-500/10 rounded-[3rem] border border-emerald-500/20">
                                <BadgeCheck size={64} className="text-emerald-500 mb-6" />
                                <h3 className="text-2xl font-black">پیام شما با موفقیت ارسال شد!</h3>
                            </motion.div>
                        ) : status === 'error' ? (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col items-center justify-center text-center p-8 bg-red-500/10 rounded-[3rem] border border-red-500/20">
                                <AlertCircle size={64} className="text-red-500 mb-6" />
                                <h3 className="text-2xl font-black">متاسفم، مشکلی پیش آمد!</h3>
                                <p className="text-white/60 mt-2 mb-6">لطفاً مستقیماً به من ایمیل بزنید:</p>
                                <a href="mailto:artinasd.dev@gmail.com" className="bg-white text-zinc-950 px-8 py-3 rounded-full font-black hover:bg-emerald-400 transition-colors">artinasd.dev@gmail.com</a>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full h-16 rounded-3xl bg-white/5 border border-white/10 px-6 font-bold" placeholder="نام" />
                                    <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full h-16 rounded-3xl bg-white/5 border border-white/10 px-6 font-bold" placeholder="ایمیل" />
                                </div>
                                <textarea required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full h-48 rounded-[2rem] bg-white/5 border border-white/10 p-6 font-bold" placeholder="پیام..." />
                                <button type="submit" disabled={status === 'submitting'} className="w-full h-18 rounded-3xl bg-emerald-500 font-black text-zinc-950 hover:bg-emerald-400 transition-colors">
                                    {status === 'submitting' ? 'در حال ارسال...' : 'ارسال پیام'}
                                </button>
                            </form>
                        )}
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
                <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center"><Braces className="text-emerald-500" size={20} /></div>
                <div>
                    <strong className="block text-sm">آرتیک وب استودیو</strong>
                    <span className="text-[10px] text-white/30 uppercase tracking-[0.2em]">Designed for 2026</span>
                </div>
            </div>
        </div>
    </footer>
)