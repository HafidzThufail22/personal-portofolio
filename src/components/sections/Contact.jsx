import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/HafidzThufail22",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://linkedin.com/in/hafidzthufail",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://instagram.com/hafidzthufail_",
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="backdrop-blur-sm bg-gray-900/20 border border-blue-500/20 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 backdrop-blur-sm bg-gray-900/20 border border-blue-500/30 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:bg-gray-900/30 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 backdrop-blur-sm bg-gray-900/20 border border-blue-500/30 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:bg-gray-900/30 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 backdrop-blur-sm bg-gray-900/20 border border-blue-500/30 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:bg-gray-900/30 transition-all resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 backdrop-blur-sm bg-blue-500/10 border border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500/20 hover:border-blue-400 transform hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            <div className="backdrop-blur-sm bg-gray-900/20 border border-blue-500/20 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <FaMapMarkerAlt className="text-2xl text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Location</h4>
                    <p className="text-gray-400">Yogyakarta</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <FaEnvelope className="text-2xl text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-gray-400">hafidzthufail22@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <FaPhone className="text-2xl text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <p className="text-gray-400">+62 823 2834 6530</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-sm bg-gray-900/20 border border-blue-500/20 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Connect With Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social, idx) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 backdrop-blur-sm bg-gray-900/20 border border-blue-500/30 rounded-lg hover:bg-blue-500/20 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 group"
                    >
                      <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors">
                        <IconComponent className="text-2xl text-blue-400 group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-gray-300 group-hover:text-white font-medium">
                        {social.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-blue-500/20 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} hafidzthufail.
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Built with React, Vite & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
