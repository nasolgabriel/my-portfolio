import { IconBrandGithub } from "@tabler/icons-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const links = [
  {
    title: "Github",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-900" />
    ),
    href: "https://github.com/nasolgabriel",
  },
  {
    title: "LinkedIn",
    icon: (
      <FaLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-900" />
    ),
    href: "https://www.linkedin.com/in/gabriel-nasol/",
  },
  {
    title: "Instagram",
    icon: (
      <FaInstagram className="h-full w-full text-neutral-500 dark:text-neutral-900" />
    ),
    href: "https://www.instagram.com/gabb_gabbo/",
  },
  {
    title: "Facebook",
    icon: (
      <FaFacebook className="h-full w-full text-neutral-500 dark:text-neutral-900" />
    ),
    href: "https://www.facebook.com/gabriel.nasol/",
  },    
];

export default links;
