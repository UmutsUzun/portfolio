import projects from "../data/projects";

export default function Projects() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        My Projects
      </h1>

      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <div key={project.id} className="border-b pb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {project.title}
            </h2>

            <p className="text-gray-600 mt-2">{project.description}</p>

            {/* GitHub and Live Links */}
            <div className="mt-4 flex gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View on GitHub
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  Live Demo
                </a>
              )}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
