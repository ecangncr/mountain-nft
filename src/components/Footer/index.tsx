import Link from "next/link";
import LogoIcon from "../Icons/Logo";
import styles from "./styles.module.scss";
import { MainFont } from "@/lib/font";
import clsx from "clsx";
import InstagramIcon from "../Icons/Instagram";
import TwitterIcon from "../Icons/Twitter";
import DiscordIcon from "../Icons/Discord";
import Image from "next/image";
import GithubIcon from "../Icons/Github";
import RedditIcon from "../Icons/Reddit";
const Footer: React.FC = () => {
  return (
    <footer
      id={"footer"}
      className={clsx(MainFont.className, styles.footer, "container", "fluid")}>
      <div className={styles.footerWrapper}>
        <div className={styles.iconArea}>
          <InstagramIcon />
          <GithubIcon />
          <DiscordIcon />
          <TwitterIcon />
          <RedditIcon />
        </div>
        <div className={styles.poweredBy}>
          <LogoIcon style={{ width: "106px", height: "51px" }} />

          <div className={styles.companyArea}>
            <p>Powered by</p>
            <div className={styles.companyLogos}>
              <Image
                src="/images/solana.jpg"
                alt="Solana"
                width={138}
                height={22}
              />
              <Image
                src="/images/opensea.png"
                alt="Solana"
                width={138}
                height={32}
              />
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <p className={styles.copyright}>
            Copyright © 2023 MT Foundation Limited. All rights reserved.
          </p>
          <nav>
            <Link href="#">About</Link>
            <Link href="#">Privacy</Link>
            <Link href="#">Contact us</Link>
            <Link href="#">Disclaimer</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
