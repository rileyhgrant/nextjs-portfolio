import styles from './header.module.scss';

import Link from 'next/link'
import React from 'react';

export const Header = ({ }) => {
    return (
            <div className={styles.header}>
                <h4><Link className={styles.home} href="/">rgrant</Link></h4>
                <h4><Link className={styles.about} href="/about"><a>about</a></Link></h4>
            </div>
    );
};