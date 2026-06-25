import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpLeft, Zap, ChevronLeft, Star, ExternalLink } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

export const Hero = ({ stats }) => (
  <section id="home" className="relative mx-auto max-w-7xl px-4 pb-20 pt-40">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center"
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-emerald-400">
        <Zap size={12} /> محصول دیجیتال خود را بسازید
      </div>

      <h1 className="mt-8 max-w-5xl text-5xl font-black leading-[1.1] sm:text-6xl lg:text-8xl">
        طراحی و توسعه وب‌سایت‌های مدرن با{' '}
        <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
           React
        </span>
      </h1>

      <p className="mt-8 max-w-xl text-lg font-medium leading-relaxed text-white/50">
        متخصص در ساخت محصولات دیجیتال با کیفیت بالا، از طراحی رابط کاربری گرفته تا پیاده‌سازی با React و Next.js
      </p>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#contact"
          className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-emerald-500 px-8 py-4 text-base font-black text-zinc-950 transition-all hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]"
        >
          شروع پروژه
          <ArrowUpLeft size={20} className="transition group-hover:-translate-x-1 group-hover:-translate-y-1" />
        </a>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-base font-bold text-white/80 transition hover:bg-white/10 hover:text-white"
        >
          مشاهده نمونه‌کارها
          <ChevronLeft size={18} />
        </a>
      </div>

      <div className="mt-20 grid w-full max-w-3xl grid-cols-3 gap-8 border-t border-white/10 pt-10">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <span className="block text-3xl font-black text-white sm:text-4xl">{stat.value}</span>
            <span className="mt-1 block text-xs font-bold text-white/40">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
)

export const Services = ({ services }) => (
  <section id="services" className="mx-auto max-w-7xl px-4 py-32">
    <motion.div {...fadeInUp} className="mb-16">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-emerald-400">
        <Zap size={12} /> خدمات ما
      </div>
      <h2 className="mt-6 text-4xl font-black sm:text-6xl">
        هر آنچه برای موفقیت نیاز دارید
      </h2>
    </motion.div>

    <div className="grid gap-6 lg:grid-cols-3">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`group relative overflow-hidden rounded-[2.5rem] border border-white/5 p-8 transition-all hover:border-white/20 hover:shadow-glow ${service.className}`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
              {service.icon}
            </div>
            <h3 className="text-xl font-black">{service.title}</h3>
          </div>
          <p className="text-sm leading-relaxed text-white/60">{service.text}</p>
          <div className="mt-6">{service.visual}</div>
        </motion.div>
      ))}
    </div>
  </section>
)

export const Projects = ({ projects }) => (
  <section id="projects" className="mx-auto max-w-7xl px-4 py-32">
    <motion.div {...fadeInUp} className="mb-16">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-emerald-400">
        <Star size={12} /> نمونه‌کارها
      </div>
      <h2 className="mt-6 text-4xl font-black sm:text-6xl">
        پروژه‌های اخیر
      </h2>
    </motion.div>

    <div className="grid gap-8 md:grid-cols-2">
      {projects.map((project, index) => (
        <motion.a
          key={project.title}
          href={project.link}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900/30 transition-all hover:border-white/20 hover:shadow-glow"
        >
          <div className={`absolute inset-0 bg-gradient-to-b ${project.color} opacity-50 transition-opacity group-hover:opacity-70`} />
          <div className="relative z-10 p-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl font-black">{project.title}</h3>
                <span className="text-xs font-bold text-emerald-400">{project.tag}</span>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/40 transition-all group-hover:text-emerald-400 group-hover:bg-emerald-500/10">
                <ExternalLink size={18} />
              </div>
            </div>
            <p className="text-sm text-white/60 mb-6">{project.description}</p>
            <div className="flex justify-center">{project.image}</div>
          </div>
        </motion.a>
      ))}
    </div>
  </section>
)