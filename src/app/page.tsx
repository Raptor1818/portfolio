import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import { Card } from "@/components/ui/card";


export default function HomePage() {
  return (
    <>
      <main className="flex flex-col gap-12 p-4 md:p-12">
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
