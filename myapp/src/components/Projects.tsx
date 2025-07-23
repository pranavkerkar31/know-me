export default function Projects() {
  const projects = [
    {
      title: "JCI Official Website",
      techStack: "Next.js, Tailwind CSS",
      image: "/jci.png",
      live: "https://jciponda.in",
      github: "https://github.com/ShrinivasInamdar/JCI-PONDA",
    },
    {
      title: "Pawsnet",
      techStack: "Next.js,Tailwind CSS, Superbase",
      image: "/pawsnet.png",
      live: "https://pawsnet.vercel.app/",
      github: "https://github.com/25Jayesh10/Pawsnet",
    },
    {
      title: "Pawesome",
      techStack: "HTML,CSS,JavaScript, Django Python",
      image: "/pawsome.png",
      live: "https://youtu.be/6vkLMbO0dBc",
      github: "#",
    },
    {
      title: "Mini Crud App",
      techStack: "Next.js, Next.js API, MongoDB",
      image: "/crud.png",
      // live: "#",
      github: "https://github.com/pranavkerkar31/MongoDB-CRUD-Operations",
    },
    {
      title: "Decentralized Payments Gateway",
      techStack: "Next.js, Node.js, ethers library, Solidity, Wallet Connect",
      image: "/web3.png",
      // live: "#",
      github: "https://github.com/jayraneo/HACKINDIA2025-SPARK-3--BLOCK-CODERS",
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
              className="rounded-md h-48 w-full object-fill mb-4"
            />
            <h3 className="text-xl font-semibold text-indigo-400">{project.title}</h3>
            <p className="text-sm text-gray-300 mt-2">
              <strong>Tech Stack:</strong> {project.techStack}<br />

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
