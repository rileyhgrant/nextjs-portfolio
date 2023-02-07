/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./aboutBlurb.module.scss";
// import profile from '/public/images/profile.jpg';

// import Image from 'next/image';

export interface AbtData {
  abtData: {
    title: string;
    contentHtml: string;
  };
}

export const AboutBlurb = (props: AbtData) => {
  return (
    <div className={styles.aboutBlurb}>
      {/* row to split to two columns */}
      <div className={styles.row}>
        {/* Column for image */}
        <div className={styles.imageCol}>
          <div className={styles.image}>
            {/* <Image 
                            // src="/src/public/images/profile.jpg"
                            src={profile}
                            alt="it me!"
                            width={400}
                            height={400}
                        /> */}
            <img src="/images/profile.jpg" alt={`Riley H. Grant`}></img>
          </div>

          <div className={styles.links}>
            <h4>Connect with me</h4>
            <span>
              {`on `}
              <a
                href="https://www.linkedin.com/in/rileyhgrant/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </span>
            <span>
              {`on `}
              <a
                href="https://github.com/rileyhgrant"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </span>
            <span>
              {`via `}
              <a
                href="mailto: grantrileyh@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Email
              </a>
            </span>
            <span>
              {`see my `}
              <a
                href="/Resume_RGrant.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </span>
          </div>
        </div>

        {/* Column for image */}
        <div className={styles.textCol}>
          <header className={styles.title}>
            <h1>{props.abtData.title}</h1>
          </header>

          <div
            dangerouslySetInnerHTML={{ __html: props.abtData.contentHtml }}
          />
        </div>
      </div>
    </div>
  );
};
