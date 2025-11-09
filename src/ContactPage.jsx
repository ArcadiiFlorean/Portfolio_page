import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  ArrowLeft,
  CheckCircle2,
  Clock,
  MessageSquare,
  Facebook,
  Instagram,
  MessageCircle,
  Zap,
} from "lucide-react";

function ContactPageNeon() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Numele este obligatoriu";
    if (!formData.email.trim()) {
      newErrors.email = "Email-ul este obligatoriu";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email invalid";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subiectul este obligatoriu";
    if (!formData.message.trim()) newErrors.message = "Mesajul este obligatoriu";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        console.log("Form submitted:", formData);
        setIsSubmitted(true);
        setIsSubmitting(false);
        setTimeout(() => {
          setFormData({ name: "", email: "", subject: "", message: "" });
          setIsSubmitted(false);
        }, 5000);
      }, 1000);
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
      description: "Răspund în 24h",
      color: "cyan",
    },
    {
      icon: Phone,
      title: "Telefon",
      value: "+44 7454 185152",
      link: "tel:+447454185152",
      description: "Luni - Vineri, 9:00 - 18:00",
      color: "purple",
    },
    {
      icon: MapPin,
      title: "Locație",
      value: "London, UK",
      link: "#",
      description: "Remote & On-site",
      color: "pink",
    },
  ];

  const reasons = [
    {
      icon: Zap,
      title: "Răspuns rapid",
      description: "Răspund la toate mesajele în maximum 24 de ore",
    },
    {
      icon: MessageSquare,
      title: "Consultanță gratuită",
      description: "Prima discuție este întotdeauna fără costuri",
    },
    {
      icon: CheckCircle2,
      title: "Fără obligații",
      description: "Discutăm ideile tale fără niciun angajament",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative">
      {/* Animated background grid */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.6)]">
              <span className="text-white font-bold text-xl">AF</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Arcadii Florean
            </span>
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Înapoi</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <h1 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse mb-4">
              CONTACTEAZĂ-MĂ
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-30"></div>
          </div>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Ai un proiect în minte sau vrei să colaborăm? <br />
            <span className="text-cyan-400 font-semibold">
              Hai să vorbim!
            </span>{" "}
            🚀
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { label: "Răspuns în", value: "24h", color: "cyan" },
              { label: "Consultanță", value: "Gratuită", color: "purple" },
              { label: "Satisfacție", value: "100%", color: "pink" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl font-bold text-${stat.color}-400 mb-1 animate-pulse`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form - 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-8 lg:p-10 rounded-2xl border-2 border-cyan-500 shadow-[0_0_50px_rgba(6,182,212,0.3)] hover:shadow-[0_0_80px_rgba(6,182,212,0.4)] transition-all">
              <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Trimite un mesaj
              </h2>
              <p className="text-gray-300 mb-8">
                Completează formularul și îți voi răspunde în cel mai scurt timp ⚡
              </p>

              {isSubmitted && (
                <div className="mb-8 p-6 bg-green-500 bg-opacity-20 border-2 border-green-500 rounded-xl shadow-[0_0_30px_rgba(34,197,94,0.3)] animate-pulse">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-green-400 mb-1">
                        ✅ Mesaj trimis cu succes!
                      </p>
                      <p className="text-sm text-green-300">
                        Îți voi răspunde în maximum 24 de ore. Verifică și folderul de spam.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Nume complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-900 border-2 ${
                        errors.name ? "border-red-500" : "border-gray-700"
                      } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors shadow-inner`}
                      placeholder="Ion Popescu"
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-400 font-medium">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-900 border-2 ${
                        errors.email ? "border-red-500" : "border-gray-700"
                      } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors shadow-inner`}
                      placeholder="ion@example.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-400 font-medium">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Subiect *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-900 border-2 ${
                      errors.subject ? "border-red-500" : "border-gray-700"
                    } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors shadow-inner`}
                    placeholder="Despre ce vrei să vorbim?"
                  />
                  {errors.subject && (
                    <p className="mt-2 text-sm text-red-400 font-medium">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className={`w-full px-4 py-3 bg-gray-900 border-2 ${
                      errors.message ? "border-red-500" : "border-gray-700"
                    } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none shadow-inner`}
                    placeholder="Descrie-mi pe scurt proiectul tău sau întrebările pe care le ai..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-400 font-medium">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 font-bold text-lg rounded-lg
                           hover:shadow-[0_0_40px_rgba(6,182,212,0.8)] transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed
                           flex items-center justify-center gap-2 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span className="relative z-10">Se trimite...</span>
                    </>
                  ) : (
                    <>
                      <span className="relative z-10">Trimite mesajul</span>
                      <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-400 text-center">
                  🔒 Respectăm confidențialitatea datelor tale
                </p>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Informații de contact
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className={`block bg-gray-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-xl border-2 border-${info.color}-500 
                             hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all group`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-${info.color}-500 bg-opacity-20 border-2 border-${info.color}-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <info.icon className={`w-6 h-6 text-${info.color}-400`} />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">
                          {info.title}
                        </h4>
                        <p className={`text-${info.color}-400 font-semibold mb-1`}>
                          {info.value}
                        </p>
                        <p className="text-sm text-gray-400">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Why Contact */}
            <div className="bg-gradient-to-br from-purple-900 to-pink-900 bg-opacity-30 p-8 rounded-2xl border-2 border-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.3)]">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">
                De ce să mă contactezi?
              </h3>
              <div className="space-y-4">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-500 bg-opacity-20 border border-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <reason.icon className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{reason.title}</h4>
                      <p className="text-sm text-purple-200">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-2xl border-2 border-cyan-500 shadow-[0_0_40px_rgba(6,182,212,0.2)]">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">
                Conectează-te cu mine
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { Icon: Github, link: "https://github.com/ArcadiiFlorean", label: "GitHub" },
                  { Icon: Linkedin, link: "https://www.linkedin.com/in/arcadii-florean-6a9584397/", label: "LinkedIn" },
                  { Icon: Facebook, link: "https://www.facebook.com/arcadii.florean", label: "Facebook" },
                  { Icon: Instagram, link: "https://www.instagram.com/arcadiiflorean/", label: "Instagram" },
                  { Icon: MessageCircle, link: "https://wa.me/447454185152", label: "WhatsApp" },
                ].map(({ Icon, link, label }) => (
                  <a
                    key={label}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-900 border-2 border-purple-500 rounded-lg hover:bg-gray-800 
                             transition-all hover:scale-110 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] group"
                    aria-label={label}
                    title={label}
                  >
                    <Icon className="w-5 h-5 text-purple-400 group-hover:text-cyan-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.4)]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <h3 className="text-xl font-bold text-white">
                  Disponibil pentru proiecte noi!
                </h3>
              </div>
              <p className="text-green-100">
                Sunt deschis pentru colaborări și proiecte freelance. Hai să
                creăm ceva extraordinar împreună! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPageNeon;