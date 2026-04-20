import { motion } from 'motion/react';
import { ChevronDown, Github } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-[50vh] min-h-[420px] w-full flex items-center justify-center overflow-hidden">
      {/* Background with Noise & Gradient - Updated to Light Blue/Cyan theme */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDFEFF] via-[#F3F8FF] to-[#EAF2FF]" />
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` 
          }}
        />
        {/* Subtle breathing glow - Updated colors to match theme */}
        <motion.div 
          animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#629BB5]/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#447F98]/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content Card */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-3xl w-full mx-4"
      >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#111827] mb-6 leading-tight">
            Hi，我是 Jenelle 🐰
          </h1>
          <p className="text-xl md:text-2xl font-medium text-[#374151] mb-8 tracking-wide">
            很高兴能与您分享我的AI小工具们。Have a great one!
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <p className="text-xl md:text-m font-medium text-[#3F3F46] tracking-wide mb-0">
              📧email: njmay0902@163.com
            </p>

            <a
              href="https://github.com/ninime09"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 h-9 rounded-full bg-white/60 hover:bg-white/90 backdrop-blur-sm border border-black/10 text-[#111827] text-sm font-medium transition-all hover:scale-[1.03]"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
          </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1, duration: 1 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-gray-500/60"
      >
        <ChevronDown size={32} strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}
