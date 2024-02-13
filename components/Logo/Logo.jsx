import React from "react";
import styles from "./styles.module.scss"
import Link from "next/link";
const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      <p className={styles.copyright}>OM</p>
      <div className={styles.name}>
        <p className={styles.codeBy}>Olaniran</p>
        <p className={styles.dennis}>Micheal</p>
        <p className={styles.snellenberg}>Niran</p>
     </div>
    </Link>
  );
};

export default Logo;
