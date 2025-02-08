import { ReactElement } from "react";
import { FaPython, FaReact } from "react-icons/fa";
import { SiScikitlearn, SiNumpy } from "react-icons/si";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";

type StackProps = {
  icon: ReactElement;
  title: string;
}

export const techStack: StackProps[] = [
  {
    icon: <FaPython />,
    title: "Python"
  },
  {
    icon: <SiScikitlearn />,
    title: "Scikit-learn"
  },
  {
    icon: <SiNumpy  />,
    title: "Numpy"
  },
  {
    icon: <FaReact />,
    title: "React.js"
  },
  {
    icon: <RiNextjsLine />,
    title: "Next.js"
  },
  {
    icon: <TbBrandTypescript />,
    title: "TypeScript"
  },
  {
    icon: <AiOutlineHtml5 />,
    title: "HTML"
  },
  {
    icon: <RiTailwindCssFill />,
    title: "Tailwind"
  },
]