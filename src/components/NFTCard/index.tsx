import clsx from "clsx";
import styles from "./styles.module.scss";
import Image from "next/image";
import { MainFont, SecondaryFont } from "@/lib/font";
import LinkIcon from "../Icons/Link";
import Link from "next/link";
import { INFT } from "@/interfaces";

const NFTCard: React.FC<INFT> = ({ name, imageUrl, link }) => {
  return (
    <div className={clsx(MainFont.className, styles.card)}>
      <div className={styles.imageArea}>
        <Image src={imageUrl} alt={name} priority fill />
      </div>
      <div className={styles.wrapper}>
        <h4 className={styles.title}>Collectible</h4>
        <h3 className={styles.nftName}> {name} </h3>
      </div>
      <div className={styles.rectangle} />
      <div className={clsx(SecondaryFont.className, styles.linkArea)}>
        <LinkIcon />
        <Link href={link} target="_blank" className={styles.link}>
          view collectible
        </Link>
      </div>
    </div>
  );
};

export default NFTCard;
