import React from 'react'
import { motion } from 'framer-motion'

const visualBase = "flex items-center justify-center rounded-3xl border border-white/5 bg-zinc-900/50 p-8 overflow-hidden"

export const UIVisual = () => (
  <div className={visualBase}>
    <div className="w-full space-y-3">
      <div className="flex gap-2">
        <div className="h-2 w-2 rounded-full bg-emerald-500" />
        <div className="h-2 w-2 rounded-full bg-cyan-500" />
        <div className="h-2 w-2 rounded-full bg-violet-500" />
      </div>
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-3 h-8 rounded-lg bg-white/5" />
        <div className="h-8 rounded-lg bg-emerald-500/20" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="h-16 rounded-xl bg-white/5" />
        <div className="h-16 rounded-xl bg-white/5" />
      </div>
    </div>
  </div>
)

export const CodeVisual = () => (
  <div className={visualBase}>
    <div className="w-full space-y-2 font-mono text-[10px]">
      <div className="flex items-center gap-2">
        <span className="text-emerald-500">const</span>
        <span className="text-cyan-400">App</span>
        <span className="text-white/30">= () =></span>
      </div>
      <div className="flex items-center gap-2 pr-4">
        <span className="text-violet-400">return</span>
      </div>
      <div className="pr-8 text-white/40">{'<div>Hello World</div>'}</div>
      <div className="mt-2 grid grid-cols-3 gap-1">
        {[1, 2, 3].map(i => (
          <div key={i} className="h-4 rounded bg-white/5" />
        ))}
      </div>
    </div>
  </div>
)

export const SpeedVisual = () => (
  <div className={visualBase}>
    <div className="w-full space-y-2">
      <div className="flex items-end gap-2">
        <div className="h-16 w-8 rounded-t-lg bg-emerald-500/30" />
        <div className="h-12 w-8 rounded-t-lg bg-emerald-500/40" />
        <div className="h-8 w-8 rounded-t-lg bg-emerald-500/50" />
        <div className="h-4 w-8 rounded-t-lg bg-emerald-500/60" />
      </div>
      <div className="flex items-center gap-2 text-[10px] text-white/40">
        <div className="h-px flex-1 bg-white/10" />
        <span>۰.۸s</span>
      </div>
    </div>
  </div>
)

export const SecurityVisual = () => (
  <div className={visualBase}>
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      </div>
      <div className="space-y-1">
        <div className="h-2 w-16 rounded bg-emerald-500/30" />
        <div className="h-2 w-24 rounded bg-white/10" />
      </div>
    </div>
  </div>
)

export const ProjectVisual1 = () => (
  <div className="h-40 w-full rounded-2xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-4">
    <div className="grid h-full grid-cols-2 gap-2">
      <div className="rounded-xl bg-white/5 p-2">
        <div className="mb-1 h-2 w-10 rounded bg-emerald-500/30" />
        <div className="h-6 rounded bg-white/10" />
      </div>
      <div className="rounded-xl bg-white/5 p-2">
        <div className="mb-1 h-2 w-10 rounded bg-cyan-500/30" />
        <div className="h-6 rounded bg-white/10" />
      </div>
    </div>
  </div>
)

export const ProjectVisual2 = () => (
  <div className="h-40 w-full rounded-2xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 p-4">
    <div className="flex h-full items-center justify-center">
      <div className="h-16 w-16 rounded-full bg-white/5" />
    </div>
  </div>
)

export const ProjectVisual3 = () => (
  <div className="h-40 w-full rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-4">
    <div className="grid h-full grid-cols-3 gap-2">
      {[1, 2, 3].map(i => (
        <div key={i} className="rounded-xl bg-white/5 p-2">
          <div className="mb-1 h-6 rounded bg-white/10" />
          <div className="h-2 w-8 rounded bg-cyan-500/30" />
        </div>
      ))}
    </div>
  </div>
)

export const ProjectVisual4 = () => (
  <div className="h-40 w-full rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-4">
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-amber-500/40" />
        <div className="h-2 flex-1 rounded bg-white/10" />
        <div className="h-2 w-10 rounded bg-amber-500/30" />
      </div>
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-white/10" />
        <div className="h-2 flex-1 rounded bg-white/5" />
      </div>
    </div>
  </div>
)