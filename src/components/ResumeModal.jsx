import { useRef, useEffect, useState } from 'react';
import profileImage from '../assets/lee.jpeg';
import resumePDF from '../assets/Lee – Professional Resume.pdf';

export default function ResumeModal({ isOpen, onClose }) {
  const resumeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);
  
  if (!isOpen) return null;
  
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 300);
  };
  
  const handleDownload = () => {
    // Create a link and trigger download
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Leinad_Suarez_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const handleEmail = () => {
    const subject = encodeURIComponent('Leinad Suarez - Resume');
    const body = encodeURIComponent('Hi,\n\nPlease find my resume attached.\n\nBest regards,\nLeinad Suarez\nleinad9607@gmail.com');
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };
  
  const handleViewPDF = () => {
    window.open(resumePDF, '_blank');
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className={`bg-white rounded-lg shadow-2xl w-full max-w-6xl h-[95vh] overflow-hidden flex flex-col transition-all duration-300 ${
        isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}>
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h2 className="text-xl font-bold text-gray-900">Resume Preview</h2>
          <button 
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition p-1"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* PDF Viewer */}
        <div className="flex-1 overflow-hidden bg-gray-100">
          <iframe
            src={resumePDF}
            className="w-full h-full"
            title="Resume PDF"
          />
        </div>
        
        {/* Footer Actions */}
        <div className="flex gap-4 p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={handleDownload}
            className="flex-1 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PDF
          </button>
          <button
            onClick={handleViewPDF}
            className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Open in New Tab
          </button>
          <button
            onClick={handleEmail}
            className="flex-1 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Share via Email
          </button>
        </div>
      </div>
    </div>
  );
}
