import { useState, useEffect, useRef } from 'react';
import { navItems } from '../utils/constants';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const isNearBottom = scrollTop + windowHeight >= documentHeight - 100;

      let currentSection = sections[0];

      if (isNearBottom) {
        currentSection = sections[sections.length - 1];
      } else {
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop } = element;
            if (scrollPosition >= offsetTop) {
              currentSection = section;
            }
          }
        }
      }

      if (currentSection !== activeSection) {
        setIsTransitioning(true);
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  useEffect(() => {
    const updateIndicator = () => {
      const activeLink = navRef.current?.querySelector(`[data-section="${activeSection}"]`);
      if (activeLink) {
        const { offsetLeft, offsetWidth } = activeLink;
        setIndicatorStyle({
          left: offsetLeft,
          width: offsetWidth,
        });
        
        setTimeout(() => setIsTransitioning(false), 100);
      }
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeSection]);

  return (
    <nav className="fixed top-0 w-full bg-gray-100 z-50">
      <div className="max-w-4xl mx-auto px-3 sm:px-6 py-4 sm:py-6">
        <div className="flex justify-center items-center">
          <div ref={navRef} className="relative flex gap-0.5 sm:gap-5 bg-white px-2 sm:px-3 py-2.5 sm:py-3 rounded-full neu-inset overflow-x-auto max-w-full">
            <div
              className={`absolute top-2.5 sm:top-3 h-[calc(100%-1.25rem)] sm:h-[calc(100%-1.5rem)] bg-gradient-to-br from-orange-400 to-orange-500 rounded-full transition-all duration-300 ease-out shadow-lg backdrop-blur-sm ${
                isTransitioning ? 'scale-50' : 'scale-100'
              }`}
              style={{
                left: `${indicatorStyle.left}px`,
                width: `${indicatorStyle.width}px`,
              }}
            />
            
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                data-section={item.id}
                className={`relative z-10 px-2.5 sm:px-4 md:px-6 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base whitespace-nowrap ${
                  activeSection === item.id
                    ? 'text-white drop-shadow-md'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
