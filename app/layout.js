import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-outfit",
});
const ovo = Ovo({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-ovo",
});

export const metadata = {
    title: "Portfolio - Kahla Luthfiyah Halim",
    description: "Kahla Luthfiyah Halim is a Full-Stack Web Developer based in Indonesian. I am a self-taught developer with 3 years of experience in multiple companies.",
    icons: {
        icon: "/assets/dev-icon.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="font-Outfit leading-8 dark:bg-darkTheme dark:text-white">
                {children}
            </body>
        </html>
    );
}