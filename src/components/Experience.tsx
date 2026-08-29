"use client";

import { useState } from "react";

interface ExperienceItem {
  company: string;
  location: string;
  period: string;
  role: string;
  description: string;
  bullets: string[];
  tags: string[];
}

interface EducationItem {
  institution: string;
  location: string;
  period: string;
  degree: string;
  score?: string;
  bullets: string[];
}

const workExperiences: ExperienceItem[] = [
  {
    company: "Ministry of Environment (PDLUK)",
    location: "Jakarta, Indonesia",
    period: "May 2025 - Present",
    role: "Programmer",
    description:
      "Government ministry responsible for environmental protection and sustainable development (KLH/BPLH).",
    bullets: [
      "Engineered internal web applications for organizational open recruitment systems.",
      "Customized application features to comply with regulatory standards and business logic.",
      "Conducted code reviews to ensure high code quality, structural consistency, and maintainability.",
      "Optimized database queries and views to improve overall system performance and throughput.",
      "Executed technology migrations and system adjustments for enhanced stability and modern architecture.",
    ],
    tags: ["Laravel", "React.js", "Vue.js", "Nuxt.js", "Docker", "PostgreSQL", "Nginx"],
  },
  {
    company: "Ratu Pertiwi Group",
    location: "Jakarta, Indonesia",
    period: "May 2024 - May 2025",
    role: "IT Staff",
    description:
      "A prominent women's fashion retail group in Indonesia operating over 200 stores nationwide.",
    bullets: [
      "Developed and maintained internal systems for SOP management, payments, and store transaction processing.",
      "Integrated QRIS payment gateway functionality into the Point of Sale (POS) system for digital checkout.",
      "Managed feature developments across Webstore, Payment modules, Siceklis, and Mobile POS applications.",
      "Architected an automated daily email reporting system for cross-platform data tracking.",
    ],
    tags: ["CodeIgniter", "PHP", "POS Systems", "QRIS", "Payment Gateway", "Auto Email"],
  },
  {
    company: "Odama Studio",
    location: "Surakarta, Indonesia",
    period: "Feb 2022 - Dec 2023",
    role: "Frontend Developer",
    description:
      "Design agency building user-centric digital products and interactive web experiences for growing businesses.",
    bullets: [
      "Crafted responsive and highly accessible web user interfaces tailored across all screen sizes.",
      "Integrated frontend interfaces with Laravel backend RESTful API services.",
      "Developed dynamic custom web animations including sliders, canvas components, and accordions.",
      "Engineered the official Odama.io landing page leveraging Next.js",
    ],
    tags: ["Next.js", "GSAP", "Laravel", "Tailwind CSS", "Animations"],
  },
];

const educationList: EducationItem[] = [
  {
    institution: "Universitas Muhammadiyah Surakarta",
    location: "Surakarta, Indonesia",
    period: "Aug 2019 - Sep 2023",
    degree: "Bachelor of Computer Science",
    score: "GPA 3.77 / 4.00",
    bullets: [
      "Laboratory Assistant for Structured Algorithms and Programming",
      "Laboratory Assistant for Dynamic Web Development",
    ],
  },
  {
    institution: "Binar Academy",
    location: "Jakarta, Indonesia",
    period: "Feb 2022 - Jul 2022",
    degree: "Independent Study Certificate in Backend JavaScript",
    score: "Grade 4.60 / 5.00",
    bullets: [
      "Built RESTful APIs, compiled Swagger documentation, and wrote automated unit tests with Jest.",
      "Implemented JWT authentication, real-time WebSocket communication, and Nodemailer integration.",
      "Managed media storage handling and automated application deployment using CI/CD pipelines.",
    ],
  },
  {
    institution: "Alterra Academy",
    location: "Malang, Indonesia",
    period: "Aug 2022 - Dec 2022",
    degree: "Independent Study Certificate in Frontend JavaScript",
    score: "Grade 83.00 / 100.00",
    bullets: [
      "Developed frontend applications using Redux Toolkit, React Router DOM, and GraphQL Apollo Client.",
      "Enforced clean code practices, Jest testing suites, and automated Netlify deployments.",
    ],
  },
];

const ExperienceComponent = () => {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");

  return (
    <section className="py-12" id="experience">
      <div className="container px-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
              Experience &amp; Education
            </h2>
            <p className="text-[#D6D6D6] text-lg">
              Professional track record, work history, and educational background.
            </p>
          </div>

          {/* Toggle Tabs */}
          <div className="flex bg-[#323443] p-1 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setActiveTab("work")}
              className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors ${activeTab === "work"
                ? "bg-[#3BF686] text-[#272727]"
                : "text-[#D6D6D6] hover:text-white"
                }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors ${activeTab === "education"
                ? "bg-[#4CA9FF] text-[#272727]"
                : "text-[#D6D6D6] hover:text-white"
                }`}
            >
              Education &amp; Training
            </button>
          </div>
        </div>

        {/* Work Experience Tab */}
        {activeTab === "work" && (
          <div className="space-y-6">
            {workExperiences.map((exp, idx) => (
              <div
                key={idx}
                className="bg-[#323443] rounded-2xl p-6 md:p-8 border border-transparent hover:border-[#3BF686]/30 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {exp.role}{" "}
                      <span className="text-[#3BF686] font-normal text-lg">
                        @ {exp.company}
                      </span>
                    </h3>
                    <p className="text-sm text-[#A0A0A0]">{exp.location}</p>
                  </div>
                  <span className="inline-block px-3 py-1 bg-[#272727] text-[#3BF686] text-xs font-semibold rounded-full border border-[#3BF686]/20 self-start md:self-auto">
                    {exp.period}
                  </span>
                </div>

                <p className="text-[#D6D6D6] text-sm mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="list-disc list-inside space-y-2 text-[#D4D4D4] text-sm mb-6">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="leading-relaxed">
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 bg-[#272727] text-white/80 text-xs rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Education & Certification Tab */}
        {activeTab === "education" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="bg-[#323443] rounded-2xl p-6 flex flex-col justify-between hover:border hover:border-[#4CA9FF]/30 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[#4CA9FF] font-semibold">
                      {edu.period}
                    </span>
                    {edu.score && (
                      <span className="text-xs px-2 py-0.5 bg-[#272727] text-[#80FFA3] rounded font-mono">
                        {edu.score}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {edu.institution}
                  </h3>
                  <p className="text-sm text-[#3BF686] font-medium mb-3">
                    {edu.degree}
                  </p>
                  <ul className="list-disc list-inside space-y-1.5 text-[#D4D4D4] text-xs leading-relaxed">
                    {edu.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceComponent;
