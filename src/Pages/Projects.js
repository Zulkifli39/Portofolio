import React, {useRef, useEffect, useState} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {projectDetails} from "../Details";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const sectionRef = useRef();
  const projectsGridRef = useRef();
  const [activeFilter, setActiveFilter] = useState("All");

  // Get unique tech stacks for filtering with validation
  const allTechStacks = [
    ...new Set(
      projectDetails.filter((project) => Array.isArray(project.techstack)).flatMap((project) => project.techstack)
    ),
  ];
  const filters = ["All", ...allTechStacks.slice(0, 5)]; // Limit to 5 main filters

  useEffect(() => {
    // Section entrance animation
    gsap.fromTo(
      sectionRef.current,
      {opacity: 0, y: 50},
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
        },
      }
    );

    // Staggered animation for project cards
    const projectCards = projectsGridRef.current.children;
    gsap.fromTo(
      projectCards,
      {opacity: 0, y: 50, scale: 0.9},
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: projectsGridRef.current,
          start: "top 70%",
          end: "bottom 30%",
        },
      }
    );
  }, []);

  // Filter projects based on selected filter with validation
  const filteredProjects =
    activeFilter === "All"
      ? projectDetails
      : projectDetails.filter(
          (project) => Array.isArray(project.techstack) && project.techstack.includes(activeFilter)
        );

  return (
    <main className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 min-h-screen">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        {/* Header Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Projects
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Explore my project dengan berbagai teknologi dan tampilan yang menarik.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400"
                }`}>
                {filter}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section>
          <div ref={projectsGridRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291-1.005-5.709-2.291M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No projects found</h3>
              <p className="text-gray-600 dark:text-gray-400">No projects match the selected filter.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

// Project Card Component
function ProjectCard({title, image, description, techstack = [], previewLink, githubLink}) {
  const [isHovered, setIsHovered] = useState(false);

  // Ensure techstack is always an array
  const safeTechstack = Array.isArray(techstack) ? techstack : typeof techstack === "string" ? [techstack] : [];

  return (
    <div
      className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}>
          {/* Action buttons */}
          <div className="absolute bottom-4 left-4 right-4 flex gap-3">
            {previewLink && (
              <a
                href={previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-xl font-medium text-center hover:bg-white transition-all duration-300 flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Demo
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-900/90 backdrop-blur-sm text-white px-4 py-2 rounded-xl font-medium text-center hover:bg-gray-900 transition-all duration-300 flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Code
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {safeTechstack.length > 0 ? (
            <>
              {safeTechstack.slice(0, 4).map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full font-medium">
                  {tech}
                </span>
              ))}
              {safeTechstack.length > 4 && (
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full font-medium">
                  +{safeTechstack.length - 4}
                </span>
              )}
            </>
          ) : (
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full font-medium">
              No tech stack specified
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
