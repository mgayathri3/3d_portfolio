import { projects } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Projects = () => {
  return (
    <section id="projects" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Projects"
          sub="Showcase of my recent work"
        />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-16">
          {projects.map((project, index) => (
            <div key={index} className="h-full">
              <GlowCard card={project} index={index}>
                <div className="flex flex-col h-full">
                  <div className="mb-4 flex-shrink-0">
                    <img 
                      src={project.imgPath} 
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white-70 mb-4 flex-grow">{project.description}</p>
                    
                    <div className="mb-4">
                      <p className="text-sm text-white-50 mb-2">Tech Stack:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 items-center mt-auto">
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors cursor-pointer"
                        aria-label="View on GitHub"
                      >
                        <svg 
                          className="w-9 h-9 text-white m-auto" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
