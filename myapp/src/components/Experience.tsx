export default function Experience() {
  const experiences = [
    {
      company: "Neural Kissan",
      role: "Full Stack Developer Intern",
      duration: "November 2025 – December 2025",
      description: [
        "Implemented ESP32-based local automation for pH control, lighting, and pump scheduling in hydroponics racks",
        "Developed a web dashboard to log, visualize, and monitor plant growth and harvest data",
        "Integrated cloud storage and backend APIs using AWS for data management and exports",
      ],
      techStack: ["Next.js", "Supabase", "LLM", "AWS", "ESP32"],
    },
    {
      company: "Fluxatic Global",
      role: "Techinal Intern",
      duration: "July 2025 – September 2025",
      description: [
        "Developed and maintained REST APIs for core application features",
        "Integrated frontend components using Next.js",
        "Improved backend performance by optimizing API queries",
        "Gained foundational knowledge in digital marketing and public speaking",
      ],
      techStack: ["Next.js", "Supabase", "LLM"],
    },
    {
      company: "Secretary of Department of Computer Engineering",
      role: "Leadership, Team Collaboration",
      duration: "Aug 2024 – Oct 2024",
      description: [
        "Served as Secretary of the C-Codes Computer Engineering Department",
        "Led planning and execution of Goa’s largest tech event, Inspirus 8",
        "Coordinated cross-functional teams for logistics, communication, and execution",
        "Successfully delivered a two-day event on October 10th and 11th focused on innovation and tech culture",
      ],
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
            <h3 className="text-xl font-semibold text-indigo-400">
              {exp.company}
            </h3>

            <p className="text-sm text-gray-400">
              {exp.role} • {exp.duration}
            </p>

            {/* ✅ Bullet points */}
            <ul className="mt-4 list-disc list-outside pl-5 text-justify space-y-3 text-gray-300">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {exp.techStack && (
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-indigo-900/40 text-indigo-300 px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
