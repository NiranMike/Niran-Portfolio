import Link from "next/link";
import styles from "./style.module.scss";
import Magnet from "@/components/MakeThingsMagnet";
const footerLinks = [
  {
    id: 1,
    href: "https://github.com/NiranMike",
    text: "GITHUB",
  },
  {
    id: 2,

    href: "https://www.linkedin.com/in/micheal-olaniran/",
    text: "LINKEDIN",
  },
  {
    id: 4,
    href: "/assets/cv.pdf",
    text: "RESUME",
  },
];
export default function index() {
  return (
    <div className={styles.footer}>
      {footerLinks.map((link) => (
        <Magnet key={link.id}>
          {link.id === 4 ? (
            <Link href={link.href} download={true}>
              CV
            </Link>
          ) : (
            <Link href={link.href} target="_blank">
              {link.text}
            </Link>
          )}
        </Magnet>
      ))}
    </div>
  );
}
