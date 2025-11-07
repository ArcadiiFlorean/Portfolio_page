import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Sparkles,
  Zap,
} from "lucide-react";

function App() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Rolex",
      description: "E-commerce futuristic cu AI integration și plăți crypto",
      tech: ["React", "Web3", "AI"],
      gradient: "from-purple-500 to-pink-500",
      glow: "shadow-[0_0_30px_rgba(168,85,247,0.6)]",
    },
    {
      id: 2,
      title: "Breastfeeding Consultant",
      description:
        "Platformă online dedicată sprijinirii și consilierii mamelor care alăptează",

      tech: ["Next.js", "Three.js", "D3"],
      gradient: "from-cyan-500 to-blue-500",
      glow: "shadow-[0_0_30px_rgba(6,182,212,0.6)]",
    },
    {
      id: 3,
      title: "Quantum Chat",
      description: "Aplicație de messaging cu criptare end-to-end",
      tech: ["React", "WebRTC", "Node.js"],
      gradient: "from-green-500 to-emerald-500",
      glow: "shadow-[0_0_30px_rgba(16,185,129,0.6)]",
    },
    {
      id: 4,
      title: "AI Creator",
      description:
        "Tool pentru generare de conținut cu inteligență artificială",
      tech: ["Python", "OpenAI", "React"],
      gradient: "from-orange-500 to-red-500",
      glow: "shadow-[0_0_30px_rgba(249,115,22,0.6)]",
    },
  ];

  const skills = [
    { name: "HTML", color: "orange" },
    { name: "CSS", color: "blue" },
    { name: "PHP", color: "purple" },
    { name: "JavaScript", color: "yellow" },
    { name: "React", color: "cyan" },
    { name: "Node.js", color: "green" },
    { name: "REST API", color: "pink" },
    { name: "Tailwind", color: "emerald" },
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

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-12">
        {/* Header with Photo - POZA ÎN DREAPTA */}
        <header className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Partea STÂNGĂ - Text și Nume */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="relative inline-block mb-6">
                <h1 className="text-6xl lg:text-7xl font-black mb-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                  Arcadii Florean
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-30"></div>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
                <Zap className="w-8 h-8 text-yellow-400 animate-bounce" />
                <p className="text-3xl font-bold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    Full Stack Developer
                  </span>
                </p>
                <Code
                  className="w-8 h-8 text-cyan-400 animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                />
              </div>

              <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-xl lg:max-w-none">
                Construiesc experiențe web{" "}
                <span className="text-cyan-400 font-bold">futuriste</span> și
                <span className="text-purple-400 font-bold"> inovatoare</span>.
                Pasionat de{" "}
                <span className="text-pink-400 font-bold">tehnologie</span> și
                design modern! ⚡
              </p>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-6">
                {[
                  { Icon: Github, label: "GitHub", color: "purple", link: "#" },
                  {
                    Icon: Linkedin,
                    label: "LinkedIn",
                    color: "cyan",
                    link: "#",
                  },
                  {
                    Icon: Mail,
                    label: "Email",
                    color: "pink",
                    link: "mailto:your@email.com",
                  },
                ].map(({ Icon, label, color, link }) => (
                  <a
                    key={label}
                    href={link}
                    className="p-4 bg-gray-800 border-2 border-purple-500 rounded-lg
                              hover:bg-gray-700 transition-all hover:scale-110 
                              hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]"
                  >
                    <Icon className="w-7 h-7 text-purple-400" />
                  </a>
                ))}
              </div>
            </div>

            {/* Partea DREAPTĂ - Poză MARE */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_80px_rgba(6,182,212,0.8)]">
                  <img
                    src="/Foto.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 lg:w-20 lg:h-20 bg-green-500 rounded-full border-4 border-gray-900 flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.8)]">
                  <Sparkles className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-transparent"></div>
            <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              DESPRE MINE
            </h2>
            <div className="h-1 flex-1 bg-gradient-to-r from-purple-500 to-transparent"></div>
          </div>

          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-2xl border-2 border-cyan-500 shadow-[0_0_50px_rgba(6,182,212,0.3)] hover:shadow-[0_0_80px_rgba(6,182,212,0.5)] transition-all">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              {" "}
              <span className="text-cyan-400 font-semibold">
                Developer pasionat
              </span>{" "}
              de crearea de aplicații web moderne și interactive. Îmi place să
              explorez cele mai noi tehnologii și să transform idei complexe în
              soluții elegante.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Experiență în dezvoltarea full-stack, cu focus pe{" "}
              <span className="text-purple-400 font-semibold">React</span>,
              <span className="text-green-400 font-semibold"> Node.js</span> și
              <span className="text-pink-400 font-semibold"> modern UI/UX</span>
              . Mereu învăț și experimentez cu tehnologii noi!
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-transparent"></div>
            <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              SKILLS
            </h2>
            <div className="h-1 flex-1 bg-gradient-to-r from-pink-500 to-transparent"></div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="px-8 py-4 bg-gray-800 border-2 border-cyan-500 rounded-full
                             font-bold text-lg cursor-pointer transition-all hover:scale-110 hover:shadow-[0_0_40px_rgba(6,182,212,0.8)]"
                style={{
                  animation: `float ${2 + index * 0.2}s ease-in-out infinite`,
                }}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <span className="text-cyan-400">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-16 bg-gradient-to-r from-green-500 to-transparent"></div>
            <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
              PROIECTE
            </h2>
            <div className="h-1 flex-1 bg-gradient-to-r from-cyan-500 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`bg-gray-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-2xl 
                             border-2 transition-all cursor-pointer group
                             ${
                               hoveredProject === project.id
                                 ? project.glow
                                 : "border-gray-700"
                             }`}
                style={{
                  transform:
                    hoveredProject === project.id
                      ? "translateY(-10px)"
                      : "translateY(0)",
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3
                    className={`text-3xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                  >
                    {project.title}
                  </h3>
                  <ExternalLink className="w-6 h-6 text-cyan-400 group-hover:rotate-45 transition-transform" />
                </div>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm font-semibold text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Glow effect on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-0 
                              group-hover:opacity-20 transition-opacity -z-10`}
                ></div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
{/* Contact Section */}
<section className="text-center py-20">
  <div className="relative inline-block mb-8">
    <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 mb-4">
      HAI SĂ COLABORĂM!
    </h2>
    <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-lg blur-lg opacity-30 animate-pulse"></div>
  </div>

  <p className="text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
    Vrei să creez ceva pentru tine?{" "}
    <span className="text-cyan-400">Sunt la un click!</span> 🚀
  </p>

  {/* Butoane Contact + Pricing */}
  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
    <Link to="/contact">
      <button
        className="relative px-12 py-5 bg-gradient-to-r from-cyan-500 to-purple-500 
                   font-black text-2xl rounded-full overflow-hidden group
                   hover:shadow-[0_0_50px_rgba(6,182,212,0.8)] transition-all hover:scale-110"
      >
        <span className="relative z-10">CONTACTEAZĂ-MĂ</span>
        <div
          className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 
                      group-hover:opacity-100 transition-opacity"
        ></div>
      </button>
    </Link>

    <Link to="/pricing">
      <button
        className="relative px-12 py-5 bg-gradient-to-r from-green-500 to-emerald-500 
                   font-black text-2xl rounded-full overflow-hidden group
                   hover:shadow-[0_0_50px_rgba(16,185,129,0.8)] transition-all hover:scale-110"
      >
        <span className="relative z-10">VEZI PREȚURI 💳</span>
        <div
          className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 
                      group-hover:opacity-100 transition-opacity"
        ></div>
      </button>
    </Link>
  </div>
</section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-gray-800">
          <p className="text-gray-500 text-lg">
            Design & code by Arcadii Florean
          </p>
          <p className="text-gray-600 text-sm mt-2">
            © Toate drepturile rezervate
          </p>
        </footer>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}

export default App;
