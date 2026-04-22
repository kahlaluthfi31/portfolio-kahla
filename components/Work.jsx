"use client";

import { useLanguage } from "@/hooks/useLanguage";

export default function Work() {
    const { language } = useLanguage();

    const work = [
        {
            name: "Website Sekolah",
            icon: "/assets/web-sekolah.png",
            year: "Feb - March 2026",
            link: "https://www.smkn1ciamis.id/",
            category: { ID: "PENGEMBANGAN WEB", EN: "WEB DEVELOPMENT" },
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
            summary: {
                ID: "Platform website portofolio saya sendiri yang menampilkan berbagai proyek dan tentang diri sendiri.",
                EN: "My personal portfolio website showcasing various projects and information about myself.",
            },
            size: "md",
        },
    ];

    const cardSizeClass = {
        lg: "md:col-span-8 min-h-[250px] md:min-h-[280px]",
        md: "md:col-span-4 min-h-[250px] md:min-h-[280px]",
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

            <div className="grid grid-cols-1 md:grid-cols-12 my-10 gap-5">
                {work.map((item) => {
                    const CardWrapper = item.link ? "a" : "div";

                    return (
                        <CardWrapper
                            key={item.name}
                            {...(item.link
                                ? {
                                      href: item.link,
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                  }
                                : {})}
                            className={`group relative overflow-hidden rounded-2xl ${cardSizeClass[item.size]}`}
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
                                <div className="text-white">
                                    <h3 className="font-semibold text-xl">{item.name}</h3>
                                    <p className="text-xs text-white/85 mt-1">{item.year}</p>
                                    <p
                                        className="text-sm text-white/80 mt-2 max-w-md max-h-0 opacity-0 translate-y-3 overflow-hidden transition-all duration-500 ease-out group-hover:max-h-24 group-hover:opacity-100 group-hover:translate-y-0"
                                    >
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
                                    <img src="/assets/right-arrow-white.png" alt="" className="w-4" />
                                </div>
                            </div>
                        </CardWrapper>
                    );
                })}
            </div>
        </div>
    );
}