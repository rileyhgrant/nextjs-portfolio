/* eslint-disable @next/next/no-img-element */
import React from "react";
// import Link from 'next/link';
// import Image from 'next/image';
// import profile from '../../public/images/profile.jpg';
// import profile from '/public/images/profile.jpg';
import styles from "./projectCard.module.scss";

// for font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";

export interface Project {
  data: {
    title: string;
    lang: string;
    page: string;
    image: string;
    github: string;
    youtube: string;
    demo: string;
    blurb: string;
  };
}

export const ProjectCard = (props: Project) => {
  return (
    <div className={styles.projectCard}>
      {/* Row to split up image and text into columns */}
      <div className={styles.row}>
        {/* Column for image */}
        <div className={styles.imageCol}>
          <div className={styles.image}>
            {/* <Image
                            src={props.data.image}
                            alt="it me!"
                            width={300}
                            height={300}
                        /> */}
            <img
              src={props.data.image}
              alt={props.data.title}
            ></img>
          </div>
        </div>

        {/* Column for text */}
        <div className={styles.textCol}>
          <header className={styles.title}>
            {props.data.title}
            {/* <Link href={data.page}>{data.title}</Link> */}
          </header>

          <span className={styles.iconRow}>
            {/* Code */}
            <a href={props.data.github} target="_blank" rel="noreferrer">
              {/* @ts-expect-error */}
              <FontAwesomeIcon icon={faGithub} className={styles.icon} />
            </a>

            {/* Live Demo */}
            {props.data.demo && (
              <a href={props.data.demo} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  // @ts-expect-error
                  icon={faExternalLink}
                  className={styles.icon}
                />
              </a>
            )}

            {/* Video */}
            {props.data.youtube && (
              <a href={props.data.youtube} target="_blank" rel="noreferrer">
                {/* @ts-expect-error */}
                <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
              </a>
            )}
          </span>

          <p className={styles.blurb}>{props.data.blurb}</p>
        </div>
      </div>
    </div>
  );
};
