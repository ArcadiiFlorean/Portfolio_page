import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  ArrowLeft,
} from "lucide-react";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Numele este obligatoriu";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email-ul este obligatoriu";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subiectul este obligatoriu";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mesajul este obligatoriu";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Form is valid - aici poți trimite datele la server
      console.log("Form submitted:", formData);
      setIsSubmitted(true);

      // Reset form după 3 secunde
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setIsSubmitted(false);
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "webFlorean@gmail.com",
      link: "mailto:webFlorean@gmail.com",
      color: "cyan",
    },
    {
      icon: Phone,
      title: "Telefon",
      value: "+447454185152",
      link: "tel:+447454185152",

      color: "purple",
    },
    {
      icon: MapPin,
      title: "Locație",
      value: "London, UK",
      link: "#",
      color: "pink",
    },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", link: "https://github.com/ArcadiiFlorean", color: "purple" },
    { icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/arcadii-florean-6a9584397/", color: "cyan" },
    { icon: Twitter, label: "Twitter", link: "#", color: "blue" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative">
      {/* Animated background */}
      <div className="fixed inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Glowing orbs */}
      <div className="fixed top-20 right-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="fixed bottom-20 left-20 w-96 h-96 bg-cyan-600 rounded-full blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-12">
        {/* Back Button */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Înapoi la Portfolio</span>
        </a>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <h1 className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              CONTACTEAZĂ-MĂ
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-30"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ai un proiect în minte sau vrei să colaborăm? <br />
            <span className="text-cyan-400 font-semibold">
              Hai să vorbim!
            </span>{" "}
            🚀
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-2xl border-2 border-cyan-500 shadow-[0_0_50px_rgba(6,182,212,0.3)]">
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Trimite un mesaj
            </h2>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-500 bg-opacity-20 border-2 border-green-500 rounded-lg">
                <p className="text-green-400 font-semibold">
                  ✅ Mesaj trimis cu succes!
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Nume complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-900 border-2 ${
                    errors.name ? "border-red-500" : "border-gray-700"
                  } rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors`}
                  placeholder="Numele tău"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-900 border-2 ${
                    errors.email ? "border-red-500" : "border-gray-700"
                  } rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors`}
                  placeholder="email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Subiect *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-900 border-2 ${
                    errors.subject ? "border-red-500" : "border-gray-700"
                  } rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors`}
                  placeholder="Despre ce vrei să vorbim?"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Mesaj *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className={`w-full px-4 py-3 bg-gray-900 border-2 ${
                    errors.message ? "border-red-500" : "border-gray-700"
                  } rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none`}
                  placeholder="Scrie mesajul tău aici..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 font-bold text-lg rounded-lg
                         hover:shadow-[0_0_40px_rgba(6,182,212,0.8)] transition-all hover:scale-105 flex items-center justify-center gap-2 group"
              >
                <span>Trimite mesajul</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
                Informații de contact
              </h2>

              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="block bg-gray-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-2xl border-2 border-gray-700 
                           hover:border-cyan-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 bg-${info.color}-500 bg-opacity-20 border-2 border-${info.color}-500 rounded-lg group-hover:scale-110 transition-transform`}
                    >
                      <info.icon className={`w-6 h-6 text-${info.color}-400`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-300 mb-1">
                        {info.title}
                      </h3>
                      <p className={`text-${info.color}-400 font-semibold`}>
                        {info.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-2xl border-2 border-purple-500 shadow-[0_0_50px_rgba(168,85,247,0.3)]">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
                Conectează-te cu mine
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="p-4 bg-gray-900 border-2 border-purple-500 rounded-lg hover:bg-gray-800 
                             transition-all hover:scale-110 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-7 h-7 text-purple-400 group-hover:text-cyan-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.4)]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <h3 className="text-xl font-bold text-white">
                  Disponibil pentru proiecte noi!
                </h3>
              </div>
              <p className="text-green-100">
                Sunt deschis pentru colaborări și proiecte freelance. Hai să
                creăm ceva extraordinar împreună!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
