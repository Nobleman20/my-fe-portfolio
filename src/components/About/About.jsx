import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/about.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div>
              <h3>Frontend Developer </h3>
              <p>
                I have experience in building responsive and optimized software
                applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div>
              <h3>Backend Developer </h3>
              <p>
                I have experience in building fast and optimized backend systems
                and APIs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div>
              <h3>Database Designer </h3>
              <p>
                I have experience in designing and building data models for
                applications.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
