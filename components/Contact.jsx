// export default function Contact() {
//     const contactLinks = [
//         {
//             label: "Email",
//             value: "kahlaluthifiyah@gmail.com",
//             href: "mailto:kahlaluthifiyah@gmail.com",
//         },
//         {
//             label: "LinkedIn",
//             value: "Kahla Luthfiyah Halim",
//             href: "https://www.linkedin.com/in/kahla-luthfiyah-halim-817730323?utm_source=share_via&utm_content=profile&utm_medium=member_android",
//         },
//         {
//             label: "GitHub",
//             value: "@kahlaluthfi31",
//             href: "https://github.com/kahlaluthfi31",
//         },
//         {
//             label: "Instagram",
//             value: "@kahlaluthfi_",
//             href: "https://www.instagram.com/kahlaluthfi_?igsh=bDhqYTA5NXVzcXE=",
//         },
//     ];

//     return (
//         <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none">
//             <h4 className="text-center mb-2 text-lg font-Ovo">Hubungi Saya</h4>
//             <h2 className="text-center text-5xl font-Ovo">Mari Terhubung</h2>
//             <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
//                 Kamu bisa menghubungi saya melalui akun berikut untuk kolaborasi, diskusi project, atau peluang kerja.
//             </p>

//             <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {contactLinks.map((item) => (
//                     <a
//                         key={item.label}
//                         href={item.href}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="border border-gray-300 dark:border-white/30 rounded-xl p-5 hover:-translate-y-1 duration-300 hover:shadow-black dark:hover:shadow-white/80 hover:bg-lightHover dark:hover:bg-darkHover/50"
//                     >
//                         <p className="text-sm text-gray-500 dark:text-white/70">{item.label}</p>
//                         <p className="font-semibold mt-1 break-all dark:text-white">{item.value}</p>
//                     </a>
//                 ))}
//             </div>
//         </div>
//     );
// }