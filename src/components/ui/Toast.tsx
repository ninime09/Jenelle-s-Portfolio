import { AnimatePresence, motion } from 'motion/react';
import { Check } from 'lucide-react';

interface ToastProps {
  isVisible: boolean;
  message?: string;
}

export function Toast({ isVisible, message = "Copied to clipboard" }: ToastProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2.5 bg-black/80 backdrop-blur-md text-white text-sm font-medium rounded-full shadow-lg"
        >
          <div className="bg-white/20 rounded-full p-0.5">
            <Check size={12} className="text-white" />
          </div>
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
