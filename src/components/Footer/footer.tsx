import styles from './footer.module.scss';

import React from 'react';
import Link from 'next/link'
import next from 'next';

export const Footer = ({ }) => {
    return (
        <div className={styles.footer}>
            <h4><span className={styles.copyright}>Built with <a href="https://nextjs.org/" target="_blank">NextJS</a></span></h4>
            <h4><span className={styles.copyright}>See the <a href="https://github.com/rileyhgrant" target="_blank">code</a></span></h4>
        </div>
    );
};