import { useSectionVisible } from '../hooks/useSectionVisible';

function CheckIcon() {
  return <span className="text-orange-500 mt-1">✓</span>;
}

export default function About() {
const [sectionRef, isVisible] = useSectionVisible();

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
        <div className="grid md:grid-cols-2 gap-8">
          <div className="max-w-2xl mx-auto text-center text-gray-700 mb-0 bg-gray-100 p-8 rounded-3xl neu-inset hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">Who am I</h3>
            <p className="text-md">
              Software engineer, cinema lover, and big-time coffee fan. I spend my time building simple interfaces that solve real-world problems. I love a good challenge and I’m always learning something new—usually with a fresh espresso in hand.
            </p>
          </div>

          <div className="bg-gray-100 p-8 rounded-3xl neu-inset hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">What Sets Me Apart</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-gray-600">Experience delivering solutions at enterprise scale</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-gray-600">Ownership, accountability, and leadership</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-gray-600">Communication with technical and non-technical stakeholders</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-gray-600">Real-world understanding of customers and operations</span>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
