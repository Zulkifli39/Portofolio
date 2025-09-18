import React, {useRef, useEffect} from "react";
import {gsap} from "gsap";
import {techStackDetails} from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    tailwind,
    bootstrap,
    nextjs,
    php,
    mysql,
    supabase,
    nodejs,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
  } = techStackDetails;

  const techScrollRef = useRef();
  const toolsScrollRef = useRef();
  const sectionRef = useRef();

  // Tech Stack logos
  const techLogos = [
    {src: html, title: "HTML5", category: "Frontend"},
    {src: css, title: "CSS3", category: "Frontend"},
    {src: js, title: "JavaScript", category: "Frontend"},
    {src: react, title: "React", category: "Frontend"},
    {src: nextjs, title: "Next.js", category: "Frontend"},
    {src: tailwind, title: "Tailwind CSS", category: "Frontend"},
    {src: bootstrap, title: "Bootstrap", category: "Frontend"},
    {src: nodejs, title: "Node.js", category: "Backend"},
    {src: php, title: "PHP", category: "Frontend"},
  ];

  // Tools and Database logos
  const toolsLogos = [
    {src: vscode, title: "VS Code", category: "Editor"},
    {src: git, title: "Git", category: "Version Control"},
    {src: github, title: "GitHub", category: "Platform"},
    {src: figma, title: "Figma", category: "Design"},
    {src: npm, title: "NPM", category: "Package Manager"},
    {src: postman, title: "Postman", category: "API Testing"},
    {src: mysql, title: "MySQL", category: "Database"},
    {src: supabase, title: "Supabase", category: "Database"},
  ];

  useEffect(() => {
    // Section entrance animation
    gsap.fromTo(sectionRef.current, {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 1, ease: "power3.out"});

    // Tech Stack infinite scroll animation
    const techContainer = techScrollRef.current;
    const techLogosElements = techContainer.children;

    if (techLogosElements.length > 0) {
      gsap.set(techContainer, {x: 0});

      const techTl = gsap.timeline({repeat: -1});
      techTl.to(techContainer, {
        x: -techContainer.scrollWidth / 2,
        duration: 20,
        ease: "none",
      });
    }

    // Tools infinite scroll animation (reverse direction)
    const toolsContainer = toolsScrollRef.current;
    const toolsLogosElements = toolsContainer.children;

    if (toolsLogosElements.length > 0) {
      gsap.set(toolsContainer, {x: -toolsContainer.scrollWidth / 2});

      const toolsTl = gsap.timeline({repeat: -1});
      toolsTl.to(toolsContainer, {
        x: 0,
        duration: 25,
        ease: "none",
      });
    }

    // Hover pause effect
    const handleMouseEnter = (container) => {
      gsap.to(container, {timeScale: 0, duration: 0.5});
    };

    const handleMouseLeave = (container) => {
      gsap.to(container, {timeScale: 1, duration: 0.5});
    };

    const techWrapper = techContainer.parentElement;
    const toolsWrapper = toolsContainer.parentElement;

    techWrapper.addEventListener("mouseenter", () => handleMouseEnter(techContainer));
    techWrapper.addEventListener("mouseleave", () => handleMouseLeave(techContainer));
    toolsWrapper.addEventListener("mouseenter", () => handleMouseEnter(toolsContainer));
    toolsWrapper.addEventListener("mouseleave", () => handleMouseLeave(toolsContainer));

    return () => {
      techWrapper.removeEventListener("mouseenter", () => handleMouseEnter(techContainer));
      techWrapper.removeEventListener("mouseleave", () => handleMouseLeave(techContainer));
      toolsWrapper.removeEventListener("mouseenter", () => handleMouseEnter(toolsContainer));
      toolsWrapper.removeEventListener("mouseleave", () => handleMouseLeave(toolsContainer));
    };
  }, []);

  const TechCard = ({src, title, category}) => (
    <div className="group relative flex-shrink-0 mx-6">
      <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="relative z-10 text-center">
          <div className="w-16 h-16 mx-auto mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl group-hover:scale-110 transition-transform duration-300">
            <img src={src} alt={title} title={title} className="w-full h-full object-contain" />
          </div>

          <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>

          <span className="inline-block px-2 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 text-xs rounded-full">
            {category}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <main className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        {/* Tech Stack Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7l-10-5zM12 4.84L19.6 8.5 12 12.16 4.4 8.5 12 4.84zM5 10.9l6.5 3.5v6.1L5 17V10.9zm8.5 9.6v-6.1l6.5-3.5V17l-6.5 3.5z" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Tech Stack
              </h1>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Teknologi yang saya gunakan akhir-akhir ini untuk menciptakan pengalaman digital yang luar biasa
            </p>
          </div>

          {/* Tech Stack Infinite Scroll */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-900 dark:to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-900 dark:to-transparent z-10"></div>

            <div className="flex py-8">
              <div ref={techScrollRef} className="flex">
                {/* Duplicate the logos for seamless loop */}
                {[...techLogos, ...techLogos].map((logo, index) => (
                  <TechCard key={`tech-${index}`} src={logo.src} title={logo.title} category={logo.category} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tools and Database Section */}
        <section>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Tools & Database
              </h1>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Toold dan Database yang saya gunakan untuk mendukung alur kerja pengembangan saya
            </p>
          </div>

          {/* Tools Infinite Scroll (Reverse Direction) */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-900 dark:to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-900 dark:to-transparent z-10"></div>

            <div className="flex py-8">
              <div ref={toolsScrollRef} className="flex">
                {/* Duplicate the logos for seamless loop */}
                {[...toolsLogos, ...toolsLogos].map((logo, index) => (
                  <TechCard key={`tools-${index}`} src={logo.src} title={logo.title} category={logo.category} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Stats */}
        <section className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group cursor-pointer">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform">
                {techLogos.length}+
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Technologies</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2 group-hover:scale-110 transition-transform">
                {toolsLogos.length}+
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Tools</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl md:text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2 group-hover:scale-110 transition-transform">
                1+
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Years</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2 group-hover:scale-110 transition-transform">
                10+
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Projects</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Technologies;
