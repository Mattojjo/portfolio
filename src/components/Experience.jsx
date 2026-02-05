import { useState, useEffect, useRef } from 'react';
import ResumeModal from './ResumeModal';

export default function Experience() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const experiences = [
    {
      role: 'Software Engineer',
      company: 'The Home Depot',
      period: '2023 - Present',
      description: 'Contributing to enterprise digital teams, building React and Next.js applications, integrating APIs with Node.js and SQL.',
      highlights: [
        'Migrated headless CMS to Contentful',
        'Built AI-powered customer assistance tools',
        'Improved content infrastructure for large-scale platforms'
      ],
      color: 'orange'
    },
    {
      role: 'Customer Experience Manager',
      company: 'The Home Depot',
      period: '2020 - 2023',
      description: 'Led daily store operations with responsibility for customer satisfaction, associate performance, and operational execution.',
      highlights: [
        'Primary escalation point for customers and associates',
        'Improved customer experience scores',
        'Developed strong business acumen and analytics skills'
      ],
      color: 'orange'
    },
    {
      role: 'Department Manager',
      company: 'The Home Depot',
      period: '2017 - 2020',
      description: 'Managed teams across multiple departments including Lumber, Garden, Receiving, and Customer Service.',
      highlights: [
        'Oversaw staffing and performance management',
        'Analyzed metrics to drive improvements',
        'Supported cross-department initiatives'
      ],
      color: 'orange'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="work" 
      className={`py-20 bg-gray-100 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-gray-100 p-8 rounded-3xl neu-shadow hover:scale-[1.02] hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-orange-500 transition">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-gray-600 mt-1">{exp.company}</p>
                </div>
                <span className="px-6 py-2 bg-gray-100 text-gray-700 rounded-2xl text-sm font-medium neu-flat whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">{exp.description}</p>
              
              <div className="space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-orange-500 mt-1">▸</span>
                    <span className="text-gray-600">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-br from-orange-400 to-orange-500 text-white px-10 py-4 rounded-2xl neu-shadow hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold"
          >
            View Full Resume
          </button>
        </div>
      </div>
      
      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
