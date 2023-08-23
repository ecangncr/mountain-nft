import ScrollIcon from "../Icons/Scroll";
import styles from "./styles.module.scss";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.wrapper}>
        <ScrollIcon />
        <h1>Mountain NFT Collectibles</h1>
      </div>
      <div className={styles.imageArea}>
        <Image src="/images/shape.png" alt="Shape" priority fill />
      </div>
    </section>
  );
};

export default Hero;
