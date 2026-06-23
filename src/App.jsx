import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Palette, Code2, Zap, ShieldCheck } from 'lucide-react'

// Modular Components
import { CustomCursor, AmbientBackground, Navbar } from './components/Core'
import { Hero, Services, Projects } from './components/MainSections'
import { Stack, Testimonials, Contact, Footer, Process } from './components/Sections'
import { 
  UIVisual, CodeVisual, SpeedVisual, SecurityVisual,
  ProjectVisual1, ProjectVisual2, ProjectVisual3, ProjectVisual4 
} from './components/Visuals'

// --- Data ---
const stats = [
  { value: '+۴۲', label: 'پروژه تحویل‌شده' },
  { value: '۹۸٪', label: 'رضایت کارفرما' },
  { value: '۲.۱s', label: 'میانگین لود صفحات' },
]

const servicesData = [
  {
    icon: <Palette className="text-emerald-400" />,
    title: 'طراحی رابط کاربری ممتاز',
    text: 'خلق هویت بصری، دیزاین سیستم، وایرفریم و تجربه‌ای که برند شما را حرفه‌ای نشان می‌دهد.',
    visual: <UIVisual />,
    className: 'lg:col-span-2 bg-emerald-500/5',
  },
  {
    icon: <Code2 className="text-blue-400" />,
    title: 'توسعه React و Next.js',
    text: 'پیاده‌سازی تمیز، مقیاس‌پذیر و سریع با کامپوننت‌های مدرن و معماری اصولی.',
    visual: <CodeVisual />,
    className: 'bg-blue-500/5',
  },
  {
    icon: <Zap className="text-amber-400" />,
    title: 'بهینه‌سازی سرعت و سئو',
    text: 'بهبود Core Web Vitals و ساختار معنایی برای رتبه بهتر و نرخ تبدیل بالاتر.',
    visual: <SpeedVisual />,
    className: 'bg-amber-500/5',
  },
  {
    icon: <ShieldCheck className="text-violet-400" />,
    title: 'امنیت و پایداری',
    text: 'رعایت پروتکل‌های امنیتی و تست‌های نفوذ برای اطمینان از عملکرد بی‌نقص محصول.',
    visual: <SecurityVisual />,
    className: 'lg:col-span-2 bg-violet-500/5',
  },
]

const projectsData = [
  {
    title: 'داشبورد SaaS مالی',
    tag: 'React • Charts • UX',
    color: 'from-emerald-500/20 via-zinc-900 to-zinc-900',
    description: 'داشبورد تحلیلی با کارت‌های هوشمند، جدول‌های سریع و تجربه مدیریتی ساده.',
    image: <ProjectVisual1 />,
    link: '#',
  },
  {
    title: 'لندینگ برند لوکس',
    tag: 'Branding • Motion',
    color: 'from-violet-500/20 via-zinc-900 to-zinc-900',
    description: 'صفحه فرود داستان‌محور با تصویرسازی مینیمال و انیمیشن‌های ظریف.',
    image: <ProjectVisual2 />,
    link: '#',
  },
  {
    title: 'فروشگاه محصول دیجیتال',
    tag: 'E-commerce • Tailwind',
    color: 'from-cyan-500/20 via-zinc-900 to-zinc-900',
    description: 'تجربه خرید سریع و واکنش‌گرا با صفحه محصول چشم‌نواز و جریان پرداخت روان.',
    image: <ProjectVisual3 />,
    link: '#',
  },
  {
    title: 'اپلیکیشن مدیریت وظایف',
    tag: 'PWA • Firebase',
    color: 'from-amber-500/20 via-zinc-900 to-zinc-900',
    description: 'ابزار مدیریت پروژه با قابلیت همگام‌سازی لحظه‌ای و دسترسی آفلاین.',
    image: <ProjectVisual4 />,
    link: '#',
  },
]

const stackItems = [
  'React', 'Next.js', 'TypeScript', 'TailwindCSS', 
  'Framer Motion', 'Vite', 'Node.js', 'PostgreSQL', 
  'Figma', 'GitHub', 'Vercel', 'Firebase'
]

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="min-h-screen bg-[#09090b] text-white selection:bg-emerald-500 selection:text-white" dir="rtl">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-[100%] z-[100]"
        style={{ scaleX }}
      />
      <CustomCursor />
      <AmbientBackground />
      <Navbar />
      <main>
        <Hero stats={stats} />
        <Services services={servicesData} />
        <Projects projects={projectsData} />
        <Process />
        <Stack items={stackItems} />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
