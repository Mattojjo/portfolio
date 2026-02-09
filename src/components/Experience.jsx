import { useState, useEffect, useRef } from 'react';


export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
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
              className="bg-gray-100 p-8 rounded-3xl neu-inset hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-orange-500 transition">
                  {exp.role}
                </h3>
                <p className="text-lg text-orange-500 font-semibold mt-1">{exp.company} • {exp.period}</p>
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
      </div>
    </section>
  );
}
