import React from "react";
import {workDetails, eduDetails} from "../Details";

// Modern Work Experience Card Component
function WorkCard({position, company, location, type, duration, detail}) {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {position}
            </h3>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
              <div className="w-5 h-5 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 3a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="font-medium">{company}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <div className="w-4 h-4 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span>{location}</span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-sm">
              {type}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{duration}</span>
          </div>
        </div>

        {/* Details */}
        {detail && (
          <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border-l-4 border-blue-500">
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">{detail}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Modern Education Card Component
function EduCard({position, company, location, type, duration}) {
  return (
    <div className="group relative bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 dark:border-purple-700">
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.75 2.524z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {position}
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-semibold">{company}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{duration}</span>
              </div>
            </div>
          </div>

          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-sm">
            {type}
          </span>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Work Experience Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Pengalaman Kerja
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Perjalanan karir yang telah saya jalani
            </p>
          </div>

          <div className="grid gap-6">
            {workDetails.map((work, index) => (
              <WorkCard
                key={index}
                position={work.Position}
                company={work.Company}
                location={work.Location}
                type={work.Type}
                duration={work.Duration}
                detail={work.Detail}
              />
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.75 2.524z" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Pendidikan
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Latar belakang pendidikan yang membentuk fondasi pengetahuan saya
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {eduDetails.map((edu, index) => (
              <EduCard
                key={index}
                position={edu.Position}
                company={edu.Company}
                location={edu.Location}
                type={edu.Type}
                duration={edu.Duration}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;
