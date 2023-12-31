import AnimatedBackground from "@/components/AnimatedBackground";
import styles from "./styles.module.scss";
import clsx from "clsx";
import Header from "@/components/Header";

import Hero from "@/components/Hero";
import Auction from "@/components/Auction";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <div className={clsx(styles.homeWrapper, "fluid")}>
        <AnimatedBackground />
        <div className={clsx(styles.home, "container")}>
          <Header />
          <Hero />
        </div>
      </div>
      <Auction />
      <Subscribe />
      <Footer />
    </>
  );
}
