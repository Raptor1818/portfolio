import VariableLinkButton from "@/components/VariableLinkButton";

export interface ProjectType {
  id: number;
  title: string;
  desc: string;
  tools: string;
  linkButton: React.JSX.Element;
  img: string;
}

export const GameProjectList: ProjectType[] = [
  {
    id: 1,
    title: "Bloswordy",
    desc: "2D Action prototype submitted for Pirate Software Game Jam 16.",
    tools: "Godot 4.3, GDScript",
    linkButton: <VariableLinkButton link="https://huntoor.itch.io/bloswordy" variant="itch" />,
    img: "https://img.itch.zone/aW1hZ2UvMzI4MzE5OC8xOTYzNDM5OC5wbmc=/original/%2B9E%2FOG.png",
  },
  {
    id: 2,
    title: "Soul Abscence",
    desc: "2D Strategy prototype submitted for Godot Wild Jam #80.",
    tools: "Godot 4.4, GDScript",
    linkButton: <VariableLinkButton link="https://buymymojo.itch.io/soul-absence" variant="itch" />,
    img: "/img/projects/soul_abscence.webp",
  },
  {
    id: 3,
    title: "Shot in the Dark",
    desc: "2D Survival prototype submitted for Pirate Software Game Jam 17.",
    tools: "Godot 4.4, GDScript",
    linkButton: <VariableLinkButton link="https://raptor1818.itch.io/shot-in-the-dark" variant="itch" />,
    img: "https://img.itch.zone/aW1nLzIyNDIwMDA3LnBuZw==/original/vK9XwW.png",
  },
  {
    id: 4,
    title: "The Grove",
    desc: "2D Platformer Puzzle prototype submitted for Pirate Software Game Jam 14.",
    tools: "Godot 4.2, GDScript",
    linkButton: <VariableLinkButton link="https://dano972c.itch.io/the-grove" variant="itch" />,
    img: "/img/projects/the_grove.webp",
  },
]

export const WebProjectList: ProjectType[] = [
  {
    id: 1,
    title: "RaptorOS",
    desc: "My personal website made to resemble a desktop enviroment.",
    tools: "Next.js, TailwindCSS",
    linkButton:
      <>
        <VariableLinkButton link="https://os.raptorino.com/" variant="website" />
        <VariableLinkButton link="https://github.com/Raptor1818/RaptorOS" variant="github" />
      </>,
    img: "/img/projects/raptoros.webp"
  },
]