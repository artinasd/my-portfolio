import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Monitor, ArrowUpLeft, ChevronLeft } from 'lucide-react'
import { fadeInUp, staggerContainer } from './Sections'

export const Hero = ({ stats }) => (
  <section id="home" className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 pt-32 text-center lg:pt-40">
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-bold text-emerald-400 backdrop-blur-sm"
    >
      <span className="animate-pulse">✨</span> توسعه وب مدرن با لبه‌های تکنولوژی
    </motion.div>
    
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mt-8 max-w-5xl text-5xl font-black leading-[1.1] tracking-tight sm:text-7xl lg:text-8xl"
    >
      خلق تجربه‌های دیجیتال <br />
      <span className="text-gradient">فراتر از تصور کاربر.</span>
    </motion.h1>

    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="mt-8 max-w-2xl text-lg leading-relaxed text-white/50 md:text-xl"
    >
      ترکیب هنر طراحی و قدرت مهندسی برای ساخت محصولاتی که نه تنها کار می‌کنند، بلکه احساس می‌شوند. متخصص در React، Next.js و پرفورمنس بالا.
    </motion.p>

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="mt-10 flex flex-col gap-4 sm:flex-row"
    >
      <a href="#projects" className="group relative flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-emerald-500 px-8 font-black text-zinc-950 transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]">
        مشاهده پروژه‌ها <ArrowUpLeft className="transition group-hover:-translate-x-1 group-hover:translate-y-1" size={20} />
      </a>
      <a href="#contact" className="flex h-14 items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 font-bold text-white transition hover:bg-white/10 hover:border-white/20">
        مشاوره رایگان
      </a>
    </motion.div>

    <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-3">
       {stats.map((stat, i) => (
         <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 * i }} viewport={{ once: true }} className="text-center">
           <div className="text-4xl font-black text-white">{stat.value}</div>
           <div className="mt-2 text-sm font-bold text-white/40 uppercase tracking-widest">{stat.label}</div>
         </motion.div>
       ))}
    </div>
  </section>
)

export const Services = ({ services }) => (
  <section id="services" className="relative mx-auto max-w-7xl px-4 py-32">
     <motion.div {...fadeInUp} className="mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-emerald-400">
           <Globe size={12} /> تخصص‌های ما
        </div>
        <h2 className="mt-6 text-4xl font-black sm:text-6xl">راهکارهای هوشمند <br /> برای چالش‌های شما</h2>
     </motion.div>

     <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid gap-6 lg:grid-cols-3">
        {services.map((service) => (
          <motion.div key={service.title} variants={fadeInUp} className={`group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900/30 p-8 transition-all hover:bg-zinc-900/50 hover:shadow-glow ${service.className || ''}`}>
            <div className="relative z-10">
              <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-emerald-400 shadow-inner group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black">{service.title}</h3>
              <p className="mt-4 leading-relaxed text-white/50">{service.text}</p>
            </div>
            <div className="mt-12 opacity-50 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-[-4px]">
              {service.visual}
            </div>
          </motion.div>
        ))}
     </motion.div>
  </section>
)

export const Projects = ({ projects }) => (
  <section id="projects" className="mx-auto max-w-7xl px-4 py-32">
    <motion.div {...fadeInUp} className="mb-16 flex flex-col items-start">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-violet-400">
           <Monitor size={12} /> نمونه‌کارها
        </div>
        <h2 className="mt-6 text-4xl font-black sm:text-6xl text-right">گلچینی از بهترین‌ها</h2>
    </motion.div>
    <div className="grid gap-8 lg:grid-cols-2">
       {projects.map((project, index) => (
         <motion.article key={project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="group relative overflow-hidden rounded-[3rem] border border-white/10 bg-zinc-900/20 transition-all hover:border-white/20 hover:bg-zinc-900/30">
            <div className={`relative h-80 overflow-hidden bg-gradient-to-br ${project.color}`}>
               <div className="absolute inset-0 p-8 flex items-center justify-center transform transition-transform duration-700 group-hover:scale-105">
                 {project.image}
               </div>
               <div className="absolute bottom-6 left-6">
                  <a href={project.link} className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-zinc-950 shadow-2xl transition-all hover:scale-110 active:scale-95">
                     <ArrowUpLeft size={24} strokeWidth={3} />
                  </a>
               </div>
            </div>
            <div className="p-10">
               <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-md">{project.tag}</span>
               <h3 className="mt-4 text-3xl font-black">{project.title}</h3>
               <p className="mt-4 leading-relaxed text-white/40">{project.description}</p>
               <div className="mt-8">
                  <a href={project.link} className="flex items-center gap-2 text-sm font-bold text-white hover:text-emerald-400 transition-colors">مشاهده جزئیات <ChevronLeft size={16} /></a>
               </div>
            </div>
         </motion.article>
       ))}
    </div>
  </section>
)
