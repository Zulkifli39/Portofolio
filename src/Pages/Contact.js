import React, {useRef, useEffect, useState} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {contactDetails} from "../Details";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const {email, phone} = contactDetails;
  const sectionRef = useRef();
  const [copied, setCopied] = useState({email: false, phone: false});

  useEffect(() => {
    // Section entrance animation
    gsap.fromTo(
      sectionRef.current.children,
      {opacity: 0, y: 50},
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
        },
      }
    );
  }, []);

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied({...copied, [type]: true});
      setTimeout(() => {
        setCopied({...copied, [type]: false});
      }, 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <main className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-300/10 to-purple-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <section ref={sectionRef} className="text-center">
          {/* Header Section */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Contact Me
              </h1>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Email Card */}
            <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 dark:border-gray-700/50 hover:border-blue-200 dark:hover:border-blue-500">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Email</h3>

                <a
                  href={`mailto:${email}`}
                  className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300 break-all">
                  {email}
                </a>

                <div className="flex gap-3 mt-6 justify-center">
                  <button
                    onClick={() => copyToClipboard(email, "email")}
                    className="flex items-center gap-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-2xl font-medium border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    {copied.email ? (
                      <>
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                        </svg>
                        Copied!
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                        </svg>
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 dark:border-gray-700/50 hover:border-green-200 dark:hover:border-green-500">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/50 dark:from-green-900/20 dark:to-blue-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Handphone</h3>

                <a
                  href={`tel:${phone}`}
                  className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent hover:from-green-700 hover:to-blue-700 transition-all duration-300">
                  {phone}
                </a>

                <div className="flex gap-3 mt-6 justify-center">
                  <button
                    onClick={() => copyToClipboard(phone, "phone")}
                    className="flex items-center gap-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-2xl font-medium border border-gray-200 dark:border-gray-600 hover:border-green-300 dark:hover:border-green-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    {copied.phone ? (
                      <>
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                        </svg>
                        Copied!
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                        </svg>
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="flex items-center justify-center mb-16">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
            <div className="px-6">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Contact;
