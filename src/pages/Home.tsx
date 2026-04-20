import { Hero } from '@/components/Hero';
import { ProjectGrid } from '@/components/ProjectGrid';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-black/10"
    >
      <Hero />
      <ProjectGrid />
      
      <footer className="py-12 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Jenelle. All rights reserved.</p>
      </footer>
    </motion.main>
  );
}
