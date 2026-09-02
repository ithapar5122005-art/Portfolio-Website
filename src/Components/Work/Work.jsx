import { projects } from "../../Constants";

const Work = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.webapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-gradient-to-br from-blue-900/20 to-blue-950/20 border border-blue-500/30 rounded-lg overflow-hidden hover:border-blue-500/60 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <span className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                    GitHub
                  </span>
                  <span className="text-blue-500 hover:text-blue-400 text-sm font-medium">
                    Live Demo
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
