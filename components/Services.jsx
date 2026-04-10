"use client";

import {
  SiJavascript,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { useLanguage } from "@/hooks/useLanguage";

export default function Services() {
  const { language } = useLanguage();

  const services = [
    {
      name: language === "EN" ? "Fullstack Development" : "Pengembangan Fullstack",
      icon: SiJavascript,
      description: language === "EN"
        ? "Build end-to-end web applications from user interface to system logic for stable and efficient performance."
        : "Membangun aplikasi web secara menyeluruh dari sisi tampilan hingga logika sistem agar berjalan stabil dan efisien.",
    },
    {
      name: language === "EN" ? "Styling & UI" : "Styling & Antarmuka",
      icon: SiTailwindcss,
      description: language === "EN"
        ? "Design clean, responsive, and user-friendly interfaces to deliver an optimal user experience."
        : "Mendesain antarmuka yang rapi, responsif, dan nyaman digunakan agar pengalaman pengguna tetap optimal.",
    },
    {
      name: "Database & API",
      icon: SiMysql,
      description: language === "EN"
        ? "Manage application data flow and ensure inter-system communication is accurate, secure, and well-structured."
        : "Mengelola alur data aplikasi dan memastikan komunikasi antar sistem berjalan akurat, aman, dan terstruktur.",
    },
    {
      name: language === "EN" ? "Tools & Collaboration" : "Tools & Kolaborasi",
      icon: FaGithub,
      description: language === "EN"
        ? "Support organized teamwork through collaboration, version control, and consistent development workflows."
        : "Mendukung proses kerja tim yang terorganisir melalui kolaborasi, manajemen versi, dan alur pengembangan yang konsisten.",
    },
  ];
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">{language === "EN" ? "Core Expertise" : "Kemampuan Utama"}</h4>
      <h2 className="text-center text-5xl font-Ovo">{language === "EN" ? "My Skills" : "Keahlian Saya"}</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        {language === "EN"
          ? "Focused on end-to-end web application development, from user interface and backend logic to API integration and database management."
          : "Fokus pada pengembangan aplikasi web end-to-end, mulai dari antarmuka pengguna, backend, hingga integrasi API dan pengelolaan database."}
      </p>

      <div className="grid grid-cols-auto gap-6 my-10">
        {services.map((service) => (
          <div
            key={service.name}
            className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <service.icon className="text-4xl text-[#B923DF]" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {service.name}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
