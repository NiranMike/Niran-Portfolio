"use client";
import React, { useEffect } from "react";
import "./styles.css";

import {
  GithubIcon,
  LinkedinIcon,
  Copy,
  FacebookIcon,
  InstagramIcon,
  MailboxIcon,
  Phone,
} from "lucide-react";
import Link from "next/link";
const socials = [
  {
    name: "Git",
    nameTwo: "hub",
    icon: <GithubIcon />,
    href: "https://github.com/NiranMike",
  },
  {
    name: "Link",
    nameTwo: "edIn",
    icon: <LinkedinIcon />,
    href: "https://www.linkedin.com/in/micheal-olaniran-678837201/",
  },
  {
    name: "olaniranmicheal081",
    nameTwo: "@gmail.com",
    icon: <MailboxIcon />,
    href: "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZWPGKjwgXlHFBlZxTdnPMSFBVNRDSqbrZFRXmqxhRGWkKFFffBcDFCnBDCqJLvtXQxVcg",
  },
  {
    name: "+2349036",
    nameTwo: "130403",
    icon: <Phone />,
    href: "",
  },
];

const AnimatingSocialLinks = () => {
  useEffect(() => {
    // Function to get a random character
    function getRandomCharacter() {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      return chars[Math.floor(Math.random() * chars.length)];
    }

    // Function to perform the shuffle animation
    function shuffleAnimation(event) {
      const target = event.currentTarget;
      if (target.dataset.animating) {
        return;
      }
      target.dataset.animating = true;
      const words = target.querySelectorAll(".word");
      const originalWords = Array.from(words).map((word) => word.textContent);

      let shuffles = 0;
      const maxShuffles = 10;
      const intervalDuration = 700 / maxShuffles;
      let animationInterval = setInterval(() => {
        if (shuffles >= maxShuffles) {
          clearInterval(animationInterval);
          words.forEach((word, index) => {
            word.textContent = originalWords[index];
          });
          delete target.dataset.animating;
        } else {
          words.forEach((word) => {
            const length = word.textContent.length;
            let shuffledText = "";
            for (let i = 0; i < length; i++) {
              shuffledText += getRandomCharacter();
            }
            word.textContent = shuffledText;
          });
          shuffles++;
        }
      }, intervalDuration);
    }

    // Attach event listeners to elements with the 'item' class for both mouse and touch events
    const items = document.querySelectorAll(".item");
    items.forEach((item) => {
      item.addEventListener("mouseenter", shuffleAnimation);
      item.addEventListener("touchstart", shuffleAnimation); // Add touchstart event
    });

    // Remove event listeners when the component unmounts
    return () => {
      items.forEach((item) => {
        item.removeEventListener("mouseenter", shuffleAnimation);
        item.removeEventListener("touchstart", shuffleAnimation); // Remove touchstart event
      });
    };
  }, []);
  return (
    <div>
      <div className="container">
        {socials.map((social, i) => (
          <Link href={social.href} target="_blank" key={i}>
            <div className="item item-1">
              <div className="word w1">{social.name} </div>
              <div className="img">{social.icon}</div>
              <div className="word w2">{social.nameTwo} </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AnimatingSocialLinks;
