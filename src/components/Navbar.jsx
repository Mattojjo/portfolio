import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'work'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (section !== activeSection) {
              setIsTransitioning(true);
              setActiveSection(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    
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
        
        // End transition after animation completes
        setTimeout(() => setIsTransitioning(false), 100);
      }
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeSection]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Work' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-100 z-50">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="flex justify-center items-center">
          <div ref={navRef} className="relative flex gap-2 bg-white px-3 py-3 rounded-full neu-shadow">
            <div
              className={`absolute top-3 h-[calc(100%-1.5rem)] bg-gradient-to-br from-orange-400 to-orange-500 rounded-full transition-all duration-300 ease-out shadow-lg backdrop-blur-sm ${
                isTransitioning ? 'scale-30' : 'scale-100'
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
                className={`relative z-10 px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-white'
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
