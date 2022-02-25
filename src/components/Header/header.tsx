import styles from './header.module.scss';

import Link from 'next/link'
import React, { FunctionComponent } from 'react';

export const Header: FunctionComponent = ({ }) => {
    return (
            <div className={styles.header}>
                <h4 className={styles.home}><Link  href="/">r.h.grant</Link></h4>
                <h4 className={styles.about}><Link href="/about"><a>about</a></Link></h4>
            </div>
    );
};