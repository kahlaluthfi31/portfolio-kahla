"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const rotatingWords = {
    ID: ["merancang", "mengembangkan", "menerapkan"],
    EN: ["designing", "developing", "implementing"],
};

export default function Header() {
    const [wordIndex, setWordIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const { language } = useLanguage();

    useEffect(() => {
        let timeoutId;

        const intervalId = setInterval(() => {
            setIsVisible(false);

            timeoutId = setTimeout(() => {
                setWordIndex((prev) => (prev + 1) % rotatingWords[language].length);
                setIsVisible(true);
            }, 250);
        }, 2000);

        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        };
    }, [language]);

    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            {/* <img src="/assets/profile-img.png" alt="" className="rounded-full w-32" /> */}
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                Kahla Luthfiyah Halim
            </h3>
            <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
                {language === "EN"
                    ? "Full-Stack Website Developer"
                    : "Pengembang Website Full-Stack"}
            </h1>
            <p className="max-w-2xl mx-auto font-Ovo">
                {language === "EN" ? "Experienced in" : "Memiliki pengalaman dalam"}{" "}
                <span
                    className={`inline-block font-semibold transition-all duration-300 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
                    }`}
                    style={{ color: "#B923DF" }}
                >
                    {rotatingWords[language][wordIndex]}
                </span>{" "}
                {language === "EN" ? "robust applications" : "aplikasi yang kokoh"}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a href="#footer"
                    className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-[#B923DF] to-[#7cafea] text-white flex items-center gap-2 dark:border-transparent">
                    {language === "EN" ? "Contact me" : "Hubungi Saya"} <img src="/assets/right-arrow-white.png" alt="" className="w-4" />
                </a>

                <a href="/assets/CV_Kahla-Luthfiyah-Halim.pdf" download="CV_Kahla-Luthfiyah-Halim.pdf"
                    className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white">
                    {language === "EN" ? "Download CV" : "Unduh CV"} <img src="/assets/download-icon.png" alt="" className="w-4 dark:invert" />
                </a>
            </div>
        </div>
    )
}