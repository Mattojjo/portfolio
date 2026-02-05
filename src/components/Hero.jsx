import { useEffect, useRef, useState } from 'react';
import profileImage from '../assets/lee.jpeg';

export default function Hero() {
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
      id="home" 
      className={`min-h-screen flex items-center justify-center bg-gray-100 pt-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-gray-500 text-lg">Hello! I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-800">
                Leinad Suarez
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600">
                I am a <span className="text-orange-500 font-semibold">Software Engineer</span>
              </p>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Results-driven developer with a unique blend of enterprise leadership and modern web development. 
              Building scalable solutions with React, JavaScript, and cutting-edge technologies.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#about" className="bg-gray-100 text-gray-800 px-8 py-4 rounded-2xl neu-shadow hover:neu-hover hover:scale-105 transition-all duration-300 font-semibold inline-block">
                Read More
              </a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="relative w-full aspect-square max-w-xl">
              <div className="bg-gray-100 rounded-full p-4 neu-shadow">
                <div className="rounded-full overflow-hidden neu-inset">
                  <img 
                    src={profileImage} 
                    alt="Leinad Suarez" 
                    className="w-full h-full object-cover scale-125 object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
