import { useEffect, useRef, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [celebrate, setCelebrate] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
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
  }, [hasAnimated]);

  useEffect(() => {
    if (isVisible && count < 10) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 100);
      return () => clearTimeout(timer);
    } else if (count === 10 && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, count, hasAnimated]);

  useEffect(() => {
    if (count === 10) {
      setCelebrate(true);
      const timer = setTimeout(() => {
        setCelebrate(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [count]);

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
            <div className="bg-gray-100 p-8 rounded-3xl neu-inset hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-3xl text-orange-500 font-semibold mb-4">
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
            <div className="relative bg-gray-100 p-8 rounded-3xl neu-inset text-center hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden">
              <div className={`text-5xl font-bold bg-gradient-to-br from-orange-400 to-orange-500 bg-clip-text text-transparent mb-2 transition-transform duration-500 ${celebrate ? 'scale-[2]' : 'scale-100'}`}>{count}+</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
              
              {/* Confetti */}
              {celebrate && (
                <>
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 rounded-full pointer-events-none"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: '-10px',
                        backgroundColor: ['#f97316', '#fb923c', '#fdba74', '#fed7aa', '#ffedd5'][Math.floor(Math.random() * 5)],
                        animation: `confetti-fall ${1 + Math.random() * 1.5}s linear forwards`,
                        animationDelay: `${Math.random() * 0.3}s`,
                      }}
                    />
                  ))}
                </>
              )}
            </div>
            
            <div className="bg-gray-100 p-8 rounded-3xl neu-inset hover:scale-[1.02] transition-all duration-300">
              <h4 className="text-xl font-semibold text-orange-500 font-semibold mb-4">What Sets Me Apart</h4>
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
