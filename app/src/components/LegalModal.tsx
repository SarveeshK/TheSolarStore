import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const LegalModal = ({ isOpen, onClose, title, content }: LegalModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#0B1F4A]/60 backdrop-blur-sm">
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E2E8F0] bg-[#FAFBFC]">
          <h2 className="text-2xl font-medium text-[#0B1F4A]" style={{ fontFamily: 'Playfair Display, serif' }}>
            {title}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 text-[#64748B] hover:text-[#0B1F4A] hover:bg-[#E2E8F0] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
          <div 
            className="prose prose-slate max-w-none prose-headings:text-[#0B1F4A] prose-headings:font-medium text-[#64748B]"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
        
        {/* Footer */}
        <div className="p-6 border-t border-[#E2E8F0] bg-[#FAFBFC] flex justify-end">
          <button onClick={onClose} className="btn-luxury">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
