'use client';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <section>
      <div className="bg-black mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-left">
              <h2 className="text-4xl font-bold text-white sm:text-5xl">
                👋 Hello, I'm <span className="text-indigo-500">Pranav Kerkar</span>
              </h2>

              <h3 className="mt-2 text-2xl font-semibold text-gray-200 sm:text-3xl">
                A passionate Full Stack Developer
              </h3>

              <p className="mt-4 text-base text-gray-400 sm:text-lg">
                I love building modern, responsive, and interactive web applications.
                Let's turn ideas into digital experiences.
              </p>

              <div className="mt-6 flex gap-4">
                <a
                  href="/Pranav_Resume.pdf"
                  className="inline-block rounded border border-white bg-white px-6 py-3 text-sm font-medium text-black hover:bg-transparent hover:text-white transition"
                >
                  My Resume
                </a>
              </div>

              <div className="mt-6 flex gap-6 text-white text-2xl">
                <a href="https://www.linkedin.com/in/pranav-kerkar-900432253" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="hover:text-indigo-400 transition" />
                </a>
                <a href="https://www.instagram.com/pranav_kerkar" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="hover:text-pink-500 transition" />
                </a>
                <a href="https://github.com/pranavkerkar31" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="hover:text-gray-400 transition" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <Image
              alt="Pranav Kerkar"
              src="/profile.jpg"
              width={500}
              height={500}
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />

            <Image
              alt=""
              src="/profile2.jpg"
              width={500}
              height={500}
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />

          </div>
        </div>
      </div>
    </section>
  );
}
