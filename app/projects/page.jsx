"use client";
import styles from "./style.module.scss";
import { useState } from "react";
import Project from "@/components/project";
import Modal from "@/components/modal";
import FramerAnimation from "@/components/FramerAnimation";

const projects = [
  {
    title: `Motion`,
    src: "motion.png",
    tech: "REACT, NEXT.JS, TAILWINDCSS, CONVEX, TYPESCRIPT",
    color: "#000000",
    href: "https://motion-flame.vercel.app/",
  },
  {
    title: "Instellar Clone",
    src: "instellar.png",
    tech: "REACT,GSAP, TAILWINDCSS, LENIS",
    color: "#EFE8D3",
    href: "https://insterstellar-blush.vercel.app",
  },
  {
    title: `Boobook clone `,
    src: "boobook.png",
    tech: "GSAP, REACT, TAILWIND",
    color: "#000000",
    href: "https://boobook.vercel.app/",
  },
  {
    title: "Artone",
    tech: "REACT, TAILWIND",
    src: "artone.png",
    color: "#EFE8D3",
    href: "https://artone-gray.vercel.app/",
  },
  {
    title: "Weirdo NFT Landing Page",
    tech: "FRAMER MOTION, NEXT.JS, TYPESCRIPT",
    src: "nft.png",
    color: "#706D63",
    href: "https://weirdo-nft-website.vercel.app/",
  },
];
const words = ["MY PROJECTS"];
export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <>
      <FramerAnimation words={words} />

      <main className={styles.main}>
        <div className={styles.body}>
          {projects.map((project, index) => {
            return (
              <Project
                index={index}
                title={project.title}
                href={project.href}
                tech={project.tech}
                setModal={setModal}
                key={index}
              />
            );
          })}
        </div>
        <Modal modal={modal} projects={projects} />
      </main>
    </>
  );
}
