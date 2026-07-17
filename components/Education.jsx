"use client";

import { educationList } from "@/data/educationData";
import { useLanguage } from "@/hooks/useLanguage";

export default function Education() {
  const { language } = useLanguage();

  return (
    <section id="education" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">
        {language === "EN" ? "Education Journey" : "Riwayat Pendidikan"}
      </h4>
      <h2 className="text-center text-5xl font-Ovo mb-12">
        {language === "EN" ? "Education" : "Pendidikan"}
      </h2>

      <div className="max-w-5xl mx-auto p-6 sm:p-10">
        {/* <div className="flex items-start gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-darkHover/40 border border-gray-300 dark:border-white/20 flex items-center justify-center text-[#B923DF] text-xl">
                        <FaGraduationCap />
                    </div>
                    <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">Education</h3>
                </div> */}

        <div className="relative">
          <div className="absolute left-3 sm:left-5 top-2 bottom-2 w-px bg-gray-300 dark:bg-white/20" />

          {educationList.map((item) => (
            <div
              key={item.institusi}
              className="relative mb-10 last:mb-0 pl-10 sm:pl-14"
            >
              <span className="absolute left-3 sm:left-5 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#B923DF] shadow-[0_0_0_4px_rgba(185,35,223,0.16)]" />

              <h4 className="text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
                {item.institusi}
              </h4>
              <p className="text-gray-700 dark:text-white/85 text-xl mt-1">
                {language === "EN"
                  ? item.jurusanEn || item.jurusan
                  : item.jurusan}
              </p>
              <p className="text-[#B923DF] text-xl sm:text-2xl font-medium mt-2 mb-1">
                {language === "EN" ? item.periodEn || item.period : item.period}
              </p>
              <p className="text-gray-700 dark:text-white/85 text-lg leading-relaxed max-w-3xl">
                {language === "EN"
                  ? item.descriptionEn || item.description
                  : item.descriptionId || item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
