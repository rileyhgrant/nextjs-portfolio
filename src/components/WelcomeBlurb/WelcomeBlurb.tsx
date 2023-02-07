import styles from "./welcomeBlurb.module.scss";
import { IconRow } from "../IconRow/IconRow";
import React from "react";

export const WelcomeBlurb = ({}) => {
  return (
    <div className={styles.welcomeBlurb}>
      <header className={styles.hiThere}>
        <h1>{`Hi there, I'm Riley`}</h1>
      </header>
      <section className={styles.briefBlurb}>
        {`I'm a developer, a thru hiker, and a musician.`}
      </section>
      <section className={styles.iconRow}>
        <IconRow />
      </section>
    </div>
  );
};
