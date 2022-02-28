// import Link from 'next/link';
import React from 'react';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import styles from './projects.module.scss';

import projHighlights from './proj_highlights.json';

export const Projects = ({ }) => {
    return (
        <div className={styles.projects}>

            <header className={styles.myWork}>
                <h1>Some of my work</h1>
            </header>

            <ul className={styles.projectList}>
                { projHighlights.map( (proj) => {
                    return (
                        <li key={proj.title}><ProjectCard data={proj}/></li>
                    )
                })}
            </ul>

            {/* TODO: add this for future, right now get a mvp up */}
            {/* 
            <section className={styles.allProjects}>
                <Link href="/about">
                    All Projects
                </Link>
            </section> 
            */}


        </div>
    )
}