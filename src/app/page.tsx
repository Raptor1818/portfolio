import HeroSection from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";


export default function HomePage() {
  return (
    <>
      <main className="flex flex-col gap-12 p-4 md:p-12">
        <Navbar></Navbar>
        <HeroSection></HeroSection>

        <ProjectSection></ProjectSection>

        {/* Skills */}
        <div>

        </div>
      </main>

      {/* Contacts */}
      <footer>

      </footer>
    </>
  );
}
