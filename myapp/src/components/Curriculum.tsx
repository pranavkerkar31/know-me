interface CurriculumProps {
  title: string;
  description: string;
  date: string;
  Image: string;
}

const curriculumData: CurriculumProps[] = [
  {
    title: "Participated in HackIndia Hackathon",
    description: "Participated in a 2-day workshop on modern web dev practices.",
    date: "10,11 March 2025",
    Image: "/images/web-workshop.jpg",
  },
  {
    title: "Particpated in Internspirit Hackathon",
    description: "Reached the finals of a national-level hackathon hosted by XYZ.",
    date: "1,2 March 2025",
    Image: "/images/hackathon.jpg",
  },
  {
    title: "AI Certfication Course",
    description: "Completed an online course and earned certification in JS.",
    date: "July 2025 - Present",
    Image: "/images/js-cert.jpg",
  },
  {
    title: "Snapcode Showdown at IIT Goa",
    description: "Completed an online course and earned certification in JS.",
    date: "Jan 2025",
    Image: "/images/js-cert.jpg",
  },
  {
    title: "JS Certification",
    description: "Completed an online course and earned certification in JS.",
    date: "Aug 2023",
    Image: "/images/js-cert.jpg",
  },
  {
    title: "",
    description: "Completed an online course and earned certification in JS.",
    date: "Aug 2023",
    Image: "/images/js-cert.jpg",
  },
  {
    title: "Joy of Computing using Python",
    description: "Completed an online course and earned certification in JS.",
    date: "Aug 2023",
    Image: "/images/js-cert.jpg",
  },
   {
    title: "Interclass Fustal Winner",
    description: "Completed an online course and earned certification in JS.",
    date: "May 2023",
    Image: "/images/js-cert.jpg",
  },
  {
    title: "Volunteer at INEX",
    description: "Completed an online course and earned certification in JS.",
    date: "April 2022",
    Image: "/images/js-cert.jpg",
  },
];

export default function CurriculumList() {
  return (
    <section className="bg-[#0a0e1a] py-16 px-6">
      <h2 className="text-3xl font-bold text-white text-center mb-10">Curriculum</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {curriculumData.map((item, index) => (
          <div
            key={index}
            className="bg-[#111827] text-white rounded-xl shadow-lg overflow-hidden w-full sm:w-[300px] transition-transform hover:scale-105"
          >
            <img src={item.Image} alt={item.title} className="h-40 w-full object-cover" />

            <div className="p-4">
              <h3 className="text-lg font-semibold text-indigo-400">{item.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{item.date}</p>
              <p className="text-sm mt-2 text-gray-200">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
