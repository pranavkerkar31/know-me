export default function Projects() {
  const projects = [
    {
      title: "Internship Portal",
      techStack: "Next.js, Tailwind CSS, Node.js, MySQL",
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=1770&q=80",
      live: "#",
      github: "#",
    },
    {
      title: "Pet Care Platform",
      techStack: "React, Express, MongoDB, Tailwind",
      role: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1598136498860-44da5e76c5c6?auto=format&fit=crop&w=800&q=80",
      live: "#",
      github: "#",
    },
    {
      title: "Portfolio Website",
      techStack: "Next.js, Lenis, Framer Motion",
      role: "Designer & Developer",
      image: "https://images.unsplash.com/photo-1603898037225-88d3d85f1d71?auto=format&fit=crop&w=800&q=80",
      live: "#",
      github: "#",
    },
    {
      title: "Weather App",
      techStack: "React, OpenWeatherMap API",
      role: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1604023481447-9a453b04f2e2?auto=format&fit=crop&w=800&q=80",
      live: "#",
      github: "#",
    },
    {
      title: "Chat App",
      techStack: "Socket.IO, Node.js, React",
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      live: "#",
      github: "#",
    },
  ];

  return (
    <section className="bg-[#0a0e1a] text-white py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#11182a] rounded-xl shadow-lg p-5"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-md h-48 w-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-indigo-400">{project.title}</h3>
            <p className="text-sm text-gray-300 mt-2">
              <strong>Tech Stack:</strong> {project.techStack}<br />
              <strong>Role:</strong> {project.role}
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={project.live}
                target="_blank"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded text-sm"
              >
                🌐 Live
              </a>
              <a
                href={project.github}
                target="_blank"
                className="border border-indigo-400 text-indigo-400 hover:bg-indigo-900 px-4 py-2 rounded text-sm"
              >
                💻 GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
