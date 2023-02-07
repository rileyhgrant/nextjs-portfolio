import styles from "./iconRow.module.scss";

// to get font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export const IconRow = ({}) => {
  return (
    <span className={styles.iconRow}>
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/rileyhgrant/"
        target="_blank"
        rel="noreferrer"
      >
        {/* @ts-expect-error */}
        <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} />
      </a>
      {/* Github */}
      <a href="https://github.com/rileyhgrant" target="_blank" rel="noreferrer">
        {/* @ts-expect-error */}
        <FontAwesomeIcon icon={faGithub} className={styles.icon} />
      </a>
      {/* ? Email */}
      {/* Resume */}
      <a href="/Resume_RGrant.pdf" target="_blank" rel="noreferrer">
        <span>
          {"Resume "}
          {/* @ts-expect-error */}
          <FontAwesomeIcon icon={faDownload} className={styles.icon} />
        </span>
      </a>
    </span>
  );
};
