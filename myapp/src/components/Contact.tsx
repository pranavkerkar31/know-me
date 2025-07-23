'use client';

export default function ContactForm() {
  return (
    <section className="bg-[#0a0e1a] text-white py-16 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto bg-[#111827] p-8 md:p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-indigo-400 mb-8 text-center">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300">
              I'd love to hear from you! Whether it's a question, project idea, or just to say hello —
              feel free to reach out.
            </p>
            <div className="text-md leading-relaxed space-y-2">
              <p>
                <strong>Phone:</strong>{' '}
                <a  className="text-indigo-400 ">
                  +91 8857990312
                </a>
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a className="text-indigo-400">
                  pranavkerkar04@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder=""
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Your message..."
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-indigo-600 px-6 py-2 rounded text-white hover:bg-indigo-700 transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
