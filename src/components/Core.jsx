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

  useEffect(() => {
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

  return (
    <div 
      ref={cursorRef}
      className={`pointer-events-none fixed left-0 top-0 z-[100] -ml-4 -mt-4 h-8 w-8 rounded-full border border-emerald-500/50 mix-blend-difference transition-all duration-300 ease-out sm:block hidden ${isVisible ? 'opacity-100' : 'opacity-0'} ${isHovering ? 'scale-150 bg-emerald-500' : 'scale-100 bg-transparent'}`}
    />
  )
}

export const AmbientBackground = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute -right-28 top-10 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px] animate-pulse" />
    <div className="absolute left-[-10%] top-1/3 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[120px]" />
    <div className="absolute bottom-[-10%] right-1/4 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[120px]" />
    <div className="grid-mesh absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
  </div>
)

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
            <strong className="block text-sm font-black tracking-tight">آرمان وب</strong>
            <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono">Studio 2026</span>
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
