"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [remainingTime, setRemainingTime] = useState<number>(0);

  useEffect(() => {
    const currentTime = new Date().getTime();
    const difference = targetDate.getTime() - currentTime;

    if (difference > 0) {
      const interval = setInterval(() => {
        const currentTime = new Date().getTime();
        const difference = targetDate.getTime() - currentTime;
        setRemainingTime(difference);
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setRemainingTime(0);
    }
  }, [targetDate]);

  const formatTime = (
    time: number
  ): { days: number; hours: number; minutes: number; seconds: number } => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(remainingTime);

  return (
    <div className={styles.countdown}>
      <div className={styles.item}>
        <div className={styles.value}>{days}</div>
        <div className={styles.title}>Days</div>
      </div>
      <div className={styles.item}>
        <div className={styles.value}>{hours}</div>
        <div className={styles.title}>Hours</div>
      </div>
      <div className={styles.item}>
        <div className={styles.value}>{minutes}</div>
        <div className={styles.title}>Minutes</div>
      </div>
      <div className={styles.item}>
        <div className={styles.value}>{seconds}</div>
        <div className={styles.title}>Seconds</div>
      </div>
    </div>
  );
};

export default Countdown;
