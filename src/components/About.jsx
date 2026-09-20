import { useSectionVisible } from '../hooks/useSectionVisible';

function CheckIcon() {
  return <span className="bg-gradient-to-r from-orange-500 to-brew-600 bg-clip-text text-transparent mt-1">✓</span>;
}

function CoffeeIcon() {
  return (
    <div className="w-12 h-12 bg-gray-100 rounded-xl neu-flat flex items-center justify-center relative">
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9z" fill="#8b5e3c" />
        <path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17" stroke="#6f4a2e" strokeWidth="1.4" fill="none" />
        <rect x="3" y="18" width="15" height="1.6" rx="0.8" fill="#6f4a2e" />
      </svg>
      <svg className="absolute w-6 h-8 -top-6 left-1/2 -translate-x-1/2" viewBox="0 0 12 16" fill="none">
        <path className="animate-steam-1" d="M3 14C1 11 5 9 3 6" stroke="#c9a688" strokeWidth="1.4" strokeLinecap="round" />
        <path className="animate-steam-2" d="M6 14C4 11 8 9 6 6" stroke="#c9a688" strokeWidth="1.4" strokeLinecap="round" />
        <path className="animate-steam-3" d="M9 14C7 11 11 9 9 6" stroke="#c9a688" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function FilmReelIcon() {
  return (
    <div className="w-12 h-12 bg-gray-100 rounded-xl neu-flat flex items-center justify-center">
      <svg className="w-6 h-6 animate-reel-spin" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#8b5e3c" strokeWidth="1.6" />
        <circle cx="12" cy="7" r="1.8" fill="#8b5e3c" />
        <circle cx="16.5" cy="14.5" r="1.8" fill="#8b5e3c" />
        <circle cx="7.5" cy="14.5" r="1.8" fill="#8b5e3c" />
        <circle cx="12" cy="12" r="1.6" fill="#8b5e3c" />
      </svg>
    </div>
  );
}

function CodeIcon() {
  return (
    <div className="w-12 h-12 bg-gray-100 rounded-xl neu-flat flex items-center justify-center gap-0.5">
      <span className="bg-gradient-to-r from-orange-500 to-brew-600 bg-clip-text text-transparent font-bold text-sm">{'</>'}</span>
      <span className="w-[2px] h-3.5 bg-gradient-to-b from-orange-500 to-brew-600 animate-blink-cursor" />
    </div>
  );
}

export default function About() {
const [sectionRef, isVisible] = useSectionVisible();

  const traits = [
    'Experience delivering solutions at enterprise scale',
    'Ownership, accountability, and leadership',
    'Communication with technical and non-technical stakeholders',
    'Real-world understanding of customers and operations',
  ];

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
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-brew-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="max-w-2xl mx-auto text-center text-gray-700 mb-0 bg-gray-100 p-8 rounded-3xl neu-inset hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-brew-600 bg-clip-text text-transparent mb-4">Who am I</h3>
            <p className="text-md">
              Software engineer by trade, cinema buff by choice, and powered by an unreasonable amount of espresso. I get a genuine kick out of turning messy problems into simple, solid interfaces—then celebrating with a good movie and a fresh cup. Always tinkering, always learning, usually mid-refactor.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <CodeIcon />
              <FilmReelIcon />
              <CoffeeIcon />
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-3xl neu-inset hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-brew-600 bg-clip-text text-transparent mb-4">What Sets Me Apart</h3>
              <ul className="space-y-3">
                {traits.map((trait, index) => (
                  <li
                    key={trait}
                    className={`flex items-start gap-3 ${isVisible ? 'animate-checklist-in' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 220}ms` }}
                  >
                    <CheckIcon />
                    <span className="text-gray-600">{trait}</span>
                  </li>
                ))}
              </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

