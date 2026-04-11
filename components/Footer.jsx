"use client";

import { FiMail } from "react-icons/fi";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { useLanguage } from "@/hooks/useLanguage";

export default function Footer() {
    const { language } = useLanguage();

    const socialLinks = [
        {
            label: "Email",
            href: "mailto:kahlaluthifiyah@gmail.com",
            icon: FiMail,
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/kahla-luthfiyah-halim-817730323?utm_source=share_via&utm_content=profile&utm_medium=member_android",
            icon: FaLinkedinIn,
        },
        {
            label: "GitHub",
            href: "https://github.com/kahlaluthfi31",
            icon: FaGithub,
        },
        {
            label: "Instagram",
            href: "https://www.instagram.com/kahlaluthfi_?igsh=bDhqYTA5NXVzcXE=",
            icon: FaInstagram,
        },
    ];

    return (
        <div id="footer" className="mt-20 scroll-mt-20">
            <div className="text-center">
                <a href="#">
                    <img src="/assets/logo.png" alt="" className="w-36 mx-auto mb-2 dark:hidden" />
                    <img src="/assets/logo_dark.png" alt="" className="w-36 mx-auto mb-2 hidden dark:block" />
                </a>


                <div className="w-max flex items-center gap-2 mx-auto">
                    <img src="/assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="/assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />

                    <a href="mailto:kahlaluthifiyah@gmail.com">kahlaluthifiyah@gmail.com</a>
                </div>
            </div>
            <div className="text-center border-t border-gray-300 dark:border-white/20 mx-[10%] mt-12 py-6">
                <ul className="flex items-center justify-center gap-4 mb-4">
                    {socialLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={item.label}
                                className="w-11 h-11 rounded-full border border-gray-300 dark:border-white/30 flex items-center justify-center text-[#6D28D9] hover:-translate-y-1 hover:shadow-sm transition duration-300"
                            >
                                <item.icon className="text-xl" />
                            </a>
                        </li>
                    ))}
                </ul>

                <p className="text-sm text-gray-600 dark:text-white/70">
                    © {new Date().getFullYear()} Kahla Luthfiyah Halim • {language === "EN" ? "All rights reserved." : "Hak cipta dilindungi."}
                </p>
            </div>
        </div>
    )
}