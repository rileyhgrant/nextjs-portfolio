import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import profile from '../../public/images/profile.jpg';
import profile from '/public/images/profile.jpg';
import styles from './projectCard.module.scss';

// for font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';


// TODO: temporary!
import sampleJson from './sample_proj.json';


export const ProjectCard = ({ data }) => {

    return (
        <div className={styles.projectCard}>

            {/* Row to split up image and text into columns */}
            <div className={styles.row}>

                {/* Column for image */}
                <div className={styles.imageCol}>
                    <div className={styles.image}>
                        <Image
                            src={data.image}
                            alt="it me!"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
                

                {/* Column for text */}
                <div className={styles.textCol}>

                    <header className={styles.title}>
                        {data.title}
                        {/* <Link href={data.page}>{data.title}</Link> */}
                    </header>

                    <span className={styles.iconRow}>

                        {/* Code */}
                        <a href={data.github} target="_blank">
                            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
                        </a>

                        {/* Live Demo */}
                        { data.demo && 
                            <a href={data.demo} target="_blank">
                                <FontAwesomeIcon icon={faExternalLink} className={styles.icon} />
                            </a>
                        }

                        {/* Video */}
                        { data.youtube && 
                            <a href={data.youtube} target="_blank">
                                <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
                            </a>
                        }

                    </span>

                    <p className={styles.blurb}>
                        {data.blurb}
                    </p>

                </div>
            </div>
        </div>
    );
};