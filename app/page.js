import LenisScroll from "@/components/LenisScroll";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import WorkingExp from "@/components/WorkingExp";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Page() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <Header />
            <About />
            <WorkingExp />
            <Education />
            <Services />
            <Work />
            <Footer />
        </>
    )
};