import HeroSection from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";


export default function HomePage() {
  return (
    <>
      <Navbar></Navbar>
      <main className="flex flex-col p-4 md:p-12">
        <HeroSection />

        <ProjectSection />

        {/* Skills */}
        <div>

        </div>
      </main>

      {/* Contacts */}
      {/* <footer id="about">

      </footer> */}
    </>
  );
}
