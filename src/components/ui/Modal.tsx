import { AnimatePresence, motion } from 'motion/react';
import { X, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { Button } from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: string;
  title?: string;
}

export function Modal({ isOpen, onClose, content, title = "Details" }: ModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
          />
          
          {/* Modal Content */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-md bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden pointer-events-auto"
            >
              <div className="flex items-center justify-between p-4 border-b border-black/5">
                <h3 className="font-semibold text-black/80">{title}</h3>
                <button 
                  onClick={onClose}
                  className="p-1 rounded-full hover:bg-black/5 transition-colors text-black/50 hover:text-black"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6">
                <div className="bg-black/5 rounded-xl p-4 mb-6 break-all font-mono text-sm text-black/70">
                  {content}
                </div>
                
                <div className="flex gap-3 justify-end">
                  <Button variant="secondary" onClick={onClose} size="sm">
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleCopy} size="sm" className="gap-2">
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    {copied ? 'Copied' : 'Copy'}
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
