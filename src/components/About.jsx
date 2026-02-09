import { useEffect, useRef, useState, useCallback } from 'react';
import Confetti from 'react-confetti';

function CheckIcon() {
  return <span className="text-orange-500 mt-1">✓</span>;
}

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [celebrate, setCelebrate] = useState(false);
  const sectionRef = useRef(null);
  const hasCelebratedRef = useRef(false);

  const hasAnimated = count >= 10;

  const triggerCelebration = useCallback(() => {
    if (!hasCelebratedRef.current) {
      hasCelebratedRef.current = true;
      setCelebrate(true);
      setTimeout(() => {
        setCelebrate(false);
      }, 1500);
    }
  }, []);

  useEffect(() => {
    const element = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
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
  }, [hasAnimated]);

  useEffect(() => {
    if (isVisible && count < 10) {
      const timer = setTimeout(() => {
        setCount(prevCount => prevCount + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, count]);

  useEffect(() => {
    if (count === 10) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      triggerCelebration();
    }
  }, [count, triggerCelebration]);

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
              <Confetti
                gravity={0.2}
                recycle={false}
                numberOfPieces={6000}
                colors={['#f97316', '#fb923c', '#fdba74', '#fed7aa', '#ffedd5']}
              />
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
