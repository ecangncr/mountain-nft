import AnimatedBackground from "@/components/AnimatedBackground";
import styles from "./styles.module.scss";
import clsx from "clsx";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <div className={clsx(styles.homeWrapper, "fluid")}>
        <AnimatedBackground />
        <div className={clsx(styles.home, "container")}>
          <Header />
        </div>
      </div>
    </>
  );
}
