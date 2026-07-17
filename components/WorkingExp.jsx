"use client";

import { workingExpList } from "@/data/workingExpData"; // Pastikan path data sudah sesuai
import { useLanguage } from "@/hooks/useLanguage";

export default function WorkingExp() {
  const { language } = useLanguage();

  return (
    <section id="working-exp" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">
        {language === "EN" ? "Work Journey" : "Riwayat Pekerjaan"}
      </h4>
      <h2 className="text-center text-5xl font-Ovo mb-12">
        {language === "EN" ? "Work Experience" : "Pengalaman Kerja"}
      </h2>

      <div className="max-w-5xl mx-auto p-6 sm:p-10">
        <div className="relative">
          {/* Garis vertikal dipindah ke sebelah kanan */}
          <div className="absolute right-3 sm:right-5 top-2 bottom-2 w-px bg-gray-300 dark:bg-white/20" />

          {workingExpList.map((item) => (
            <div
              key={item.perusahaan} // Sesuaikan dengan key object data kamu
              className="relative mb-10 last:mb-0 pr-10 sm:pr-14 text-right" // Menggunakan pr (padding-right) dan text-right
            >
              {/* Titik timeline dipindah ke sebelah kanan */}
              <span className="absolute right-3 sm:right-5 top-2 translate-x-1/2 w-4 h-4 rounded-full bg-[#B923DF] shadow-[0_0_0_4px_rgba(185,35,223,0.16)]" />

              <h4 className="text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
                {item.perusahaan}
              </h4>
              <p className="text-gray-700 dark:text-white/85 text-xl mt-1">
                {language === "EN"
                  ? item.jabatanEn || item.jabatan
                  : item.jabatan}
              </p>
              <p className="text-[#B923DF] text-xl sm:text-2xl font-medium mt-2 mb-1">
                {language === "EN" ? item.periodEn || item.period : item.period}
              </p>
              {/* Ditambahkan ml-auto agar pembatas max-w-3xl tetap rapi di sisi kanan */}
              <p className="text-gray-700 dark:text-white/85 text-lg leading-relaxed max-w-3xl ml-auto">
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
