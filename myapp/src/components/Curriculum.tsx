'use client';
import Image from 'next/image';

interface CurriculumProps {
  title: string;
  description: string;
  date: string;
  Image: string;
}

const curriculumData: CurriculumProps[] = [
  {
    title: "AI Certification Course",
    description: "Currently enrolled in an AI course covering ML, DL, and LLMs.",
    date: "July 2025 - Present",
    Image: "",
  },
  {
    title: "Participated in HackIndia Hackathon",
    description: "Worked on real-world problems in a 2-day intense coding event.",
    date: "10,11 March 2025",
    Image: "/hackindia.jpg",
  },
  {
    title: "Participated in Internspirit Hackathon",
    description: "Built an innovative solution in a 2-day national hackathon.",
    date: "1,2 March 2025",
    Image: "/internspirit.JPG",
  },
  {
    title: "Snapcode Showdown at IIT Goa",
    description: "Tested coding speed and logic under pressure at IIT Goa.",
    date: "Jan 2025",
    Image: "/iit.png",
  },
  {
    title: "Joy of Computing using Python",
    description: "Learned fundamentals of Python and computing through NPTEL.",
    date: "Jul - Oct 2023",
    Image: "/python.png",
  },
  {
    title: "AI/ML Virtual Internship",
    description: "Completed virtual internship focusing on ML & data science.",
    date: "April - June 2024",
    Image: "/aiml.png",
  },
  {
    title: "Interclass Futsal Winner",
    description: "Won interclass tournament demonstrating teamwork and strategy.",
    date: "May 2023",
    Image: "/futsal.jpg",
  },
  {
    title: "Volunteer at INEX",
    description: "Helped manage college-level exhibition and guided guests.",
    date: "November 2022",
    Image: "/inex.png",
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
            {item.Image && (
              <div className="relative h-52 w-full">
                <Image
                  src={item.Image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              </div>
            )}

            <div className="p-4">
              <h3 className="text-lg font-semibold text-indigo-400">{item.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{item.date}</p>
              {/* <p className="text-sm mt-2 text-gray-200">{item.description}</p> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
