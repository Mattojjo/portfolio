import { useEffect, useRef, useState } from 'react';

export default function Skills() {
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

  const techSkills = [
    'JavaScript (ES6+)',
    'React',
    'Next.js',
    'Node.js',
    'Spring Boot',
    'SQL',
    'REST APIs',
    'TailwindCSS',
    'Vite',
    'Contentful'
  ];
  
  const softSkills = [
    'Team Management',
    'Customer Experience',
    'Operational Excellence',
    'Data-Driven Decision Making',
    'Cross-Functional Collaboration',
    'Problem Solving'
  ];

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className={`py-20 bg-gray-100 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Core Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-8 rounded-3xl neu-shadow hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center neu-shadow-sm hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Engineering & Technology</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {techSkills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-5 py-3 bg-gray-100 text-gray-700 rounded-2xl text-sm font-medium neu-flat hover:neu-shadow hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-100 p-8 rounded-3xl neu-shadow hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center neu-shadow-sm hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Leadership & Business</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-5 py-3 bg-gray-100 text-gray-700 rounded-2xl text-sm font-medium neu-flat hover:neu-shadow hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
