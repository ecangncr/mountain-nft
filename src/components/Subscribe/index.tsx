import clsx from "clsx";
import Button from "../Button";
import Input from "../Input";
import styles from "./styles.module.scss";
import { SecondaryFont } from "@/lib/font";

const Subscribe: React.FC = () => {
  return (
    <section
      id="subscribe"
      className={clsx(SecondaryFont.className, styles.subscribe)}>
      <h2 className={styles.title}>We don't want to let you down</h2>
      <p className={styles.info}>
        Get notify to our public mint sale event, make sure you didn’t miss it.
        Enter your email below, so we can invite you to join the party.
      </p>
      <form className={styles.form}>
        <Input
          type="email"
          placeholder="Enter email address"
          className={styles.emailInput}
        />
        <Button type="button" className={styles.submitButton}>
          Subscribe
        </Button>
      </form>
    </section>
  );
};

export default Subscribe;
