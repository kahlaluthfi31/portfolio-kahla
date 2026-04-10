"use client";

import { useLanguage } from "@/hooks/useLanguage";

export default function Work() {
    const { language } = useLanguage();

    const work = [
        {
            name: 'Website Sekolah',
            icon: '/assets/work-1.png',
            year: 'Feb - March 2026',
            link: 'https://www.smkn1ciamis.id/',
        },
        {
            name: 'MeatMap - IAM',
            icon: '/assets/work-2.png',
            year: 'Nov 2025 - Jan 2026',
            link: 'https://dev-new.mappy.id/',
        },
        {
            name: 'Kepegawaian KAI',
            icon: '/assets/work-3.png',
            year: 'Jul 2025',
            link: '',
        },
        {
            name: 'Rental Motor',
            icon: '/assets/work-4.png',
            year: 'Sep 2025',
            link: '',
        }
    ];
    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">{language === "EN" ? "My portfolio" : "Portofolio Saya"}</h4>
            <h2 className="text-center text-5xl font-Ovo">{language === "EN" ? "My latest work" : "Karya Terbaru Saya"}</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                {language === "EN"
                    ? "Here are several recent projects that reflect my experience in building responsive, functional, and user-focused digital solutions."
                    : "Berikut beberapa proyek terbaru yang mencerminkan pengalaman saya dalam membangun solusi digital yang responsif, fungsional, dan berfokus pada pengguna."}
            </p>

            <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
                {work.map((work) => (
                    work.link ? (
                        <a
                            key={work.name}
                            href={work.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group block"
                            style={{ backgroundImage: `url(${work.icon})` }}
                        >
                            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                                <div>
                                    <h2 className="font-semibold">{work.name}</h2>
                                    <p className="text-sm text-gray-700">{work.year}</p>
                                </div>
                                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                    <img src="/assets/send-icon.png" alt="" className="w-5" />
                                </div>
                            </div>
                        </a>
                    ) : (
                        <div key={work.name} className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group" style={{ backgroundImage: `url(${work.icon})` }}>
                            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                                <div>
                                    <h2 className="font-semibold">{work.name}</h2>
                                    <p className="text-sm text-gray-700">{work.year}</p>
                                </div>
                                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                    <img src="/assets/send-icon.png" alt="" className="w-5" />
                                </div>
                            </div>
                        </div>
                    )
                ))}
            </div>

        </div>
    )
}