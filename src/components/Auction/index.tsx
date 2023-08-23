"use client";
import { SecondaryFont } from "@/lib/font";
import Countdown from "../Countdown";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { useEffect, useState } from "react";
import NFTCard from "../NFTCard";
import { NFT_LIST } from "./constants";
import { INFT } from "@/interfaces";
const Auction: React.FC = () => {
  const [targetDate, setTargetDate] = useState<Date>(new Date());

  useEffect(() => {
    const now = new Date();
    now.setDate(now.getDate() + 30);
    setTargetDate(now);
  }, []);

  const formattedDate = targetDate?.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section
      id="auction"
      className={clsx(SecondaryFont.className, styles.auction)}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h2>AUCTION IS COMING SOON</h2>
          <p>Our public sale event will be held on {formattedDate}.</p>
        </div>

        <Countdown targetDate={targetDate} />
      </div>
      <div className={styles.cardArea}>
        {NFT_LIST.map((item: INFT) => (
          <NFTCard
            key={item.id}
            id={item.id}
            name={item.name}
            link={item.link}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Auction;
