"use client";
import styles from "./page.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "@/hooks/useMousePostion";
import FramerAnimation from "@/components/FramerAnimation";

export default function About() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;
  const words = ["ABOUT ME"];

  return (
    <>
      <FramerAnimation words={words} />
      <main className={styles.main}>
        <motion.div
          className={styles.mask}
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        >
          <motion.p
            style={{
              paddingTop: "3rem", // default padding
              "@media (max-width: 480px)": {
                paddingTop: "3rem",
              },
            }}
            initial="initial"
            animate="animate"
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            onTouchStart={() => {
              setIsHovered(true);
            }}
            onTouchEnd={() => {
              setIsHovered(false);
            }}
          >
            When I'm not creating or exploring new web experiences, I'm probably
            reading articles. I love the challenge of
            solving problems with code, and there's nothing more satisfying than
            seeing lines of code come to life as something real and
            useful.Exploring new technologies keeps me excited
          </motion.p>
          <motion.p
            initial="initial"
            animate="animate"
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            onTouchStart={() => {
              setIsHovered(true);
            }}
            onTouchEnd={() => {
              setIsHovered(false);
            }}
          >
            "The more you know, the more you realize how much you don’t know." – Albert Einstein
          </motion.p>
        </motion.div>

        <div className={styles.body}>
          <motion.p initial="initial" animate="animate">
            I'm <span>Olaniran Micheal</span> a{" "}
            <span>Frontend Web Developer</span>.I’ve been into frontend
            development for over 2 years. I’ve learned a lot in that time
            and now I want to see how far I’ve come. Able to perform
            successfully both alone and in a team. My long-term objective is to
            work as a senior frontend engineer.
          </motion.p>

          <motion.p initial="initial" animate="animate">
            My Motto is...
          </motion.p>
        </div>
      </main>
    </>
  );
}
