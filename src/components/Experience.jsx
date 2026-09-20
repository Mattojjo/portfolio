import { useSectionVisible } from '../hooks/useSectionVisible';
import { experiences } from '../utils/constants';
import resume from "../assets/docss/Leinad's Resume.pdf";

export default function Experience() {
const [sectionRef, isVisible] = useSectionVisible();

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className={`py-20 bg-gray-100 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-brew-600 mx-auto rounded-full"></div>
        </div>
        <div className="max-w-3xl mx-auto text-center text-gray-700 mb-8">
          <p className="text-lg">Before transitioning into software engineering, I spent over a decade in leadership and customer-facing roles.</p>
          <div className="mt-4">
            <a
              href={resume}
              download="Leinad_Suarez_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-brew-600 hover:from-orange-600 hover:to-brew-700 text-white rounded-md transition-all duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              Resume
            </a>
          </div>
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-gray-100 p-8 rounded-3xl neu-inset hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-800 group-hover:from-orange-500 group-hover:to-brew-600 bg-clip-text text-transparent transition-all duration-300">
                  {exp.role}
                </h3>
                <p className="text-lg font-semibold mt-1 bg-gradient-to-r from-orange-500 to-brew-600 bg-clip-text text-transparent">{exp.company} • {exp.period}</p>
              </div>
              
              <p className="text-gray-600 mb-4">{exp.description}</p>
              
              <div className="space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="bg-gradient-to-r from-orange-500 to-brew-600 bg-clip-text text-transparent mt-1">▸</span>
                    <span className="text-gray-600">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
