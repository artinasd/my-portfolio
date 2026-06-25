import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Braces, Menu, X } from 'lucide-react'

const navItems = [
  { label: 'خانه', id: 'home' },
  { label: 'خدمات', id: 'services' },
  { label: 'نمونه‌کارها', id: 'projects' },
  { label: 'فرآیند', id: 'process' },
  { label: 'تماس', id: 'contact' },
]

export const CustomCursor = () => {
  const cursorRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const isTouchDevice = useRef(
    typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)
  )

  useEffect(() => {
    if (isTouchDevice.current) return

    const moveCursor = (e) => {
      setIsVisible(true)
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      }
    }
    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  if (isTouchDevice.current) return null

  return (
    <div 
      ref={cursorRef}
      className={`pointer-events-none fixed left-0 top-0 z-[100] -ml-4 -mt-4 h-8 w-8 rounded-full border border-emerald-500/50 mix-blend-difference transition-all duration-300 ease-out sm:block hidden ${isVisible ? 'opacity-100' : 'opacity-0'} ${isHovering ? 'scale-150 bg-emerald-500' : 'scale-100 bg-transparent'}`}
    />
  )
}

export const AmbientBackground = () => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Generate floating particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 15,
      color: ['bg-emerald-400/40', 'bg-blue-400/30', 'bg-violet-400/35', 'bg-cyan-400/25'][Math.floor(Math.random() * 4)],
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="grain-overlay pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Large ambient gradient orbs with CSS animation (lighter than motion.div) */}
      <div
        className="absolute -right-32 -top-20 h-[700px] w-[700px] rounded-full bg-emerald-500/20 blur-[150px]"
        style={{ animation: 'float-emerald 18s ease-in-out infinite' }}
      />
      <div
        className="absolute -left-32 top-1/4 h-[650px] w-[650px] rounded-full bg-blue-500/15 blur-[140px] mix-blend-screen"
        style={{ animation: 'float-blue 22s ease-in-out infinite' }}
      />
      <div
        className="absolute -bottom-32 right-[10%] h-[600px] w-[600px] rounded-full bg-violet-500/15 blur-[130px]"
        style={{ animation: 'float-violet 20s ease-in-out infinite' }}
      />
      <div
        className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]"
        style={{ animation: 'float-cyan 16s ease-in-out infinite' }}
      />

      {/* Floating hex dot grid */}
      <div className="grid-mesh absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      {/* Animated glow lines (subtle horizontal light streaks) */}
      <div className="absolute left-0 right-0 top-1/4 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent blur-sm"
           style={{ animation: 'float-emerald 12s ease-in-out infinite' }} />
      <div className="absolute left-0 right-0 top-3/4 h-px bg-gradient-to-r from-transparent via-blue-500/15 to-transparent blur-sm"
           style={{ animation: 'float-blue 14s ease-in-out infinite reverse' }} />

      {/* Floating Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full ${p.color}`}
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            boxShadow: p.size > 3 ? '0 0 6px rgba(16,185,129,0.2)' : 'none',
          }}
          animate={{
            y: [0, -80, 40, -30, 10, 0],
            x: [0, 30, -40, 20, -10, 0],
            opacity: [0, 0.9, 0.4, 0.7, 0.2, 0],
            scale: [1, 1.5, 0.8, 1.2, 0.9, 1],
          }}
          transition={{
            duration: Math.random() * 20 + 18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}

      {/* Extra large slow-moving floating flecks */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`fleck-${i}`}
          className="absolute rounded-full bg-white/5"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 20, -10, 0],
            opacity: [0, 0.4, 0.1, 0.3, 0],
          }}
          transition={{
            duration: Math.random() * 30 + 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 20,
          }}
        />
      ))}
    </div>
  )
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-6 z-50 px-4">
      <nav className={`mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/10 px-4 py-2 transition-all duration-300 backdrop-blur-md ${scrolled ? 'bg-zinc-900/80 shadow-glow' : 'bg-transparent'}`}>
        <a href="#" className="group flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-zinc-950 shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-transform group-hover:scale-110">
            <Braces size={20} strokeWidth={2.5} />
          </div>
          <span className="hidden leading-tight sm:block">
            <strong className="block text-sm font-black tracking-tight">آرتیک وب</strong>
            <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono">ArtiQ Web</span>
          </span>
        </a>
        
        <div className="hidden items-center gap-1 rounded-full border border-white/5 bg-white/5 p-1 md:flex">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="rounded-full px-5 py-2 text-sm font-medium text-white/60 transition hover:bg-white/10 hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href="#contact" className="hidden rounded-full bg-white px-5 py-2.5 text-xs font-bold text-zinc-950 transition hover:bg-emerald-400 sm:inline-flex">
            شروع پروژه
          </a>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute inset-x-4 top-20 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/95 p-4 backdrop-blur-xl md:hidden"
          >
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="rounded-2xl p-4 text-center font-bold text-white/70 hover:bg-white/10 hover:text-emerald-400" onClick={() => setIsOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="mt-2 rounded-2xl bg-emerald-500 p-4 text-center font-black text-zinc-950" onClick={() => setIsOpen(false)}>
                شروع پروژه
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
