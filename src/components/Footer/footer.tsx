import styles from './footer.module.scss';

import React from 'react';
import Link from 'next/link'
import next from 'next';

export const Footer = ({ }) => {
    return (
        <div className={styles.footer}>
            <h5><span className={styles.copyright}>built with <a href="https://nextjs.org/" target="_blank">NextJS</a></span></h5>
            <h5><span className={styles.copyright}>See the <a href="https://github.com/rileyhgrant" target="_blank">code</a></span></h5>
        </div>
    );
};