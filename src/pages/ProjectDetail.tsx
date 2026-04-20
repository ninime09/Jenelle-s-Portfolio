import { useParams, useNavigate } from 'react-router-dom';
import { projects, CTA } from '@/data/projects';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Github } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Modal } from '@/components/ui/Modal';
import { Toast } from '@/components/ui/Toast';

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);
  
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Project not found</h1>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </div>
    );
  }

  const handleCtaClick = (cta: CTA) => {
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen bg-white"
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 p-6 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            Back
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">{project.name}</h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light">{project.tagline}</p>
        </div>

        {/* Cover Image */}
        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 mb-12 aspect-video bg-gray-100">
          <img 
            src={project.coverImage} 
            alt={project.name} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-16">
          {project.ctas.map((cta, index) => {
            const isGithub = /github/i.test(cta.label);
            return (
              <Button
                key={index}
                variant={cta.style === 'primary' ? 'primary' : 'secondary'}
                size="lg"
                onClick={() => handleCtaClick(cta)}
                className="gap-2"
              >
                {isGithub && <Github size={18} />}
                {cta.label}
              </Button>
            );
          })}
        </div>

        {/* Description */}
        {project.description && (
          <div className="prose prose-lg prose-gray max-w-none mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">About the Project</h2>
            <p className="text-gray-600 leading-relaxed">{project.description}</p>
          </div>
        )}

        {/* Tech Stack */}
        {project.techStack && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-3">
              <span>🛠</span> 技术栈
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.techStack.frontend && project.techStack.frontend.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">前端</h3>
                  <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-1">
                    {project.techStack.frontend.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {project.techStack.backend && project.techStack.backend.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">后端</h3>
                  <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-1">
                    {project.techStack.backend.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {project.techStack.database && project.techStack.database.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">数据库</h3>
                  <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-1">
                    {project.techStack.database.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {project.techStack.ai && project.techStack.ai.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">AI 能力</h3>
                  <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-1">
                    {project.techStack.ai.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        </main>

      <Modal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        content={modalContent} 
        title="Details"
      />
      
      <Toast isVisible={toastVisible} />
    </motion.div>
  );
}
