import styles from './iconRow.module.scss';

// to get font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faEnvelope, faFileLines } from '@fortawesome/free-solid-svg-icons';

// to style the icons
import utilStyles from '../../styles/utils.module.scss';

export const IconRow = ({ }) => {

  return (

    <span className={styles.iconRow}>

      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/rileyhgrant/" target="_blank">
        <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} />
      </a>

      {/* Github */}
      <a href="https://github.com/rileyhgrant" target="_blank">
        <FontAwesomeIcon icon={faGithub} className={styles.icon} />
      </a>


      {/* Email */}
        {/*       
      <a href="https://github.com/rileyhgrant" target="_blank">
        <FontAwesomeIcon icon={faEnvelope} className={utilStyles.icon} />
      </a>
       */}

      {/* Resume */}
      <a href="/Resume_RGrant.pdf" target="_blank" rel="noopener noreferrer">
        <span>
          {'Resume '}
          <FontAwesomeIcon icon={faDownload} className={styles.icon}/>
        </span>
      </a>

    </span>
  );
};