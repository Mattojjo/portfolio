import { useSectionVisible } from '../hooks/useSectionVisible';
import { techIcons } from '../utils/constants';

export default function Skills() {
const [sectionRef, isVisible] = useSectionVisible();

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className={`py-20 bg-gray-100 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Core Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-1 gap-8">
          <div className="bg-gray-100 p-8 rounded-3xl neu-inset hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl font-bold text-orange-500">Engineering & Technology</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {techIcons.map((skill, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2 px-5 py-3 bg-gray-100 text-gray-700 rounded-2xl text-sm font-medium neu-shadow hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  {skill.svg}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
