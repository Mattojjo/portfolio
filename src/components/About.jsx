import { useEffect, useRef, useState } from 'react';

export default function About() {
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

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className={`py-20 bg-gray-100 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-100 p-8 rounded-3xl neu-shadow hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Combining Leadership & Technology
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Former Customer Experience Manager with nearly a decade of progressive leadership 
                at a Fortune 500 retailer, now delivering high-impact software using React, JavaScript, 
                Node.js, and modern frontend tooling.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Known for strong ownership, cross-functional collaboration, and a customer-first 
                engineering mindset. I design software with a real-world understanding of customers 
                and operations.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-100 p-8 rounded-3xl neu-shadow text-center hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="text-5xl font-bold bg-gradient-to-br from-orange-400 to-orange-500 bg-clip-text text-transparent mb-2">10+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div className="bg-gray-100 p-8 rounded-3xl neu-shadow text-center hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="text-5xl font-bold bg-gradient-to-br from-orange-400 to-orange-500 bg-clip-text text-transparent mb-2">50+</div>
                <div className="text-gray-600 text-sm">Projects Completed</div>
              </div>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-3xl neu-shadow hover:scale-[1.02] transition-all duration-300">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">What Sets Me Apart</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span className="text-gray-600">Real-world understanding of customers and operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span className="text-gray-600">Effective communication with technical and non-technical stakeholders</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span className="text-gray-600">Ownership, accountability, and leadership in every project</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span className="text-gray-600">Experience delivering solutions at enterprise scale</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
