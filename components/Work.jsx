"use client";

import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";

// Map tech name → { image, label }
const TECH_ICONS = {
  React: { image: "/assets/react.svg", label: "React" },
  "Node.js": { image: "/assets/node.png", label: "Node.js" },
  "Nest.js": { image: "/assets/nest.svg", label: "Nest.js" },
  "Next.js": { image: "/assets/next.png", label: "Next.js" },
  "Vue.js": { image: "/assets/vue.webp", label: "Vue.js" },
  TypeScript: { image: "/assets/typescript.png", label: "TypeScript" },
  JavaScript: { image: "/assets/JavaScript.png", label: "JavaScript" },
  Laravel: { image: "/assets/laravel.png", label: "Laravel" },
  Supabase: { image: "/assets/supabase.png", label: "Supabase" },
  MySQL: { image: "/assets/my-sql.png", label: "MySQL" },
  MongoDB: { image: "/assets/mongodb.png", label: "MongoDB" },
  PostgreSQL: { image: "/assets/postgresql.png", label: "PostgreSQL" },
  "RESTful API": { image: "/assets/restfull-api.png", label: "RESTful API" },
  Vercel: { image: "/assets/vercel.png", label: "Vercel" },
  Appwrite: { image: "/assets/appwrite.png", label: "Appwrite" },
  "HTML/CSS": { image: "/assets/html-css.png", label: "HTML/CSS" },
  TailwindCSS: { image: "/assets/tailwind.png", label: "TailwindCSS" },
  "BootstrapCSS": { image: "/assets/bootstrap.svg", label: "BootstrapCSS" },
  Git: { image: "/assets/git.png", label: "Git" },
  Github: { image: "/assets/git.png", label: "Github" },
  dbDiagram: { image: "/assets/dbdiagram-io.png", label: "dbDiagram" },
  Postman: { image: "/assets/postman.webp", label: "Postman" },
  Figma: { image: "/assets/figma.png", label: "Figma" },
  PHP: { image: "/assets/php.png", label: "PHP" },
  MayarID: { image: "/assets/mayarid.png", label: "MayarID" },
};

function TechIcon({ tech, active, onClick }) {
  const meta = TECH_ICONS[tech];
  if (!meta) return null;

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`flex items-center rounded-md bg-white/5 border transition-all duration-300 overflow-hidden focus:outline-none ${
        active
          ? "gap-1.5 px-2.5 py-1 border-white/30"
          : "gap-0 px-1.5 py-1.5 border-white/10 hover:border-white/20 hover:bg-white/10"
      }`}
      title={meta.label}
    >
      <img
        src={meta.image}
        alt={meta.label}
        className="w-3.5 h-3.5 object-contain shrink-0"
      />
      <span
        className={`text-[10px] font-medium text-white/90 whitespace-nowrap transition-all duration-300 ${
          active ? "max-w-[100px] opacity-100" : "max-w-0 opacity-0"
        }`}
      >
        {meta.label}
      </span>
    </button>
  );
}

