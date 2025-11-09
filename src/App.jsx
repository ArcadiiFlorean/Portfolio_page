import React from "react";
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
  const testimonials = [
    {
      name: "Maria Popescu",
      role: "CEO, TechStart Romania",
      content:
        "Colaborarea cu Arcadii a fost excepțională. Profesionalism, deadlines respectate și calitate superioară.",
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

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AF</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                Arcadii Florean
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Despre
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Servicii
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Testimoniale
              </a>
              <Link to="/pricing">
                <span className="text-gray-700 hover:text-gray-900 font-medium transition-colors cursor-pointer">
                  Prețuri
                </span>
              </Link>
            </div>

            <Link to="/contact">
              <button className="px-6 py-2.5 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors">
                Hai să colaborăm
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">
                  Disponibil pentru proiecte noi
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Full Stack Developer
                <span className="block text-slate-700">
                  & Web Solutions Expert
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transformăm idei în produse digitale de succes. Specializat în
                dezvoltare web modernă, cu focus pe performanță, scalabilitate
                și experiență utilizator de top.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link to="/contact">
                  <button className="px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all flex items-center gap-2 group">
                    <span>Discută cu mine</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link to="/pricing">
                  <button className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-900 rounded-lg font-semibold hover:border-gray-400 transition-all">
                    Vezi servicii
                  </button>
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500 font-medium">
                  Conectează-te:
                </span>
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
                    Icon: Mail,
                    link: "mailto:webFlorean@gmail.com",
                    label: "Email",
                  },
                  {
                    Icon: Instagram,
                    link: "https://www.instagram.com/arcadiiflorean/",
                    label: "Instagram",
                  },
                ].map(({ Icon, link, label }) => (
                  <a
                    key={label}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Elegant Photo Frame Design */}
              <div className="relative w-full max-w-lg mx-auto">
                {/* Decorative border */}
                <div className="absolute -inset-4 bg-gradient-to-br from-slate-200 via-slate-100 to-white rounded-[3rem] opacity-60"></div>

                {/* Main photo container */}
                <div className="relative">
                  {/* Corner accent - top left */}
                  <div className="absolute -top-3 -left-3 w-20 h-20 border-t-4 border-l-4 border-slate-800 rounded-tl-3xl z-10"></div>

                  {/* Corner accent - bottom right */}
                  <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-4 border-r-4 border-slate-800 rounded-br-3xl z-10"></div>

                  {/* Photo frame */}
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
                    <div className="aspect-[4/5] bg-slate-100">
                      <img
                        src="/Foto.jpg"
                        alt="Arcadii Florean - Professional Developer"
                        className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                      />
                    </div>
                  </div>

                  {/* Subtle bottom accent line */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-slate-800"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                De ce să lucrezi cu mine?
              </h2>
              <div className="w-20 h-1 bg-slate-900 mb-8"></div>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Cu peste <strong>5 ani de experiență</strong> în dezvoltarea
                  web, am ajutat zeci de companii să-și transforme viziunea
                  digitală în realitate.
                </p>
                <p>
                  Fiecare proiect este tratat cu maximum de{" "}
                  <strong>atenție la detalii</strong>, asigurându-mă că
                  rezultatul nu doar arată bine, ci și funcționează perfect și
                  generează rezultate concrete pentru afacerea ta.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "50+", label: "Proiecte livrate", icon: Briefcase },
                { number: "30+", label: "Clienți satisfăcuți", icon: Users },
                { number: "100%", label: "Dedicare", icon: Award },
                {
                  number: "24/7",
                  label: "Suport disponibil",
                  icon: CheckCircle2,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-50 p-6 rounded-2xl border-2 border-slate-200 hover:border-slate-900 transition-all"
                >
                  <item.icon className="w-8 h-8 text-slate-900 mb-4" />
                  <div className="text-3xl font-bold text-slate-900 mb-2">
                    {item.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview - Simple & Elegant */}
      <section id="services" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Serviciile mele
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specializat în crearea de landing pages și website-uri
              profesionale
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {[
              {
                number: "01",
                title: "Landing Pages",
                description:
                  "Pagini de destinație optimizate pentru conversie maximă. Perfecte pentru campanii de marketing, lansări de produse și generare de lead-uri calificați.",
                features: [
                  "Design optimizat pentru conversie",
                  "Mobile-first & Responsive",
                  "Formulare contact integrate",
                  "Google Analytics inclus",
                  "SEO optimizat",
                  "Livrare rapidă (3-7 zile)",
                ],
                highlight: "Ideal pentru campanii de marketing",
              },
              {
                number: "02",
                title: "Website-uri Business",
                description:
                  "Site-uri web profesionale de prezentare care inspiră încredere și ajută la creșterea afacerii tale. De la site-uri simple la platforme complexe.",
                features: [
                  "Design personalizat premium",
                  "Până la 15 pagini incluse",
                  "Blog/Știri integrat",
                  "Panou administrare ușor",
                  "SEO avansat",
                  "Hosting inclus (1 an)",
                ],
                highlight: "Perfect pentru companii și freelanceri",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-slate-50 p-10 rounded-3xl hover:shadow-2xl transition-all group border-2 border-gray-200 hover:border-slate-900 relative overflow-hidden"
              >
                {/* Number Badge */}
                <div className="absolute top-8 right-8 w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="text-4xl font-black text-white">
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <div className="relative">
                  <div className="w-16 h-1.5 bg-slate-900 mb-6"></div>

                  <div className="mb-2">
                    <span className="text-sm font-bold text-slate-600 tracking-wider uppercase">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {service.description}
                  </p>

                  {/* Highlight Box */}
                  <div className="bg-white border-2 border-slate-200 rounded-xl p-4 mb-6">
                    <p className="text-sm font-semibold text-slate-900">
                      ✨ {service.highlight}
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link to="/pricing">
                    <button className="w-full px-6 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all group-hover:shadow-lg flex items-center justify-center gap-2">
                      <span>Vezi detalii și prețuri</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">
              Nu ești sigur ce ai nevoie? Hai să discutăm despre proiectul tău!
            </p>
            <Link to="/contact">
              <button className="px-8 py-4 bg-white border-2 border-slate-900 text-slate-900 rounded-xl font-bold hover:bg-slate-900 hover:text-white transition-all">
                Programează o consultanță gratuită
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Ce spun clienții
            </h2>
            <p className="text-xl text-gray-600">
              Feedback real de la parteneri de încredere
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 lg:py-32 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Hai să construim ceva împreună
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Ai un proiect în minte? Sunt gata să transformăm ideea ta în
            realitate. Contactează-mă pentru o discuție fără obligații.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="px-10 py-4 bg-white text-slate-900 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all">
                Trimite un mesaj
              </button>
            </Link>
            <a href="mailto:webFlorean@gmail.com">
              <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-slate-900 transition-all">
                Email direct
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AF</span>
              </div>
              <span className="text-lg font-bold text-gray-900">
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
                  className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <div className="text-gray-600 text-sm">
              © 2024 Arcadii Florean. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ProfessionalPortfolio;
