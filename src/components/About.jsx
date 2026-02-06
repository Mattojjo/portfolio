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

  function CheckIcon() {
    return <span className="text-orange-500 mt-1">✓</span>;
  }

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
        
        <div className="flex flex-col gap-8 md:gap-12 items-center">
          <div className="relative bg-gray-100 p-8 rounded-3xl neu-inset text-center hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden w-full max-w-xl mx-auto">
            <div className={`text-5xl font-bold bg-gradient-to-br from-orange-400 to-orange-500 bg-clip-text text-transparent mb-2 transition-transform duration-500 ${celebrate ? 'scale-[2.5]' : 'scale-100'}`}>{count}+</div>
            <div className="text-gray-600 text-md font-bold">Years of Experience</div>
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

          <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
            <div className="bg-gray-100 p-8 rounded-3xl neu-inset hover:scale-[1.02] transition-all duration-300 flex-1">
              <h4 className="text-2xl font-bold text-orange-500 mb-4">What Sets Me Apart</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-gray-600">Real-world understanding of customers and operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-gray-600">Effective communication with technical and non-technical stakeholders</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-gray-600">Ownership, accountability, and leadership in every project</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-gray-600">Experience delivering solutions at enterprise scale</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 p-8 rounded-3xl neu-inset hover:scale-[1.02] transition-all duration-300 flex-1">
              <h3 className="text-2xl text-orange-500 font-bold mb-4">
                Combining Leadership & Technology
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-gray-600">Former Customer Experience Manager with nearly a decade of progressive leadership at a Fortune 500 retailer, now delivering high-impact software using React, JavaScript, Node.js, and modern frontend tooling.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-gray-600">Known for strong ownership, cross-functional collaboration, and a customer-first engineering mindset. I design software with a real-world understanding of customers and operations.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
