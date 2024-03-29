"use client";
import FramerAnimation from "@/components/FramerAnimation";
import styles from "./styles.module.scss";
import gsap from "gsap";
import { useEffect, useRef, } from "react";
import useDevicewidth from "../../hooks/useDevicewidth";
import { projects } from "./datas";

const words = ["MY SKILLS", "TECHNOLOGIES", "TOOLS"];

export default function Skills() {
  const elementRefs = useRef([]);
  const isMobileWidth = useDevicewidth(480);
  const manageMouseEnter = (e, index) => {
    const topValue = isMobileWidth ? "-2vw" : "-5vw";
    gsap.to(e.target, {
      top: topValue,
      backgroundColor: projects[index].color,
      background: projects[index].background,
      duration: 0.3,
    });
  };
  const manageMouseLeave = (e, index) => {
    gsap.to(e.target, {
      top: "0",
      backgroundColor: "black",
      background: "black",
      duration: 0.3,
      delay: 0.1,
    });
  };
  const handleMouseEnter = (index) => (e) => {
    manageMouseEnter(e, index);
  };

  const handleMouseLeave = (index) => (e) => {
    manageMouseLeave(e, index);
  };
  useEffect(() => {
    // Add an event listener for window resize
    const handleResize = () => {
      // Rerun the animation with the updated top value when the window is resized
      elementRefs.current.forEach((el, index) => {
        if (el) {
          const topValue = isMobileWidth ? "-2vw" : "-5vw";
          gsap.to(el, {
            top: topValue,
            duration: 0.3,
          });
        }
      });
    };
    // Attach the event listener
    if (typeof window !== "undefined") {
      // Add an event listener for window resize
      window.addEventListener("resize", handleResize);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <>
      <FramerAnimation words={words} />

      <div className={styles.container}>
        <div className={styles.projectContainer}>
          {projects.map((project, index) => {
            return (
              <div
                ref={(el) => (elementRefs.current[index] = el)}
                onMouseEnter={handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave(index)}
                key={index}
              >
                <p>{project.title}</p>
              </div>
            );
          })
          }
        </div>
      </div>
    </>
  );
}
