import styles from './footer.module.scss';

import React from 'react';
import Link from 'next/link'
import next from 'next';

export const Footer = ({ }) => {
    return (
        <div className={styles.footer}>
            <span className={styles.copyright}>Built with <a href="https://nextjs.org/">NextJS</a></span>
            <span className={styles.copyright}>See the <a href="https://github.com/rileyhgrant">code</a></span>
        </div>
    );
};