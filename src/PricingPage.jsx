import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Check,
  ArrowLeft,
  ArrowRight,
  Zap,
  Globe,
  CheckCircle2,
  Clock,
  MessageSquare,
} from "lucide-react";

function PricingPage() {
  const landingPackages = [
    {
      id: "landing-starter",
      name: "Starter",
      price: "500",
      icon: Zap,
      description: "Perfect pentru teste rapide și buget limitat",
      deliveryTime: "3-5 zile",
      revisions: "1 revizuire",
      popular: false,
      features: [
        "1 pagină landing optimizată",
        "Design din template premium",
        "3 secțiuni (Hero, Features, CTA)",
        "Formular contact simplu",
        "Mobile responsive",
        "SEO de bază",
        "Hosting inclus (1 an)",
        "SSL Certificate",
      ],
      ideal: ["Test MVP", "Buget mic", "Lansare rapidă"],
    },
    {
      id: "landing-standard",
      name: "Standard",
      price: "800",
      icon: Zap,
      description: "Cel mai popular pachet pentru campanii de succes",
      deliveryTime: "5-7 zile",
      revisions: "2 revizuiri",
      popular: true,
      features: [
        "1 pagină landing optimizată",
        "Design semi-personalizat",
        "5 secțiuni complete",
        "Formular contact + Newsletter",
        "Mobile & Tablet optimizat",
        "SEO optimizat complet",
        "Google Analytics inclus",
        "Animații smooth",
        "Hosting inclus (1 an)",
        "SSL Certificate",
      ],
      ideal: ["Campanii PPC", "Lead generation", "Lansări produse"],
    },
    {
      id: "landing-premium",
      name: "Premium",
      price: "1,200",
      icon: Zap,
      description: "Soluție completă pentru conversie maximă",
      deliveryTime: "7-10 zile",
      revisions: "Nelimitate",
      popular: false,
      features: [
        "1 pagină landing optimizată",
        "Design 100% personalizat",
        "Secțiuni nelimitate",
        "Formular multi-step avansat",
        "A/B Testing ready",
        "Mobile, Tablet, Desktop perfect",
        "SEO avansat + Schema markup",
        "Google Analytics + Tag Manager",
        "Animații custom premium",
        "Integrare CRM/Email marketing",
        "Hosting inclus (1 an)",
        "SSL Certificate + CDN",
      ],
      ideal: ["Campanii mari", "Enterprise", "Conversie maximă"],
    },
  ];

  const websitePackages = [
    {
      id: "website-basic",
      name: "Basic",
      price: "1,500",
      icon: Globe,
      description: "Site simplu de prezentare pentru freelanceri",
      deliveryTime: "7-10 zile",
      revisions: "2 revizuiri",
      popular: false,
      features: [
        "5-7 pagini incluse",
        "Design semi-personalizat",
        "Responsive complet",
        "Formular contact",
        "SEO optimizat",
        "Google Analytics",
        "Hosting inclus (1 an)",
        "SSL Certificate",
      ],
      ideal: ["Freelanceri", "Portfolii", "Site personal"],
    },
    {
      id: "website-business",
      name: "Business",
      price: "2,500",
      icon: Globe,
      description: "Soluție completă pentru afaceri serioase",
      deliveryTime: "10-14 zile",
      revisions: "3 revizuiri",
      popular: true,
      features: [
        "10-15 pagini incluse",
        "Design 100% personalizat",
        "Panou administrare CMS",
        "Blog/Știri integrat",
        "Formulare contact avansate",
        "SEO avansat toate paginile",
        "Google Analytics + Search Console",
        "Optimizare viteză",
        "Integrare social media",
        "Hosting inclus (1 an)",
        "SSL Certificate + CDN",
        "Backup automat zilnic",
      ],
      ideal: ["Companii", "Agenții", "Servicii profesionale"],
    },
    {
      id: "website-enterprise",
      name: "Enterprise",
      price: "4,000",
      icon: Globe,
      description: "Platformă enterprise cu funcționalități avansate",
      deliveryTime: "14-21 zile",
      revisions: "Nelimitate",
      popular: false,
      features: [
        "15+ pagini incluse",
        "Design premium custom",
        "CMS avansat cu roluri user",
        "Blog + Știri + Resurse",
        "Formular multi-step + chatbot",
        "SEO enterprise + multilingual",
        "Analytics avansat + dashboards",
        "Optimizare maximă (90+ PageSpeed)",
        "Integrări API custom",
        "Area membri (login/register)",
        "Email marketing integration",
        "Hosting premium (1 an)",
        "SSL + CDN + Security avansată",
        "Backup automat + recovery",
      ],
      ideal: ["Corporații", "Platforme complexe", "SaaS"],
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Consultanță gratuită",
      description: "Discutăm despre proiectul tău, obiective și buget",
    },
    {
      number: "02",
      title: "Ofertă personalizată",
      description: "Primești o ofertă detaliată cu timeline și costuri",
    },
    {
      number: "03",
      title: "Design & Development",
      description: "Creăm site-ul tău cu revizuiri continue",
    },
    {
      number: "04",
      title: "Lansare & Suport",
      description: "Publicăm site-ul și oferim suport tehnic",
    },
  ];

  const faqs = [
    {
      q: "Prețurile includ TVA?",
      a: "Da, toate prețurile afișate includ TVA. Nu există costuri ascunse - ceea ce vezi este ceea ce plătești.",
    },
    {
      q: "Pot face modificări după lansare?",
      a: "Desigur! Oferim training pentru panou de administrare (la Website Business) sau poți solicita modificări direct de la noi. Primele 30 de zile după lansare includ suport tehnic gratuit.",
    },
    {
      q: "Ce se întâmplă după primul an de hosting?",
      a: "După primul an, poți alege să îți prelungi hostingul cu noi (aproximativ 100-200 RON/an) sau să transferi site-ul la un alt provider. Site-ul este 100% al tău.",
    },
    {
      q: "Oferiți servicii de întreținere?",
      a: "Da! Oferim pachete de întreținere lunară care includ: actualizări de securitate, backup-uri, modificări minore de conținut și suport prioritar. Prețuri de la 100 RON/lună.",
    },
    {
      q: "Pot adăuga funcționalități custom?",
      a: "Absolut! Dacă ai nevoie de funcționalități speciale (booking system, calculatoare, integrări API), le putem dezvolta la cerere. Contactează-mă pentru o ofertă personalizată.",
    },
    {
      q: "Acceptați plăți în rate?",
      a: "Da, pentru proiecte peste 1,000 RON putem discuta despre plăți în 2-3 rate: avans la start, tranșă la design și final la lansare.",
    },
  ];

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AF</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                Arcadii Florean
              </span>
            </Link>

            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Înapoi</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
              Prețuri clare și transparente
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Fără costuri ascunse. Fără surprize neplăcute. 
              <span className="block mt-2 font-semibold text-gray-900">
                Investește inteligent în prezența ta online.
              </span>
            </p>

            {/* Service Type Navigation */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="#landing-pages"
                className="group px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5" />
                <span>Vezi Landing Pages</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#websites"
                className="group px-8 py-4 bg-white border-2 border-slate-900 text-slate-900 rounded-xl font-bold hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <Globe className="w-5 h-5" />
                <span>Vezi Website-uri</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              {[
                { icon: CheckCircle2, text: "Plată securizată" },
                { icon: Clock, text: "Livrare la timp" },
                { icon: MessageSquare, text: "Suport continuu" },
              ].map((badge, index) => (
                <div key={index} className="flex items-center gap-2">
                  <badge.icon className="w-5 h-5 text-slate-900" />
                  <span className="font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards - Landing Pages */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Landing Pages Section */}
          <div id="landing-pages" className="scroll-mt-20 mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-4">
                <Zap className="w-5 h-5 text-slate-900" />
                <span className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                  Landing Pages
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Pagini optimizate pentru conversie
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Alege pachetul perfect pentru campania ta de marketing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {landingPackages.map((pkg) => {
                const Icon = pkg.icon;
                return (
                  <div
                    key={pkg.id}
                    className={`relative bg-white rounded-3xl p-8 border-2 transition-all hover:shadow-2xl ${
                      pkg.popular
                        ? "border-slate-900 shadow-xl scale-105"
                        : "border-gray-200 hover:border-slate-300"
                    }`}
                  >
                    {/* Popular Badge */}
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="px-4 py-1 bg-slate-900 text-white rounded-full text-sm font-bold">
                          ⭐ CEL MAI POPULAR
                        </span>
                      </div>
                    )}

                    {/* Icon */}
                    <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-slate-900" />
                    </div>

                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {pkg.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {pkg.description}
                      </p>

                      {/* Price */}
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-4xl font-bold text-slate-900">
                          {pkg.price}
                        </span>
                        <span className="text-gray-600">RON</span>
                      </div>

                      {/* Meta info */}
                      <div className="flex flex-col gap-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{pkg.deliveryTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>{pkg.revisions}</span>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3 text-sm">CE PRIMEȘTI:</h4>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-slate-900 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ideal for */}
                    <div className="mb-6 p-4 bg-slate-50 rounded-xl">
                      <h4 className="font-bold text-gray-900 mb-2 text-xs uppercase tracking-wide">
                        Ideal pentru:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {pkg.ideal.map((item, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-700"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link to="/contact">
                      <button
                        className={`w-full px-6 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group ${
                          pkg.popular
                            ? "bg-slate-900 text-white hover:bg-slate-800"
                            : "bg-white border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
                        }`}
                      >
                        <span>Comandă acum</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Websites Section */}
          <div id="websites" className="scroll-mt-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-4">
                <Globe className="w-5 h-5 text-slate-900" />
                <span className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                  Website-uri Business
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Site-uri profesionale de prezentare
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Platforme complete pentru afacerea ta online
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {websitePackages.map((pkg) => {
                const Icon = pkg.icon;
                return (
                  <div
                    key={pkg.id}
                    className={`relative bg-white rounded-3xl p-8 border-2 transition-all hover:shadow-2xl ${
                      pkg.popular
                        ? "border-slate-900 shadow-xl scale-105"
                        : "border-gray-200 hover:border-slate-300"
                    }`}
                  >
                    {/* Popular Badge */}
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="px-4 py-1 bg-slate-900 text-white rounded-full text-sm font-bold">
                          ⭐ CEL MAI POPULAR
                        </span>
                      </div>
                    )}

                    {/* Icon */}
                    <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-slate-900" />
                    </div>

                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {pkg.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {pkg.description}
                      </p>

                      {/* Price */}
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-4xl font-bold text-slate-900">
                          {pkg.price}
                        </span>
                        <span className="text-gray-600">RON</span>
                      </div>

                      {/* Meta info */}
                      <div className="flex flex-col gap-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{pkg.deliveryTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>{pkg.revisions}</span>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3 text-sm">CE PRIMEȘTI:</h4>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-slate-900 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ideal for */}
                    <div className="mb-6 p-4 bg-slate-50 rounded-xl">
                      <h4 className="font-bold text-gray-900 mb-2 text-xs uppercase tracking-wide">
                        Ideal pentru:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {pkg.ideal.map((item, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-700"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link to="/contact">
                      <button
                        className={`w-full px-6 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group ${
                          pkg.popular
                            ? "bg-slate-900 text-white hover:bg-slate-800"
                            : "bg-white border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
                        }`}
                      >
                        <span>Comandă acum</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Custom Projects CTA */}
          <div className="mt-20">
            <div className="bg-slate-900 text-white p-10 rounded-3xl text-center">
              <h3 className="text-3xl font-bold mb-4">
                Ai nevoie de ceva personalizat?
              </h3>
              <p className="text-slate-300 text-lg mb-6 max-w-2xl mx-auto">
                Magazine online, platforme complexe sau funcționalități speciale? 
                Hai să discutăm și îți fac o ofertă la măsură.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <button className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-gray-100 transition-all">
                    Cere o ofertă personalizată
                  </button>
                </Link>
                <div className="flex gap-3">
                  <a
                    href="#landing-pages"
                    className="px-6 py-4 bg-white bg-opacity-10 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition-all flex items-center gap-2"
                  >
                    <Zap className="w-4 h-4" />
                    <span>Landing Pages</span>
                  </a>
                  <a
                    href="#websites"
                    className="px-6 py-4 bg-white bg-opacity-10 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition-all flex items-center gap-2"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Websites</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Cum funcționează procesul?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              4 pași simpli de la idee la site-ul tău live
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-black text-white">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Întrebări frecvente
            </h2>
            <p className="text-xl text-gray-600">
              Răspunsuri la cele mai comune întrebări despre prețuri
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-slate-900 transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-4">
              Mai ai întrebări?
            </p>
            <Link to="/contact">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all">
                Contactează-mă direct
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included Banner */}
      <section className="py-16 lg:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ce include fiecare proiect
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Indiferent de pachet, beneficiezi de aceste avantaje
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Support 24/7",
                description: "Răspund rapid la mesaje și rezolv probleme tehnice",
              },
              {
                title: "Mobile-first",
                description: "Toate site-urile sunt perfecte pe telefon, tabletă și desktop",
              },
              {
                title: "SEO optimizat",
                description: "Configurare corectă pentru motoarele de căutare",
              },
              {
                title: "Performanță",
                description: "Site-uri rapide, optimizate pentru viteză de încărcare",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Gata să începem?
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Alege un pachet sau contactează-mă pentru o ofertă personalizată. 
            Prima consultanță este mereu gratuită!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="px-10 py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all">
                Începe acum
              </button>
            </Link>
            <a href="mailto:webFlorean@gmail.com">
              <button className="px-10 py-4 bg-white border-2 border-slate-900 text-slate-900 rounded-xl font-bold text-lg hover:bg-slate-900 hover:text-white transition-all">
                Scrie-mi direct
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AF</span>
              </div>
              <span className="text-lg font-bold text-gray-900">
                Arcadii Florean
              </span>
            </Link>

            <div className="text-gray-600 text-sm">
              © 2024 Arcadii Florean. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PricingPage;