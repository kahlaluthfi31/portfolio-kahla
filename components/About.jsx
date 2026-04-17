"use client";

import { educationList } from "@/data/educationData";
import { useLanguage } from "@/hooks/useLanguage";

export default function About() {
    const { language } = useLanguage();

    const topEducation = educationList[0];
    const topEducationSummary = topEducation
        ? `${topEducation.institusi}`
        : "-";

    const tools = [
        { name: 'React', icon: '/assets/react.svg' },
        { name: 'Node.js', icon: '/assets/node.png' },
        { name: 'Nest.js', icon: '/assets/nest.svg' },
        { name: 'Vue.js', icon: '/assets/vue.webp' },
        { name: 'Laravel', icon: '/assets/laravel.png' },
        { name: 'JavaScript', icon: '/assets/JavaScript.png' },
        { name: 'MySql (Integrasi API)', icon: '/assets/my-sql.png' },
        { name: 'MongoDB', icon: '/assets/mongodb.png' },
        { name: 'HTML/CSS', icon: '/assets/html-css.png' },
        { name: 'TailwindCSS', icon: '/assets/tailwind.png' },
        { name: 'Bootstrap CSS', icon: '/assets/bootstrap.svg' },
        { name: 'Git', icon: '/assets/git.png' },
        { name: 'Github', icon: '/assets/git.png' },
        { name: 'dbDiagram', icon: '/assets/dbdiagram-io.png' },
        { name: 'Postman', icon: '/assets/postman.webp' },
        { name: 'Figma', icon: '/assets/figma.png' },
    ];

    const data = [
        {
            name: language === "EN" ? 'Languages' : 'Bahasa',
            icon1: '/assets/code-icon.png',
            icon2: '/assets/code-icon-dark.png',
            description: language === "EN" ? 'TypeScript, Next.js (React), and PHP' : 'TypeScript, Next.js (React), dan PHP',
        },
        {
            name: language === "EN" ? 'Education' : 'Pendidikan',
            icon1: '/assets/edu-icon.png',
            icon2: '/assets/edu-icon-dark.png',
            description: topEducationSummary,
        },
        {
            name: language === "EN" ? 'Projects' : 'Proyek',
            icon1: '/assets/project-icon.png',
            icon2: '/assets/project-icon-dark.png',
            description: language === "EN" ? 'Built more than 5 projects' : 'Membangun lebih dari 5 proyek',
        },
    ];
    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">{language === "EN" ? "Introduction" : "Perkenalan"}</h4>
            <h2 className="text-center text-5xl font-Ovo">{language === "EN" ? "About me" : "Tentang saya"}</h2>

            <div className="flex w-full flex-col lg:flex-row items-center lg:items-start gap-20 my-20">
                <div className="max-w-max mx-auto lg:mx-0 relative self-start">
                    <img src='/assets/user-image.png' alt="" className="w-64 sm:w-80 rounded-3xl max-w-none" />

                    <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
                        <img src="/assets/circular-text.png" alt="" className="w-full animate-spin_slow" />
                        <img src="/assets/dev-icon.png" alt="" className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                </div>
                <div className="flex-1">
                    <p className="mb-10 max-w-2xl font-Ovo">
                        {language === "EN"
                            ? <>Kahla Luthfiyah Halim is a <span className="font-bold">Full-Stack Web Developer</span> with more than 3 years of experience in software engineering. She is skilled at solving complex technical problems and committed to delivering optimal software systems in collaborative environments.</>
                            : <>Kahla Luthfiyah Halim adalah seorang <span className="font-bold">Full-Stack Web Developer</span> dengan pengalaman selama lebih dari 3 tahun di bidang rekayasa perangkat lunak. Memiliki kemampuan dalam menyelesaikan masalah teknis yang kompleks dan berkomitmen menghasilkan sistem perangkat lunak yang optimal dalam lingkungan kerja kolaboratif.</>}
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {data.map((data) => (
                            <li key={data.name} className="border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50">
                                <img src={data.icon1} alt="" className="w-7 mt-3 dark:hidden" />
                                <img src={data.icon2} alt="" className="w-7 mt-3 hidden dark:block" />
                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{data.name}</h3>
                                <p className="text-gray-600 text-sm dark:text-white/80">{data.description}</p>
                            </li>
                        ))}
                    </ul>
                    <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">{language === "EN" ? "Tools & Tech Stack" : "Perangkat & Tech Stack"}</h4>

                    <ul className="flex flex-wrap items-center gap-3 sm:gap-4 max-w-2xl">
                        {tools.map((tool) => (
                            <li key={tool.name} className="px-4 py-2 text-sm border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-300 hover:bg-lightHover dark:hover:bg-darkHover/50 flex items-center gap-2">
                                <img src={tool.icon} alt={tool.name} className="w-4 h-4 object-contain" />
                                <span className="text-gray-700 dark:text-white/90">{tool.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}