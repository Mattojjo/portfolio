import { useSectionVisible } from '../hooks/useSectionVisible';
import { projects, techIcons } from '../utils/constants';

export default function Projects() {
  const [sectionRef, isVisible] = useSectionVisible();

  const getTechIcon = (techName) => {
    const normalizedName = techName.toLowerCase().replace(/\s+/g, '');
    return techIcons.find(icon => {
      const normalizedIconName = icon.name.toLowerCase().replace(/\s+/g, '');
      return normalizedIconName.includes(normalizedName) || normalizedName.includes(normalizedIconName);
    });
  };

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
          {projects.map((project) => (
            <a
              key={project.key}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-gray-100 rounded-3xl neu-inset hover:scale-105 transition-all duration-500 block overflow-hidden group cursor-pointer min-h-[320px]"
            >
              <div className="relative z-20 p-8 transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-2xl font-bold text-orange-500 mb-4">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.reason}</p>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => {
                    const techIcon = getTechIcon(tech);
                    return (
                      <span
                        key={tech.key}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium neu-shadow flex items-center gap-1.5"
                      >
                        {techIcon && <span className="scale-90">{techIcon.svg}</span>}
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
              {/* on hover */}
              <div className="absolute inset-0 w-full h-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex">
                {/* Left Side */}
                <div className="w-1/2 p-8 flex items-center justify-center relative z-30">
                  {project.description ? (
                    <p className="text-gray-700 text-sm leading-relaxed">{project.description}</p>
                  ) : (
                    <p className="text-gray-500 italic text-sm">Click to view project</p>
                  )}
                </div>

                {/* Right Side */}
                <div className="w-1/2 relative">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full neu-inset rounded-3xl object-center scale-110 group-hover:scale-100 transition-all duration-500"
                    style={{ pointerEvents: 'none' }}
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}