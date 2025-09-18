import {useRef, useEffect} from "react";
import gsap from "gsap";
import {personalDetails} from "../Details";
import About from "./About";
import Technologies from "./Technologies";
import Projects from "./Projects";
import Contact from "./Contact";
import TextType from "../Components/TextType"; // Import komponen TextType

function Home() {
  const {name, tagline, img} = personalDetails;
  const heroRef = useRef();
  const nameRef = useRef();
  const taglineRef = useRef();
  const imageRef = useRef();
  const aboutSectionRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    // Hero section animations (menghilangkan animasi untuk nameRef karena akan menggunakan TextType)
    tl.from(heroRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "Power3.easeOut",
    })
      .from(
        taglineRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "Power2.easeOut",
        },
        "-=0.3"
      )
      .from(
        imageRef.current,
        {
          scale: 0.8,
          rotation: 10,
          opacity: 0,
          duration: 1.2,
          ease: "Back.easeOut.config(1.7)",
        },
        "-=1"
      )
      .from(
        aboutSectionRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "Power2.easeOut",
        },
        "-=0.3"
      );
  }, []);

  return (
    <>
      {/* Hero Section */}
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-300/10 to-purple-300/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="min-h-screen flex items-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
              {/* Text Content */}
              <div className="space-y-8">
                <div ref={heroRef} className="space-y-4">
                  <div className="hidden md:inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Sedang Update Portofolio</p>
                  </div>

                  {/* Menggunakan TextType untuk animasi typing */}
                  <div className="text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                    <TextType
                      text={["Hi Semua! 👋", "Saya " + name, "Welcome to my portfolio!"]}
                      as="h1"
                      typingSpeed={75}
                      pauseDuration={2000}
                      deletingSpeed={50}
                      showCursor={true}
                      cursorCharacter="|"
                      cursorClassName="text-blue-600 dark:text-blue-400"
                      textColors={[
                        "#1e40af", // blue-800
                        "#7c3aed", // violet-600
                        "#db2777", // pink-600
                      ]}
                      loop={true}
                      initialDelay={500}
                      className="min-h-[1.2em]"
                    />
                  </div>
                </div>

                {/* Nama tetap ditampilkan dengan gradient (opsional) */}
                <div ref={nameRef} className="relative">
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full transform scale-x-0 animate-pulse"></div>
                </div>

                <div ref={taglineRef} className="space-y-6">
                  <h2 className="text-2xl md:text-3xl xl:text-4xl font-semibold text-gray-700 dark:text-gray-300 leading-relaxed">
                    {tagline}
                  </h2>

                  {/* Call to Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    {/* View CV -> langsung download dari Google Drive */}
                    <a
                      href="https://drive.google.com/uc?export=download&id=1OyIrtbH10Qf9AKOHXqPtoM75-q9LeCyF"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <span className="relative z-10">Download CV</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>

                    <button className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-2xl hover:border-purple-500 dark:hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50">
                      View Projects
                    </button>
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="relative flex justify-center lg:justify-end">
                <div ref={imageRef} className="relative">
                  {/* Floating decoration */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl animate-pulse"></div>

                  {/* Main image container */}
                  <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl">
                    <img
                      className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-lg"
                      src={img}
                      alt={name}
                    />

                    {/* Floating elements */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                      <span className="text-2xl">⚡</span>
                    </div>

                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl">🚀</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </main>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div ref={aboutSectionRef} className="text-center">
            {/* Section header */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Tentang Saya
              </h2>
            </div>

            {/* About content */}
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                {personalDetails.about}
              </p>

              {/* Stats or highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">1+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">10+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">35+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Repository</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other sections */}
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
