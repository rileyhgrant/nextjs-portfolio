import styles from './header.module.scss';

import Link from 'next/link'
import React from 'react';

export const Header = ({ }) => {
    return (
            <div className={styles.header}>
                <Link className={styles.home} href="/"><a>rgrant</a></Link>
                <Link className={styles.about} href="/about"><a>about</a></Link>
            </div>
    );
};