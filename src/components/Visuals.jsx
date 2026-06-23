import React from 'react'
import { motion } from 'framer-motion'
import { Braces, Globe, Monitor, Palette, Code2, Zap, ShieldCheck, Rocket, Cpu, Star, Mail, Github, Linkedin, Twitter, BadgeCheck, Send, ChevronLeft, ArrowUpLeft } from 'lucide-react'

export const UIVisual = () => (
  <div className="relative h-24 w-full">
     <div className="absolute inset-0 grid grid-cols-3 gap-2">
        <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-2 overflow-hidden">
           <div className="h-2 w-1/2 rounded-full bg-emerald-500/40 mb-2" />
           <div className="space-y-1">
              <div className="h-1 w-full rounded-full bg-white/5" />
              <div className="h-1 w-2/3 rounded-full bg-white/5" />
           </div>
        </div>
        <div className="col-span-2 rounded-xl bg-white/5 border border-white/10 p-2 overflow-hidden">
           <div className="flex items-center gap-2 mb-2">
              <div className="h-4 w-4 rounded-full bg-emerald-500/40" />
              <div className="h-2 w-1/4 rounded-full bg-white/10" />
           </div>
           <div className="h-1 w-full rounded-full bg-white/5 mb-1" />
           <div className="h-1 w-3/4 rounded-full bg-white/5" />
        </div>
     </div>
     <div className="absolute -bottom-2 -left-2 h-12 w-12 rounded-full bg-emerald-500/20 blur-xl animate-pulse" />
  </div>
)

export const CodeVisual = () => (
  <div className="rounded-2xl bg-zinc-950 border border-white/5 p-4 font-mono text-[10px] space-y-1 shadow-2xl">
     <div className="flex gap-1.5 mb-2">
        <div className="h-2 w-2 rounded-full bg-red-500/40" />
        <div className="h-2 w-2 rounded-full bg-amber-500/40" />
        <div className="h-2 w-2 rounded-full bg-emerald-500/40" />
     </div>
     <div className="text-blue-400">export default function <span className="text-amber-400">App</span>() &#123;</div>
     <div className="pl-4 text-emerald-400">  return (</div>
     <div className="pl-8 text-blue-400">    &lt;<span className="text-red-400">Hero</span> /&gt;</div>
     <div className="pl-4 text-emerald-400">  );</div>
     <div className="text-blue-400">&#125;</div>
  </div>
)

export const SpeedVisual = () => (
  <div className="flex items-end justify-between gap-1 h-16 p-2 rounded-xl bg-amber-500/5">
     {[40, 70, 55, 90, 60, 100].map((h, i) => (
       <div key={i} className="flex-1 bg-amber-500/20 rounded-t-lg relative overflow-hidden" style={{ height: `${h}%` }}>
          <motion.div 
            initial={{ y: '100%' }}
            whileInView={{ y: '0%' }}
            transition={{ duration: 1, delay: i * 0.1 }}
            className="absolute inset-0 bg-amber-400/30" 
          />
       </div>
     ))}
  </div>
)

export const SecurityVisual = () => (
  <div className="relative flex items-center justify-center h-20">
     <div className="absolute inset-0 grid grid-cols-4 gap-2 opacity-20">
        {[1,2,3,4].map(i => <div key={i} className="h-full border border-violet-500/30 rounded-lg" />)}
     </div>
     <div className="relative z-10 p-3 rounded-2xl bg-violet-500/10 border border-violet-500/30 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
        <ShieldCheck className="text-violet-400" size={32} />
     </div>
     <div className="absolute h-1 w-full bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
  </div>
)

export const ProjectVisual1 = () => (
  <div className="relative h-full w-full bg-zinc-950 rounded-2xl border border-white/5 overflow-hidden p-4">
     <div className="flex gap-4">
        <div className="w-1/3 space-y-2">
           <div className="h-12 w-full rounded-xl bg-emerald-500/20 animate-pulse" />
           <div className="h-8 w-full rounded-lg bg-white/5" />
           <div className="h-8 w-full rounded-lg bg-white/5" />
        </div>
        <div className="flex-1 space-y-4">
           <div className="h-4 w-1/2 rounded-full bg-white/10" />
           <div className="grid grid-cols-2 gap-2">
              <div className="h-20 rounded-xl bg-white/5 border border-white/10" />
              <div className="h-20 rounded-xl bg-white/5 border border-white/10" />
           </div>
        </div>
     </div>
  </div>
)

export const ProjectVisual2 = () => (
  <div className="flex h-full items-center justify-center">
     <div className="relative h-48 w-32 rounded-3xl border-8 border-zinc-900 bg-zinc-950 p-2 shadow-2xl">
        <div className="h-full w-full rounded-2xl bg-gradient-to-b from-violet-500/20 to-transparent flex flex-col items-center justify-center gap-3">
           <div className="h-10 w-10 rounded-full bg-violet-500/20" />
           <div className="h-2 w-12 rounded-full bg-white/10" />
           <div className="h-2 w-8 rounded-full bg-white/5" />
        </div>
        <div className="absolute -right-4 top-1/2 h-8 w-1 bg-zinc-800 rounded-l" />
     </div>
  </div>
)

export const ProjectVisual3 = () => (
  <div className="grid grid-cols-2 gap-4 h-full p-2">
     <div className="h-full rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex flex-col p-4 gap-3">
        <div className="h-20 w-full rounded-xl bg-white/5" />
        <div className="h-3 w-3/4 rounded-full bg-cyan-500/40" />
        <div className="h-10 w-full rounded-xl bg-cyan-500 mt-auto" />
     </div>
     <div className="space-y-4">
        <div className="h-1/2 rounded-2xl bg-white/5 border border-white/10" />
        <div className="h-1/3 rounded-2xl bg-white/5 border border-white/10" />
     </div>
  </div>
)

export const ProjectVisual4 = () => (
  <div className="flex items-center justify-center h-full">
     <div className="w-full max-w-[200px] space-y-3">
        {[1,2,3].map(i => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
             <div className={`h-4 w-4 rounded-md ${i === 1 ? 'bg-amber-500' : 'border border-white/20'}`} />
             <div className="h-2 flex-1 rounded-full bg-white/10" />
          </div>
        ))}
     </div>
  </div>
)
