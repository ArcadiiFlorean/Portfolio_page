import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
  Instagram,
  Facebook,
  MessageCircle,
  Award,
  Users,
  Briefcase,
} from "lucide-react";

function ProfessionalPortfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer pentru animații la scroll
  useEffect(() => {
    const observers = [];

    Object.keys(sectionRefs.current).forEach((key) => {
      const element = sectionRefs.current[key];
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [key]: true }));
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const testimonials = [
    {
      name: "Maria Popescu",
      role: "CEO, TechStart Romania",
      content:
        "Working with Arcadii was exceptional. Professionalism, respected deadlines, and superior quality.",
      rating: 5,
    },
    {
      name: "John Smith",
      role: "Product Manager, UK Ventures",
      content:
        "One of the best developers I've worked with. Great communication and technical skills.",
      rating: 5,
    },
  ];

  const skills = [
    { tag: "#Branding", position: "top-32 left-10" },
    { tag: "#UI/UX Design", position: "top-40 left-1/4" },
    { tag: "#Development", position: "top-32 right-1/4" },
    { tag: "#Animation", position: "top-40 right-10" },
  ];

  const socialBadges = [
    {
      Icon: Instagram,
      label: "IG",
      link: "https://www.instagram.com/arcadiiflorean/",
    },
    {
      Icon: Facebook,
      label: "FB",
      link: "https://www.facebook.com/arcadii.florean",
    },
    {
      Icon: Linkedin,
      label: "LN",
      link: "https://www.linkedin.com/in/arcadii-florean-6a9584397/",
    },
    { Icon: Github, label: "GH", link: "https://github.com/ArcadiiFlorean" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden relative">
      {/* Animated background grid with parallax */}
      <div
        className="fixed inset-0 opacity-10"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Red/Orange Glowing Orbs */}
      <div
        className="fixed top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-red-600 via-orange-600 to-red-700 rounded-full blur-[150px] opacity-30 animate-pulse"
        style={{
          transform: `translate(${scrollY * 0.15}px, ${scrollY * 0.2}px)`,
          transition: "transform 0.1s ease-out",
          animationDuration: "4s",
        }}
      ></div>
      <div
        className="fixed bottom-1/4 left-1/3 w-[400px] h-[400px] bg-gradient-to-tr from-orange-600 to-red-600 rounded-full blur-[120px] opacity-20 animate-pulse"
        style={{
          animationDelay: "2s",
          animationDuration: "5s",
          transform: `translate(${-scrollY * 0.1}px, ${-scrollY * 0.15}px)`,
          transition: "transform 0.1s ease-out",
        }}
      ></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.5)] transform group-hover:rotate-12 transition-all duration-300">
                  <span className="text-white font-bold text-xl">AF</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                CoffeeCoder
              </span>
            </div>
            Why work with me?
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-300 hover:text-red-400 font-medium transition-colors relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#services"
                className="text-gray-300 hover:text-red-400 font-medium transition-colors relative group"
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#testimonials"
                className="text-gray-300 hover:text-red-400 font-medium transition-colors relative group"
              >
                Testimonials
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <Link to="/pricing">
                <span className="text-gray-300 hover:text-red-400 font-medium transition-colors cursor-pointer relative group">
                  Pricing
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
            </div>
            <Link to="/contact">
              <button className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg font-semibold hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] transition-all hover:scale-105">
                Let's Collaborate
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Modern Design with Large Text */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          {/* Stand Out Badge */}
          <div
            ref={(el) => (sectionRefs.current["badge"] = el)}
            className={`text-center mb-8 transition-all duration-1000 ${
              isVisible["badge"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <span className="text-sm text-gray-400">←</span>
              <span className="text-sm font-medium text-gray-300 tracking-wider">
                Stand Out with Style
              </span>
              <span className="text-sm text-gray-400">→</span>
            </div>
          </div>

          {/* Main Hero Content */}
          <div
            ref={(el) => (sectionRefs.current["hero"] = el)}
            className="relative"
          >
            {/* Floating Hashtags */}
            <div className="hidden lg:block">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`absolute ${
                    skill.position
                  } transition-all duration-1000 ${
                    isVisible["hero"]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    transform: `translateY(${scrollY * 0.05 * (index + 1)}px)`,
                  }}
                >
                  <span className="text-sm md:text-base font-medium text-gray-400 hover:text-red-400 transition-colors cursor-default">
                    {skill.tag}
                  </span>
                </div>
              ))}
            </div>

            {/* Large Name Text with Photo Integration */}
            <div className="relative flex items-center justify-center">
              {/* Background Name Text - First Part */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h1
                  className="text-[15vw] lg:text-[12vw] font-black text-white/5 tracking-tight leading-none select-none"
                  style={{
                    textShadow: "0 0 40px rgba(239, 68, 68, 0.1)",
                  }}
                >
                  Arcadii
                </h1>
              </div>

              {/* Photo Container - Centered and Overlapping */}
              <div
                className={`relative z-10 transition-all duration-1000 ${
                  isVisible["hero"]
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-90"
                }`}
                style={{
                  transform: `translateY(${scrollY * 0.1}px)`,
                  transitionDelay: "200ms",
                }}
              >
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  {/* Glowing Background */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-red-500 via-orange-500 to-red-600 rounded-full blur-3xl opacity-40 animate-pulse"
                    style={{ animationDuration: "3s" }}
                  ></div>

                  {/* Photo Frame */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_60px_rgba(239,68,68,0.4)] hover:scale-105 transition-all duration-500 group">
                    <img
                      src="/Foto.jpg"
                      alt="Arcadii Florean"
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Decorative Corner Accents */}
                  <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-red-500 rounded-tl-3xl opacity-50"></div>
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-orange-500 rounded-br-3xl opacity-50"></div>
                </div>

                {/* Name Text Overlay */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent tracking-tight">
                    Arcadii Florean
                  </h2>
                </div>
              </div>

              {/* Second Part of Name Text (Background) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h1
                  className="text-[15vw] lg:text-[12vw] font-black text-white/5 tracking-tight leading-none select-none translate-y-20"
                  style={{
                    textShadow: "0 0 40px rgba(239, 68, 68, 0.1)",
                  }}
                >
                  Florean
                </h1>
              </div>
            </div>

            {/* Available for Work Badge & Social Links */}
            <div
              className={`flex flex-col items-center gap-6 mt-32 md:mt-40 transition-all duration-1000 ${
                isVisible["hero"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              {/* Available Badge */}
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-400">
                  Available for Work
                </span>
                <div className="flex gap-2">
                  {socialBadges.map((badge, index) => (
                    <a
                      key={index}
                      href={badge.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-500/20 hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all duration-300 hover:scale-110 group"
                      title={badge.label}
                    >
                      <badge.Icon className="w-4 h-4 text-gray-400 group-hover:text-red-400 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Welcome Text */}
              <div className="max-w-3xl text-center px-6">
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  Welcome to my portfolio! I'm{" "}
                  <span className="text-red-400 font-semibold">
                    Arcadii Florean
                  </span>
                  , a passionate and innovative{" "}
                  <span className="text-orange-400 font-semibold">
                    web designer and developer
                  </span>{" "}
                  based in United Kingdom. With{" "}
                  <span className="text-red-400 font-semibold">
                    5+ years of experience
                  </span>{" "}
                  in the industry, I specialize in creating visually stunning
                  and highly functional websites that provide an exceptional
                  user experience.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <Link to="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-semibold hover:shadow-[0_0_40px_rgba(239,68,68,0.6)] transition-all duration-300 hover:scale-105 flex items-center gap-2 group">
                    <span>Get in Touch</span>
                    <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <a href="#services">
                  <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] transition-all duration-300 hover:scale-105">
                    View Portfolio
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-red-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section with animation */}
      <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
        {/* Parallax subtle background */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-600 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              ref={(el) => (sectionRefs.current["about-text"] = el)}
              className={`transition-all duration-1000 delay-100 ${
                isVisible["about-text"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Why choose me?
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 mb-8 shadow-[0_0_20px_rgba(239,68,68,0.6)]"></div>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Landing pages are all about generating{" "}
                  <strong className="text-red-400">returns and results </strong>
                  - I love that.When you work with me, you get the experience of
                  a web developer who knows how to build websites optimized for
                  conversion. I’ve been writing code for years that not only
                  looks great but also turns visitors into customers through
                  smart structure, speed, and performance.
                </p>
                <p>
                  You'll always be able to reach me during UK working hours too,
                  unlike offshore companies. Feel free to get in touch{" "}
                  <strong className="text-orange-400">anytime.</strong>
                </p>
              </div>
            </div>

            <div
              ref={(el) => (sectionRefs.current["about-stats"] = el)}
              className="grid grid-cols-2 gap-6"
            >
              {[
                {
                  number: "50+",
                  label: "Projects delivered",
                  icon: Briefcase,
                  color: "red",
                },
                {
                  number: "30+",
                  label: "Satisfied clients",
                  icon: Users,
                  color: "orange",
                },
                {
                  number: "100%",
                  label: "Dedication",
                  icon: Award,
                  color: "red",
                },
                {
                  number: "24/7",
                  label: "Support available",
                  icon: CheckCircle2,
                  color: "orange",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border-2 border-${
                    item.color
                  }-500 hover:border-${
                    item.color
                  }-400 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] cursor-pointer ${
                    isVisible["about-stats"]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <item.icon
                    className={`w-8 h-8 text-${item.color}-400 mb-4 transform transition-transform group-hover:scale-110`}
                  />
                  <div
                    className={`text-3xl font-bold text-${item.color}-400 mb-2`}
                  >
                    {item.number}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview with 3D cards */}
      <section
        id="services"
        className="py-20 lg:py-32 relative overflow-hidden"
      >
        {/* Parallax background */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            transform: `translateY(${scrollY * 0.25}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div className="absolute top-20 right-10 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div
            ref={(el) => (sectionRefs.current["services-header"] = el)}
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible["services-header"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              My Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Specialized in creating landing pages and professional websites
            </p>
          </div>

          <div
            ref={(el) => (sectionRefs.current["services-cards"] = el)}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto"
          >
            {[
              {
                number: "01",
                title: "Landing Pages",
                description:
                  "Destination pages optimized for maximum conversion. Perfect for marketing campaigns, product launches, and qualified lead generation.",
                features: [
                  "Conversion-optimized design",
                  "Mobile-first & Responsive",
                  "Integrated contact forms",
                  "Google Analytics included",
                  "SEO optimized",
                  "Fast delivery (3-7 days)",
                ],
                highlight: "Ideal for marketing campaigns",
                color: "red",
              },
              {
                number: "02",
                title: "Business Websites",
                description:
                  "Professional presentation websites that inspire trust and help grow your business. From simple sites to complex platforms.",
                features: [
                  "Premium custom design",
                  "Up to 15 pages included",
                  "Integrated Blog/News",
                  "Easy admin panel",
                  "Advanced SEO",
                  "Hosting included (1 year)",
                ],
                highlight: "Perfect for companies and freelancers",
                color: "orange",
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`bg-gray-800/50 backdrop-blur-sm p-10 rounded-3xl hover:shadow-[0_0_60px_rgba(239,68,68,0.4)] transition-all duration-700 group border-2 border-${
                  service.color
                }-500 hover:border-${
                  service.color
                }-400 relative overflow-hidden ${
                  isVisible["services-cards"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                  transformStyle: "preserve-3d",
                  transform: "perspective(1000px)",
                }}
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 20;
                  const rotateY = (centerX - x) / 20;
                  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
                }}
              >
                {/* Glowing Number Badge */}
                <div
                  className={`absolute top-8 right-8 w-16 h-16 bg-${service.color}-500 bg-opacity-20 border-2 border-${service.color}-500 rounded-2xl flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-500 group-hover:rotate-12 shadow-[0_0_20px_rgba(239,68,68,0.4)]`}
                >
                  <span
                    className={`text-4xl font-black text-${service.color}-400`}
                  >
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <div
                  className="relative"
                  style={{ transform: "translateZ(50px)" }}
                >
                  <div
                    className={`w-16 h-1.5 bg-gradient-to-r from-${service.color}-500 to-orange-500 mb-6 group-hover:w-24 transition-all duration-500 shadow-[0_0_10px_rgba(239,68,68,0.6)]`}
                  ></div>

                  <div className="mb-2">
                    <span
                      className={`text-sm font-bold text-${service.color}-400 tracking-wider uppercase`}
                    >
                      {service.number}
                    </span>
                  </div>

                  <h3
                    className={`text-3xl font-bold bg-gradient-to-r from-${service.color}-400 to-orange-400 bg-clip-text text-transparent mb-4`}
                  >
                    {service.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    {service.description}
                  </p>

                  {/* Highlight Box */}
                  <div
                    className={`bg-${service.color}-500/10 border-2 border-${service.color}-500 rounded-xl p-4 mb-6 group-hover:border-${service.color}-400 transition-colors duration-500 shadow-[0_0_20px_rgba(239,68,68,0.2)]`}
                  >
                    <p
                      className={`text-sm font-semibold text-${service.color}-300`}
                    >
                      ✨ {service.highlight}
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-300 transform transition-all duration-300 hover:translate-x-2"
                      >
                        <CheckCircle2
                          className={`w-5 h-5 text-${service.color}-400 flex-shrink-0 mt-0.5`}
                        />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link to="/pricing">
                    <button
                      className={`w-full px-6 py-4 bg-gradient-to-r from-${service.color}-500 to-orange-500 text-white rounded-xl font-bold hover:shadow-[0_0_40px_rgba(239,68,68,0.6)] transition-all group-hover:shadow-lg flex items-center justify-center gap-2 hover:scale-105`}
                    >
                      <span>View details & pricing</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            className="text-center mt-16"
            ref={(el) => (sectionRefs.current["services-cta"] = el)}
          >
            <p
              className={`text-lg text-gray-300 mb-6 transition-all duration-1000 ${
                isVisible["services-cta"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Not sure what you need? Let's discuss your project!
            </p>
            <Link to="/contact">
              <button
                className={`px-8 py-4 bg-transparent border-2 border-red-500 text-red-400 rounded-xl font-bold hover:bg-red-500/20 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] transition-all hover:scale-105 ${
                  isVisible["services-cta"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                Schedule a free consultation
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials with animations */}
      <section
        id="testimonials"
        className="py-20 lg:py-32 relative overflow-hidden"
      >
        {/* Parallax background */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-red-600 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div
            ref={(el) => (sectionRefs.current["testimonials-header"] = el)}
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible["testimonials-header"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              What Clients Say
            </h2>
            <p className="text-xl text-gray-300">
              Real feedback from trusted partners
            </p>
          </div>

          <div
            ref={(el) => (sectionRefs.current["testimonials-cards"] = el)}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-sm border-2 border-orange-500 hover:border-orange-400 hover:shadow-[0_0_40px_rgba(251,146,60,0.4)] transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                  isVisible["testimonials-cards"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-orange-400 fill-current transform transition-transform hover:scale-125"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-gray-900"
      >
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute top-20 left-20 w-96 h-96 bg-red-600 rounded-full blur-3xl animate-pulse"
            style={{
              transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.15}px)`,
              transition: "transform 0.1s ease-out",
            }}
          ></div>
          <div
            className="absolute bottom-20 right-20 w-72 h-72 bg-orange-600 rounded-full blur-3xl animate-pulse"
            style={{
              animationDelay: "1s",
              transform: `translate(${-scrollY * 0.1}px, ${-scrollY * 0.12}px)`,
              transition: "transform 0.1s ease-out",
            }}
          ></div>
        </div>

        <div
          ref={(el) => (sectionRefs.current["cta"] = el)}
          className={`max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10 transition-all duration-1000 ${
            isVisible["cta"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Let's Build Something Together
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Have a project in mind? I'm ready to transform your idea into
            reality. Contact me for a no-obligation discussion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="px-10 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(239,68,68,0.8)] transition-all hover:scale-105">
                Send a message
              </button>
            </Link>
            <a href="mailto:webFlorean@gmail.com">
              <button className="px-10 py-4 bg-transparent border-2 border-orange-500 text-orange-300 rounded-full font-bold text-lg hover:bg-orange-500/20 hover:shadow-[0_0_30px_rgba(251,146,60,0.5)] transition-all hover:scale-105">
                Direct email
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-red-500/20 py-12 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.5)] transform hover:rotate-12 transition-transform duration-300">
                <span className="text-white font-bold text-xl">AF</span>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Arcadii Florean
              </span>
            </div>

            <div className="flex gap-6">
              {[
                {
                  Icon: Github,
                  link: "https://github.com/ArcadiiFlorean",
                  label: "GitHub",
                },
                {
                  Icon: Linkedin,
                  link: "https://www.linkedin.com/in/arcadii-florean-6a9584397/",
                  label: "LinkedIn",
                },
                {
                  Icon: Facebook,
                  link: "https://www.facebook.com/arcadii.florean",
                  label: "Facebook",
                },
                {
                  Icon: MessageCircle,
                  link: "https://wa.me/447454185152",
                  label: "WhatsApp",
                },
              ].map(({ Icon, link, label }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-red-400 bg-gray-800/50 border border-gray-700 hover:border-red-500 rounded-lg transition-all hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)]"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <div className="text-gray-400 text-sm">
              © 2024 Arcadii Florean. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ProfessionalPortfolio;
