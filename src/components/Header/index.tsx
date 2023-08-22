import Link from "next/link";
import LogoIcon from "../Icons/Logo";
import styles from "./styles.module.scss";
import { SecondaryFont } from "@/lib/font";
import clsx from "clsx";
const Header: React.FC = () => {
  return (
    <header className={clsx(SecondaryFont.className, styles.header)}>
      <LogoIcon className={styles.logo} />
      <nav className={styles.navigationMenu}>
        <Link href="#" className={clsx(styles.link, styles.activeLink)}>
          Home
        </Link>
        <Link href="#auction" className={styles.link}>
          Collections
        </Link>
        <Link href="#" className={styles.link}>
          Foundation
        </Link>
      </nav>
    </header>
  );
};

export default Header;
