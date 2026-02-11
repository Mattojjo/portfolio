import { useSectionVisible } from '../hooks/useSectionVisible';
import { projects } from '../utils/constants';

export default function Projects() {
  const [sectionRef, isVisible] = useSectionVisible();

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={`py-20 bg-gray-100 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-gray-100 rounded-3xl neu-inset hover:scale-[1.02] transition-all duration-300 block overflow-hidden group min-h-[320px]"
            >
              {/* Image fills tile, overlays with gradient for readability */}
              <div className="absolute inset-0 w-full h-full z-10">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover opacity-0 group-hover:opacity-100 scale-110 group-hover:scale-100 transition-all duration-500 rounded-3xl"
                  style={{ pointerEvents: 'none' }}
                />
              </div>
              <div className="relative z-20 p-8 transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-2xl font-bold text-orange-500 mb-4">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium neu-shadow"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}