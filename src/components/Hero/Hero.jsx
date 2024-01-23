import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Emmanuel</h1>
        <p className={styles.description}>
          I am a Frontend Software Engineer who builds interactive, responsive
          and optimized frontend for NextGen software solutions with JavaScript,
          React.js and other modern technologies that enhances performace.
          Kindly reach out to learn more.
        </p>
        <a
          href="mailto:emmanueloluyege@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/hero.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
