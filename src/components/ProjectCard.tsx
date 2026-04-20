import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Project, CTA } from '@/data/projects';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { Toast } from '@/components/ui/Toast';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const handleCtaClick = (e: React.MouseEvent, cta: CTA) => {
    e.stopPropagation(); // Prevent card click

    if (cta.type === 'link') {
      window.open(cta.value, '_blank', 'noopener,noreferrer');
    } else if (cta.type === 'copy') {
      navigator.clipboard.writeText(cta.value);
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 2000);
    } else if (cta.type === 'modal') {
      setModalContent(cta.value);
      setModalOpen(true);
    }
  };

  return (
    <>
      <motion.div
        whileHover={{ y: -8, scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        onClick={() => navigate(`/projects/${project.slug}`)}
        className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/5 border border-gray-100 cursor-pointer transition-all duration-300 flex flex-col h-full min-h-[560px]"
      >
        {/* Cover Image */}
        <div className="aspect-[16/10] overflow-hidden bg-gray-100 relative shrink-0">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
            src={project.coverImage}
            alt={project.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/2 transition-colors duration-300" />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow">
          <div className="flex-1 px-6 py-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 tracking-tight">{project.name}</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500 whitespace-normal">{project.tagline}</p>
          </div>
          
          {/* CTAs */}
          <div className="px-6 pb-6 pt-2 mt-auto">
            <div className="flex flex-wrap gap-2">
              {project.ctas.map((cta, index) => (
                <Button
                  key={index}
                  variant={cta.style === 'primary' ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={(e) => handleCtaClick(e, cta)}
                  className="z-10"
                >
                  {cta.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <Modal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        content={modalContent} 
        title="Details"
      />
      
      <Toast isVisible={toastVisible} />
    </>
  );
}
