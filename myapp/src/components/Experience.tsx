export default function Experience() {
  const experiences = [
    {
      company: "Intern at Fluxatic Global",
      role: "Full Stack Developer Intern",
      duration: "July 2025 – Present",
      description:
        "Worked on developing REST APIs and integrating frontend features using React and Express. Improved performance by optimizing API queries.",
      techStack: "React, Node.js, Express, MongoDB",
    },
    {
      company: "Secretary of Department of Computer Engineering ",
      role: "Leadership, Team Collaboration",
      duration: "Aug 2024 – Oct 2024",
      description:
        "In 2024, I served as Secretary of the C-Codes Computer Engineering Department, where I played a key role in planning and execution. Together with an incredible team, we brought Goa’s biggest tech spectacle—Inspirus 8—to life on October 10th and 11th. The event blended innovation, tech culture, and collaboration",
      // techStack: "Next.js, Git, Markdown",
    },
  ];

  return (
    <section className="bg-[#0a0e1a] text-white py-16 px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-[#111827] rounded-xl p-6 shadow-lg transition-transform duration-300 hover:scale-[1.02]"
          >
            <h3 className="text-xl font-semibold text-indigo-400">{exp.company}</h3>
            <p className="text-sm text-gray-400">{exp.role} • {exp.duration}</p>
            <p className="mt-3 text-gray-300">{exp.description}</p>
            {/* <p className="mt-2 text-sm text-gray-400"><strong>Tech Stack:</strong> {exp.techStack}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
}
