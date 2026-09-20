import { useEffect, useState } from 'react';
import profileImage from '../assets/lee.jpeg';
import { techIcons } from '../utils/constants';

const roles = ['Software Engineer', 'Operations Manager', 'Team Builder'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gray-100 pt-20"
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
                I am a{' '}
                <span
                  key={roleIndex}
                  className="bg-gradient-to-r from-orange-500 to-brew-600 bg-clip-text text-transparent font-bold inline-block animate-role-fade"
                >
                  {roles[roleIndex]}
                </span>
              </p>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Over caffeinated developer with a unique blend of enterprise leadership and modern web development. 
              Building scalable solutions with React, JavaScript, and cutting-edge technologies.
            </p>
            <div className="pt-8">
              <div className="flex flex-wrap items-center gap-4">
                {techIcons.map((icon, index) => (
                  <div key={icon.key} className="relative group">
                    <div className={`w-12 h-12 bg-gray-100 rounded-xl neu-flat flex items-center justify-center animate-scale-wave-${index + 1}`}>
                      {icon.svg}
                    </div>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                      {icon.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="relative w-full aspect-square max-w-xl">
              <div className="bg-gray-100 p-4 neu-shadow animate-blob" style={{
                borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
              }}>
                <div className="overflow-hidden neu-inset animate-blob-reverse" style={{
                  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
                }}>
                  <img 
                    src={profileImage} 
                    alt="Leinad Suarez" 
                    width="800"
                    height="1066"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
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
