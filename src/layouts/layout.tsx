import styles from "./layout.module.scss";

import { Header } from "../components/Header/header";
import { Footer } from "../components/Footer/footer";

export interface MyProps {
  children: any;
}

export const Layout = (props: MyProps) => {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.childrenContainer}>{props.children}</div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};