export default function Work() {
  const { language } = useLanguage();
  const [activeTech, setActiveTech] = useState(null);

  const work = [
    {
      name: "Website Sekolah",
      icon: "/assets/web-sekolah.png",
      year: "Feb - Mar 2026",
      link: "https://www.smkn1ciamis.id/",
      category: { ID: "PENGEMBANGAN WEB", EN: "WEB DEVELOPMENT" },
      techStack: ["TypeScript", "JavaScript", "Next.js", "React", "TailwindCSS", "MySQL"],
      summary: {
        ID: "Platform website sekolah dengan informasi akademik, profil, dan konten publik.",
        EN: "School website platform with academic information, profile, and public content.",
      },
      size: "lg",
    },
    {
      name: "MeatMap Travel E-Book",
      icon: "/assets/meatmap.png",
      year: "Nov 2025 - Jan 2026",
      link: "https://dev-new.mappy.id/",
      category: { ID: "PLATFORM DIGITAL", EN: "DIGITAL PLATFORM" },
      techStack: [ 
        "PHP",
        "Laravel",
        "BootstrapCSS",
        "JavaScript",
        "MayarID",
        "MySQL",
      ],
      summary: {
        ID: "Platform e-book traveling untuk pengguna yang membutuhkan buku panduan perjalanan atau destinasi, dengan sistem berlangganan (subscription).",
        EN: "A travel e-book platform for users who need guidebooks for trips or destinations, with a subscription-based system.",
      },
      size: "md",
    },
    {
      name: "Kepegawaian KAI",
      icon: "/assets/kai.png",
      year: "Jul 2025",
      link: "",
      category: { ID: "SISTEM INTERNAL", EN: "INTERNAL SYSTEM" },
      techStack: ["PHP", "Laravel", "HTML/CSS", "JavaScript", "TailwindCSS", "MySQL", "Node.js"],
      summary: {
        ID: "Aplikasi internal untuk pengelolaan data pegawai dan monitoring administrasi.",
        EN: "Internal application for employee data management and administrative monitoring.",
      },
      size: "md",
    },
    {
      name: "Rental Motor",
      icon: "/assets/rental-motor.png",
      year: "Sep 2025",
      link: "https://rmc-kahla.wiska.site/",
      category: { ID: "APLIKASI BISNIS", EN: "BUSINESS APP" },
      techStack: ["PHP", "JavaScript", "HTML/CSS", "BootstrapCSS", "Laravel", "MySQL", "Node.js"],
      summary: {
        ID: "Sistem pemesanan rental motor dengan alur booking yang sederhana dan cepat.",
        EN: "Motorbike rental booking system with a simple and fast reservation flow.",
      },
      size: "lg",
    },
    {
      name: "Website Perpustakaan",
      icon: "/assets/perpus.png",
      year: "Apr 2026",
      link: "https://library-project-mu-orcin.vercel.app",
      category: { ID: "PENGEMBANGAN WEB", EN: "WEB DEVELOPMENT" },
      techStack: ["Laravel"],
      summary: {
        ID: "Platform website perpustakaan yang menyediakan berbagai layanan dan informasi terkait peminjaman buku, katalog, dan manajemen anggota secara online.",
        EN: "Library website platform that provides various services and information related to book borrowing, catalogs, and member management online.",
      },
      size: "lg",
    },
    {
      name: "Portfolio",
      icon: "/assets/portfolio.png",
      year: "Mar 2026",
      link: "https://portfolio-kahla.vercel.app",
      category: { ID: "PENGEMBANGAN WEB", EN: "WEB DEVELOPMENT" },
      techStack: ["Laravel"],
      summary: {
        ID: "Platform website portofolio saya sendiri yang menampilkan berbagai proyek dan tentang diri sendiri.",
        EN: "My personal portfolio website showcasing various projects and information about myself.",
      },
      size: "md",
    },
    {
      name: "Website Penjahit - RBA",
      icon: "/assets/penjahit.png",
      year: "Apr 2026",
      link: "https://penjahit-rba.vercel.app",
      category: { ID: "APLIKASI BISNIS", EN: "BUSINESS APP" },
      techStack: ["Laravel"],
      summary: {
        ID: "Platform website untuk bisnis penjahit dengan fitur contoh dan harga paket produk, pemesanan online, dan manajemen pelanggan.",
        EN: "Website platform for tailoring business with product samples and pricing packages, online ordering, and customer management features.",
      },
      size: "md",
    },
    {
      name: "DoPlanZ - Plan it, Do it",
      icon: "/assets/doplanz.png",
      year: "Jun 2026",
      link: "https://doplanz.wiska.site",
      category: { ID: "APLIKASI MOBILE", EN: "MOBILE APP" },
      techStack: ["Next.js", "React", "JavaScript", "TailwindCSS", "MongoDB", "Vercel"],
      summary: {
        ID: "Platform website untuk manajemen tugas berdasarkan kategori dengan fitur perencanaan, penjadwalan, dan laporan.",
        EN: "Categorized task management web platform with planning, scheduling, and reporting tools.",
      },
      size: "lg",
    },
  ];

  const cardSizeClass = {
    lg: "md:col-span-8",
    md: "md:col-span-4",
  };

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">
        {language === "EN" ? "My portfolio" : "Portofolio Saya"}
      </h4>
      <h2 className="text-center text-5xl font-Ovo">
        {language === "EN" ? "My latest work" : "Karya Terbaru Saya"}
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        {language === "EN"
          ? "Here are several recent projects that reflect my experience in building responsive, functional, and user-focused digital solutions."
          : "Berikut beberapa proyek terbaru yang mencerminkan pengalaman saya dalam membangun solusi digital yang responsif, fungsional, dan berfokus pada pengguna."}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-12 my-10 gap-x-5 gap-y-10">
        {work.map((item) => {
          const CardWrapper = item.link ? "a" : "div";

          return (
            <div
              key={item.name}
              className={`flex flex-col gap-3 ${cardSizeClass[item.size]}`}
            >
              <CardWrapper
                {...(item.link
                  ? {
                      href: item.link,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
                className="group relative overflow-hidden rounded-2xl flex-1 min-h-[250px] md:min-h-[280px]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-105 duration-500"
                  style={{ backgroundImage: `url(${item.icon})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />

                <div className="absolute left-4 top-4">
                  <span className="text-[10px] tracking-wide font-semibold text-white bg-[#B923DF]/85 px-2.5 py-1 rounded-sm">
                    {item.category[language]}
                  </span>
                </div>

                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                  <div className="text-white flex-1 min-w-0">
                    <h3 className="font-semibold text-xl">{item.name}</h3>
                    <p className="text-xs text-white/85 mt-1">{item.year}</p>
                    <p className="text-sm text-white/80 mt-2 max-w-md max-h-0 opacity-0 translate-y-3 overflow-hidden transition-all duration-500 ease-out group-hover:max-h-24 group-hover:opacity-100 group-hover:translate-y-0">
                      {item.summary[language]}
                    </p>
                  </div>
                  <div
                    className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition ${
                      item.link
                        ? "bg-white/15 border-white/30 backdrop-blur-sm group-hover:bg-[#B923DF]/80 group-hover:border-[#B923DF]"
                        : "bg-white/10 border-white/20 opacity-60"
                    }`}
                  >
                    <img
                      src="/assets/right-arrow-white.png"
                      alt=""
                      className="w-4"
                    />
                  </div>
                </div>
              </CardWrapper>

              <div className="flex flex-wrap gap-2 px-1">
                {item.techStack.map((tech, index) => {
                  const techId = `${item.name}-${tech}-${index}`;
                  return (
                    <TechIcon
                      key={techId}
                      tech={tech}
                      active={activeTech === techId}
                      onClick={() =>
                        setActiveTech(activeTech === techId ? null : techId)
                      }
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
