import { useState, useEffect, useRef } from 'react';
import { navItems } from '../utils/constants';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    let ticking = false;

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

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', onScroll);
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
    <nav className="fixed top-0 w-full z-50 bg-transparent">
      <div className="max-w-4xl mx-auto px-3 sm:px-6 py-4 sm:py-6">
        <div className="flex justify-center items-center backdrop-blur-xl rounded-3xl h-12 w-full">
          <div ref={navRef} className="relative flex gap-4 sm:gap-8 pb-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                data-section={item.id}
                className={`relative z-10 px-1 py-2 font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base whitespace-nowrap ${
                  activeSection === item.id
                    ? 'text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
              </a>
            ))}

            <div
              className={`absolute bottom-0 h-0.5 bg-gradient-to-r from-orange-500 to-brew-600 rounded-full transition-all duration-300 ease-out ${
                isTransitioning ? 'scale-x-50 opacity-60' : 'scale-x-100 opacity-100'
              }`}
              style={{
                left: `${indicatorStyle.left}px`,
                width: `${indicatorStyle.width}px`,
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
