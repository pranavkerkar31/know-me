'use client';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
        <div className="max-w-prose text-left">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            👋 Hello, I'm <span className="text-indigo-600">Pranav Kerkar</span>
          </h1>

          <h2 className="mt-2 text-2xl font-semibold text-gray-800 sm:text-3xl">
            A passionate Full Stack Developer
          </h2>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
            I love building modern, responsive, and interactive web applications. Let's turn ideas into digital experiences.
          </p>

          {/* Buttons */}
          <div className="mt-4 flex gap-4 sm:mt-6">
            <a
              className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
              href="#"
            >
              Get Started
            </a>
            <a
              className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
              href="#"
            >
              Learn More
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-3 flex gap-6 text-gray-700 text-2xl">
            <a href="https://www.linkedin.com/in/pranav-kerkar" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="hover:text-indigo-600 transition-colors duration-200" />
            </a>
            <a href="https://www.instagram.com/pranav_kerkar" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="hover:text-pink-500 transition-colors duration-200" />
            </a>
            <a href="https://github.com/pranavkerkar31" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="hover:text-black transition-colors duration-200" />
            </a>
          </div>
        </div>

        <Image
          src="/profile.jpg"
          alt="Pranav's Profile"
          width={400}
          height={400}
          className="rounded-lg shadow-2xl mx-auto"
        />
      </div>
    </section>
  );
}
